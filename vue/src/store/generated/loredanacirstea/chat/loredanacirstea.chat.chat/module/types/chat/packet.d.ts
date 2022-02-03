import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "loredanacirstea.chat.chat";
export interface ChatPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    spaceMessagePacket: SpaceMessagePacketData | undefined;
}
export interface NoData {
}
/** SpaceMessagePacketData defines a struct for the packet payload */
export interface SpaceMessagePacketData {
    body: string;
    user: string;
}
/** SpaceMessagePacketAck defines a struct for the packet acknowledgment */
export interface SpaceMessagePacketAck {
}
export declare const ChatPacketData: {
    encode(message: ChatPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ChatPacketData;
    fromJSON(object: any): ChatPacketData;
    toJSON(message: ChatPacketData): unknown;
    fromPartial(object: DeepPartial<ChatPacketData>): ChatPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const SpaceMessagePacketData: {
    encode(message: SpaceMessagePacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SpaceMessagePacketData;
    fromJSON(object: any): SpaceMessagePacketData;
    toJSON(message: SpaceMessagePacketData): unknown;
    fromPartial(object: DeepPartial<SpaceMessagePacketData>): SpaceMessagePacketData;
};
export declare const SpaceMessagePacketAck: {
    encode(_: SpaceMessagePacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SpaceMessagePacketAck;
    fromJSON(_: any): SpaceMessagePacketAck;
    toJSON(_: SpaceMessagePacketAck): unknown;
    fromPartial(_: DeepPartial<SpaceMessagePacketAck>): SpaceMessagePacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
