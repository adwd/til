let dv = new DataView(new ArrayBuffer());
const dataView = mem => dv.buffer === mem.buffer ? dv : dv = new DataView(mem.buffer);

const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
let _fs;
async function fetchCompile (url) {
  if (isNode) {
    _fs = _fs || await import('fs/promises');
    return WebAssembly.compile(await _fs.readFile(url));
  }
  return fetch(url).then(WebAssembly.compileStreaming);
}

const instantiateCore = WebAssembly.instantiate;

const utf8Decoder = new TextDecoder();

const utf8Encoder = new TextEncoder();

let utf8EncodedLen = 0;
function utf8Encode(s, realloc, memory) {
  if (typeof s !== 'string') throw new TypeError('expected a string');
  if (s.length === 0) {
    utf8EncodedLen = 0;
    return 1;
  }
  let allocLen = 0;
  let ptr = 0;
  let writtenTotal = 0;
  while (s.length > 0) {
    ptr = realloc(ptr, allocLen, 1, allocLen += s.length * 2);
    const { read, written } = utf8Encoder.encodeInto(
    s,
    new Uint8Array(memory.buffer, ptr + writtenTotal, allocLen - writtenTotal),
    );
    writtenTotal += written;
    s = s.slice(read);
  }
  utf8EncodedLen = writtenTotal;
  return ptr;
}

let exports0;
let memory0;
let realloc0;
let postReturn0;

function hello(arg0) {
  var ptr0 = utf8Encode(arg0, realloc0, memory0);
  var len0 = utf8EncodedLen;
  const ret = exports0.hello(ptr0, len0);
  var ptr1 = dataView(memory0).getInt32(ret + 0, true);
  var len1 = dataView(memory0).getInt32(ret + 4, true);
  var result1 = utf8Decoder.decode(new Uint8Array(memory0.buffer, ptr1, len1));
  postReturn0(ret);
  return result1;
}

const $init = (async() => {
  const module0 = fetchCompile(new URL('./hello.component.core.wasm', import.meta.url));
  ({ exports: exports0 } = await instantiateCore(await module0));
  memory0 = exports0.memory;
  realloc0 = exports0.cabi_realloc;
  postReturn0 = exports0.cabi_post_hello;
})();

await $init;

export { hello,  }