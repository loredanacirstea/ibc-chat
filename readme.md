# chat
**chat** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://starport.com).

## Get started

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.com).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.com/loredanacirstea/chat@latest! | sudo bash
```
`loredanacirstea/chat` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://starport.com)
- [Tutorials](https://docs.starport.com/guide)
- [Starport docs](https://docs.starport.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/H6wGTY8sxw)


## Commands

From tutorial at https://www.youtube.com/watch?v=816PP8oXv0Q&t=3291s

```

starport scaffold chain github.com/loredanacirstea/chat
starport scaffold module chat --ibc --ordering unordered
starport scaffold list message body --module chat
starport chain serve

chatd tx chat create-message "hello" --from alice
chatd query chat list-message
chatd tx chat create-message "hello alice" --from bob --yes

starport scaffold packet spaceMessage body:string user:string --module chat
starport chain serve --force-reset

npm i -g @confio/relayer@main
ibc-setup init
# Add chat-1 and chat-2 to ~/.ibc-setup/registry.yaml
ibc-setup init --src chat-1 --dest chat-2
chatd keys add relayer --recover --dry-run

starport chain serve --config ./config-1.yml --force-reset
starport chain serve --config ./config-2.yml --force-reset
ibc-setup connect -v

ibc-setup channel -v \
--src-connection connection-0 \
--dest-connection connection-0 \
--src-port chat \
--dest-port chat \
--version chat-1

ibc-relayer start -v

chatd keys add alice --recover --home ~/.chat-1
chatd keys add bob --recover --home ~/.chat-2


chatd tx chat send-space-message chat channel-0 "Hi Bob" cosmos1tqjw6pxw8mnvsmye6wj48t8ktsdf40v6aq9c42 --from alice --yes --chain-id chat-1 --home ~/.chat-1 --node tcp://localhost:36657

chatd query chat list-message --node tcp://localhost:36657
chatd query chat list-message --node tcp://localhost:46657

chatd tx chat send-space-message chat channel-0 "Hi Alice" cosmos1upur2220uuv4pynzj5a2vxyqzhv8ekh2p0f86s --from bob --yes --chain-id chat-2 --home ~/.chat-2 --node tcp://localhost:46657

```
