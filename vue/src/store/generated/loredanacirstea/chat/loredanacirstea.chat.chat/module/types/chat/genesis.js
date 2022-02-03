/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../chat/params";
import { Message } from "../chat/message";
export const protobufPackage = "loredanacirstea.chat.chat";
const baseGenesisState = { portId: "", messageCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        for (const v of message.messageList) {
            Message.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.messageCount !== 0) {
            writer.uint32(32).uint64(message.messageCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.messageList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.messageList.push(Message.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.messageCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.messageList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = "";
        }
        if (object.messageList !== undefined && object.messageList !== null) {
            for (const e of object.messageList) {
                message.messageList.push(Message.fromJSON(e));
            }
        }
        if (object.messageCount !== undefined && object.messageCount !== null) {
            message.messageCount = Number(object.messageCount);
        }
        else {
            message.messageCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.portId !== undefined && (obj.portId = message.portId);
        if (message.messageList) {
            obj.messageList = message.messageList.map((e) => e ? Message.toJSON(e) : undefined);
        }
        else {
            obj.messageList = [];
        }
        message.messageCount !== undefined &&
            (obj.messageCount = message.messageCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.messageList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = "";
        }
        if (object.messageList !== undefined && object.messageList !== null) {
            for (const e of object.messageList) {
                message.messageList.push(Message.fromPartial(e));
            }
        }
        if (object.messageCount !== undefined && object.messageCount !== null) {
            message.messageCount = object.messageCount;
        }
        else {
            message.messageCount = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
