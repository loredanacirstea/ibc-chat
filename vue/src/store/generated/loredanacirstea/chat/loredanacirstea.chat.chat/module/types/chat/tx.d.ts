import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "loredanacirstea.chat.chat";
export interface MsgCreateMessage {
    creator: string;
    body: string;
}
export interface MsgCreateMessageResponse {
    id: number;
}
export interface MsgUpdateMessage {
    creator: string;
    id: number;
    body: string;
}
export interface MsgUpdateMessageResponse {
}
export interface MsgDeleteMessage {
    creator: string;
    id: number;
}
export interface MsgDeleteMessageResponse {
}
export declare const MsgCreateMessage: {
    encode(message: MsgCreateMessage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMessage;
    fromJSON(object: any): MsgCreateMessage;
    toJSON(message: MsgCreateMessage): unknown;
    fromPartial(object: DeepPartial<MsgCreateMessage>): MsgCreateMessage;
};
export declare const MsgCreateMessageResponse: {
    encode(message: MsgCreateMessageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMessageResponse;
    fromJSON(object: any): MsgCreateMessageResponse;
    toJSON(message: MsgCreateMessageResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateMessageResponse>): MsgCreateMessageResponse;
};
export declare const MsgUpdateMessage: {
    encode(message: MsgUpdateMessage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMessage;
    fromJSON(object: any): MsgUpdateMessage;
    toJSON(message: MsgUpdateMessage): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMessage>): MsgUpdateMessage;
};
export declare const MsgUpdateMessageResponse: {
    encode(_: MsgUpdateMessageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMessageResponse;
    fromJSON(_: any): MsgUpdateMessageResponse;
    toJSON(_: MsgUpdateMessageResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMessageResponse>): MsgUpdateMessageResponse;
};
export declare const MsgDeleteMessage: {
    encode(message: MsgDeleteMessage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMessage;
    fromJSON(object: any): MsgDeleteMessage;
    toJSON(message: MsgDeleteMessage): unknown;
    fromPartial(object: DeepPartial<MsgDeleteMessage>): MsgDeleteMessage;
};
export declare const MsgDeleteMessageResponse: {
    encode(_: MsgDeleteMessageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMessageResponse;
    fromJSON(_: any): MsgDeleteMessageResponse;
    toJSON(_: MsgDeleteMessageResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteMessageResponse>): MsgDeleteMessageResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateMessage(request: MsgCreateMessage): Promise<MsgCreateMessageResponse>;
    UpdateMessage(request: MsgUpdateMessage): Promise<MsgUpdateMessageResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteMessage(request: MsgDeleteMessage): Promise<MsgDeleteMessageResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateMessage(request: MsgCreateMessage): Promise<MsgCreateMessageResponse>;
    UpdateMessage(request: MsgUpdateMessage): Promise<MsgUpdateMessageResponse>;
    DeleteMessage(request: MsgDeleteMessage): Promise<MsgDeleteMessageResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
