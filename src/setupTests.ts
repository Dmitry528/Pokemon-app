import '@testing-library/jest-dom';

import { TextDecoder, TextEncoder } from "node:util";
import { TransformStream } from "node:stream/web";

// jest has a huge gap when it comes to node global vars, vitest is better for this because
// with it we don't have to assign those vars.

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
  TransformStream: { value: TransformStream },
});

function channelMock() {}
channelMock.prototype.onmessage = function () {}
channelMock.prototype.postMessage = function (data: unknown) {
    this.onmessage({ data })
}
global.BroadcastChannel = channelMock