import { createReadStream } from 'fs';
import readLine from 'readline';
import { finished as finishedCb } from 'stream';
import { promisify } from 'util';

import LineStream from './state-stream.mjs';
import NoOpStream from './noop-stream.mjs';

const finished = promisify(finishedCb);

async function main() {
  const readStream = createReadStream('./random_text');

  const lineStream = new LineStream();
  const devNull = new NoOpStream();

  const writeStream = lineStream.pipe(devNull)

  readLine.createInterface({
    input: readStream,
    output: writeStream
  });

  await finished(writeStream);
  console.log('Stream has finished', lineStream.state);
}

main();
