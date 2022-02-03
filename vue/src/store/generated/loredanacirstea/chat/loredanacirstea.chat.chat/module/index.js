// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteMessage } from "./types/chat/tx";
import { MsgSendSpaceMessage } from "./types/chat/tx";
import { MsgUpdateMessage } from "./types/chat/tx";
import { MsgCreateMessage } from "./types/chat/tx";
const types = [
    ["/loredanacirstea.chat.chat.MsgDeleteMessage", MsgDeleteMessage],
    ["/loredanacirstea.chat.chat.MsgSendSpaceMessage", MsgSendSpaceMessage],
    ["/loredanacirstea.chat.chat.MsgUpdateMessage", MsgUpdateMessage],
    ["/loredanacirstea.chat.chat.MsgCreateMessage", MsgCreateMessage],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteMessage: (data) => ({ typeUrl: "/loredanacirstea.chat.chat.MsgDeleteMessage", value: MsgDeleteMessage.fromPartial(data) }),
        msgSendSpaceMessage: (data) => ({ typeUrl: "/loredanacirstea.chat.chat.MsgSendSpaceMessage", value: MsgSendSpaceMessage.fromPartial(data) }),
        msgUpdateMessage: (data) => ({ typeUrl: "/loredanacirstea.chat.chat.MsgUpdateMessage", value: MsgUpdateMessage.fromPartial(data) }),
        msgCreateMessage: (data) => ({ typeUrl: "/loredanacirstea.chat.chat.MsgCreateMessage", value: MsgCreateMessage.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
