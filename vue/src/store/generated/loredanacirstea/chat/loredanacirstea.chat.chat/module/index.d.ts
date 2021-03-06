import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendSpaceMessage } from "./types/chat/tx";
import { MsgUpdateMessage } from "./types/chat/tx";
import { MsgCreateMessage } from "./types/chat/tx";
import { MsgDeleteMessage } from "./types/chat/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgSendSpaceMessage: (data: MsgSendSpaceMessage) => EncodeObject;
    msgUpdateMessage: (data: MsgUpdateMessage) => EncodeObject;
    msgCreateMessage: (data: MsgCreateMessage) => EncodeObject;
    msgDeleteMessage: (data: MsgDeleteMessage) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
