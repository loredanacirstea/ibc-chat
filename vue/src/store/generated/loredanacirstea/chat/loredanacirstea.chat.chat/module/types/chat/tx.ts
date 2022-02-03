/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "loredanacirstea.chat.chat";

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

export interface MsgUpdateMessageResponse {}

export interface MsgDeleteMessage {
  creator: string;
  id: number;
}

export interface MsgDeleteMessageResponse {}

export interface MsgSendSpaceMessage {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  body: string;
  user: string;
}

export interface MsgSendSpaceMessageResponse {}

const baseMsgCreateMessage: object = { creator: "", body: "" };

export const MsgCreateMessage = {
  encode(message: MsgCreateMessage, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMessage } as MsgCreateMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMessage {
    const message = { ...baseMsgCreateMessage } as MsgCreateMessage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMessage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMessage>): MsgCreateMessage {
    const message = { ...baseMsgCreateMessage } as MsgCreateMessage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseMsgCreateMessageResponse: object = { id: 0 };

export const MsgCreateMessageResponse = {
  encode(
    message: MsgCreateMessageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMessageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMessageResponse,
    } as MsgCreateMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMessageResponse {
    const message = {
      ...baseMsgCreateMessageResponse,
    } as MsgCreateMessageResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateMessageResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMessageResponse>
  ): MsgCreateMessageResponse {
    const message = {
      ...baseMsgCreateMessageResponse,
    } as MsgCreateMessageResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateMessage: object = { creator: "", id: 0, body: "" };

export const MsgUpdateMessage = {
  encode(message: MsgUpdateMessage, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMessage } as MsgUpdateMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMessage {
    const message = { ...baseMsgUpdateMessage } as MsgUpdateMessage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMessage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMessage>): MsgUpdateMessage {
    const message = { ...baseMsgUpdateMessage } as MsgUpdateMessage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseMsgUpdateMessageResponse: object = {};

export const MsgUpdateMessageResponse = {
  encode(
    _: MsgUpdateMessageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMessageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMessageResponse,
    } as MsgUpdateMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMessageResponse {
    const message = {
      ...baseMsgUpdateMessageResponse,
    } as MsgUpdateMessageResponse;
    return message;
  },

  toJSON(_: MsgUpdateMessageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMessageResponse>
  ): MsgUpdateMessageResponse {
    const message = {
      ...baseMsgUpdateMessageResponse,
    } as MsgUpdateMessageResponse;
    return message;
  },
};

const baseMsgDeleteMessage: object = { creator: "", id: 0 };

export const MsgDeleteMessage = {
  encode(message: MsgDeleteMessage, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMessage } as MsgDeleteMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMessage {
    const message = { ...baseMsgDeleteMessage } as MsgDeleteMessage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteMessage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMessage>): MsgDeleteMessage {
    const message = { ...baseMsgDeleteMessage } as MsgDeleteMessage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteMessageResponse: object = {};

export const MsgDeleteMessageResponse = {
  encode(
    _: MsgDeleteMessageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMessageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMessageResponse,
    } as MsgDeleteMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteMessageResponse {
    const message = {
      ...baseMsgDeleteMessageResponse,
    } as MsgDeleteMessageResponse;
    return message;
  },

  toJSON(_: MsgDeleteMessageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMessageResponse>
  ): MsgDeleteMessageResponse {
    const message = {
      ...baseMsgDeleteMessageResponse,
    } as MsgDeleteMessageResponse;
    return message;
  },
};

const baseMsgSendSpaceMessage: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  body: "",
  user: "",
};

export const MsgSendSpaceMessage = {
  encode(
    message: MsgSendSpaceMessage,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.body !== "") {
      writer.uint32(42).string(message.body);
    }
    if (message.user !== "") {
      writer.uint32(50).string(message.user);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendSpaceMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendSpaceMessage } as MsgSendSpaceMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.body = reader.string();
          break;
        case 6:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendSpaceMessage {
    const message = { ...baseMsgSendSpaceMessage } as MsgSendSpaceMessage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    return message;
  },

  toJSON(message: MsgSendSpaceMessage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.body !== undefined && (obj.body = message.body);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendSpaceMessage>): MsgSendSpaceMessage {
    const message = { ...baseMsgSendSpaceMessage } as MsgSendSpaceMessage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    return message;
  },
};

const baseMsgSendSpaceMessageResponse: object = {};

export const MsgSendSpaceMessageResponse = {
  encode(
    _: MsgSendSpaceMessageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendSpaceMessageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendSpaceMessageResponse,
    } as MsgSendSpaceMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendSpaceMessageResponse {
    const message = {
      ...baseMsgSendSpaceMessageResponse,
    } as MsgSendSpaceMessageResponse;
    return message;
  },

  toJSON(_: MsgSendSpaceMessageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendSpaceMessageResponse>
  ): MsgSendSpaceMessageResponse {
    const message = {
      ...baseMsgSendSpaceMessageResponse,
    } as MsgSendSpaceMessageResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMessage(request: MsgCreateMessage): Promise<MsgCreateMessageResponse>;
  UpdateMessage(request: MsgUpdateMessage): Promise<MsgUpdateMessageResponse>;
  DeleteMessage(request: MsgDeleteMessage): Promise<MsgDeleteMessageResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendSpaceMessage(
    request: MsgSendSpaceMessage
  ): Promise<MsgSendSpaceMessageResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateMessage(request: MsgCreateMessage): Promise<MsgCreateMessageResponse> {
    const data = MsgCreateMessage.encode(request).finish();
    const promise = this.rpc.request(
      "loredanacirstea.chat.chat.Msg",
      "CreateMessage",
      data
    );
    return promise.then((data) =>
      MsgCreateMessageResponse.decode(new Reader(data))
    );
  }

  UpdateMessage(request: MsgUpdateMessage): Promise<MsgUpdateMessageResponse> {
    const data = MsgUpdateMessage.encode(request).finish();
    const promise = this.rpc.request(
      "loredanacirstea.chat.chat.Msg",
      "UpdateMessage",
      data
    );
    return promise.then((data) =>
      MsgUpdateMessageResponse.decode(new Reader(data))
    );
  }

  DeleteMessage(request: MsgDeleteMessage): Promise<MsgDeleteMessageResponse> {
    const data = MsgDeleteMessage.encode(request).finish();
    const promise = this.rpc.request(
      "loredanacirstea.chat.chat.Msg",
      "DeleteMessage",
      data
    );
    return promise.then((data) =>
      MsgDeleteMessageResponse.decode(new Reader(data))
    );
  }

  SendSpaceMessage(
    request: MsgSendSpaceMessage
  ): Promise<MsgSendSpaceMessageResponse> {
    const data = MsgSendSpaceMessage.encode(request).finish();
    const promise = this.rpc.request(
      "loredanacirstea.chat.chat.Msg",
      "SendSpaceMessage",
      data
    );
    return promise.then((data) =>
      MsgSendSpaceMessageResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
