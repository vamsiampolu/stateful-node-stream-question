import { Writable } from 'stream';

const noop = () => {}; 


export default class DevNull extends Writable {
  constructor(args) {
     super(args);
  }

  _write(chunk, enc, cb) {
    noop(chunk);
    cb();
  }
}
