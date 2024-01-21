import { $ } from 'bun';

console.log('Hello via Bun!');

await $`echo "Hello World!"`;

await $`echo "Hello World!"`.quiet();

const welcome = await $`echo "Hello World!"`.text();

console.log({ welcome });

const buffer = Buffer.alloc(100);
const result = await $`echo "Hello World!" > ${buffer}`;

console.log(result.exitCode); // 0
console.log(buffer.toString()); // Hello World!\n

const response = new Response('hello i am a response body');

const result2 = await $`cat < ${response}`.text();

console.log(result2);

const result3 = await $`echo "Hello World!" | wc -w`.text();

console.log({ result3 });

await $`FOO=foo bun -e 'console.log(process.env.FOO)'`; // foo\n

$.env({ FOO: 'bar' });

// the globally-set $FOO
await $`echo $FOO`; // bar

// the locally-set $FOO
await $`echo $FOO`.env({ FOO: 'baz' }); // baz

const result4 = await $`echo "Hello World!"`.text();

console.log(result4); // Hello World!\n

const result5 = await $`echo '{"foo": "bar"}'`.json();

console.log(result5); // { foo: "bar" }

for await (let line of $`echo "Hello World!"`.lines()) {
  console.log(line); // Hello World!
}

const search = 'bun';

for await (let line of await $`cat ./list.txt | grep ${search}`.lines()) {
  console.log(line);
}
