import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../chat/params";
import { Message } from "../chat/message";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "loredanacirstea.chat.chat";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetMessageRequest {
    id: number;
}
export interface QueryGetMessageResponse {
    Message: Message | undefined;
}
export interface QueryAllMessageRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMessageResponse {
    Message: Message[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetMessageRequest: {
    encode(message: QueryGetMessageRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMessageRequest;
    fromJSON(object: any): QueryGetMessageRequest;
    toJSON(message: QueryGetMessageRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMessageRequest>): QueryGetMessageRequest;
};
export declare const QueryGetMessageResponse: {
    encode(message: QueryGetMessageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMessageResponse;
    fromJSON(object: any): QueryGetMessageResponse;
    toJSON(message: QueryGetMessageResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMessageResponse>): QueryGetMessageResponse;
};
export declare const QueryAllMessageRequest: {
    encode(message: QueryAllMessageRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMessageRequest;
    fromJSON(object: any): QueryAllMessageRequest;
    toJSON(message: QueryAllMessageRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMessageRequest>): QueryAllMessageRequest;
};
export declare const QueryAllMessageResponse: {
    encode(message: QueryAllMessageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMessageResponse;
    fromJSON(object: any): QueryAllMessageResponse;
    toJSON(message: QueryAllMessageResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMessageResponse>): QueryAllMessageResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Message by id. */
    Message(request: QueryGetMessageRequest): Promise<QueryGetMessageResponse>;
    /** Queries a list of Message items. */
    MessageAll(request: QueryAllMessageRequest): Promise<QueryAllMessageResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Message(request: QueryGetMessageRequest): Promise<QueryGetMessageResponse>;
    MessageAll(request: QueryAllMessageRequest): Promise<QueryAllMessageResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
