/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "loredanacirstea.chat.chat";

export interface ChatPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  spaceMessagePacket: SpaceMessagePacketData | undefined;
}

export interface NoData {}

/** SpaceMessagePacketData defines a struct for the packet payload */
export interface SpaceMessagePacketData {
  body: string;
  user: string;
}

/** SpaceMessagePacketAck defines a struct for the packet acknowledgment */
export interface SpaceMessagePacketAck {}

const baseChatPacketData: object = {};

export const ChatPacketData = {
  encode(message: ChatPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.spaceMessagePacket !== undefined) {
      SpaceMessagePacketData.encode(
        message.spaceMessagePacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ChatPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChatPacketData } as ChatPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.spaceMessagePacket = SpaceMessagePacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatPacketData {
    const message = { ...baseChatPacketData } as ChatPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.spaceMessagePacket !== undefined &&
      object.spaceMessagePacket !== null
    ) {
      message.spaceMessagePacket = SpaceMessagePacketData.fromJSON(
        object.spaceMessagePacket
      );
    } else {
      message.spaceMessagePacket = undefined;
    }
    return message;
  },

  toJSON(message: ChatPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.spaceMessagePacket !== undefined &&
      (obj.spaceMessagePacket = message.spaceMessagePacket
        ? SpaceMessagePacketData.toJSON(message.spaceMessagePacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChatPacketData>): ChatPacketData {
    const message = { ...baseChatPacketData } as ChatPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.spaceMessagePacket !== undefined &&
      object.spaceMessagePacket !== null
    ) {
      message.spaceMessagePacket = SpaceMessagePacketData.fromPartial(
        object.spaceMessagePacket
      );
    } else {
      message.spaceMessagePacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseSpaceMessagePacketData: object = { body: "", user: "" };

export const SpaceMessagePacketData = {
  encode(
    message: SpaceMessagePacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.body !== "") {
      writer.uint32(10).string(message.body);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SpaceMessagePacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpaceMessagePacketData } as SpaceMessagePacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpaceMessagePacketData {
    const message = { ...baseSpaceMessagePacketData } as SpaceMessagePacketData;
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

  toJSON(message: SpaceMessagePacketData): unknown {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SpaceMessagePacketData>
  ): SpaceMessagePacketData {
    const message = { ...baseSpaceMessagePacketData } as SpaceMessagePacketData;
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

const baseSpaceMessagePacketAck: object = {};

export const SpaceMessagePacketAck = {
  encode(_: SpaceMessagePacketAck, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SpaceMessagePacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpaceMessagePacketAck } as SpaceMessagePacketAck;
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

  fromJSON(_: any): SpaceMessagePacketAck {
    const message = { ...baseSpaceMessagePacketAck } as SpaceMessagePacketAck;
    return message;
  },

  toJSON(_: SpaceMessagePacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<SpaceMessagePacketAck>): SpaceMessagePacketAck {
    const message = { ...baseSpaceMessagePacketAck } as SpaceMessagePacketAck;
    return message;
  },
};

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
