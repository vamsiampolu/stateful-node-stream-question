import { Transform } from 'stream';

export default class LineStream extends Transform {
  constructor() {
   super();
   this.state = [];
   this.storeState = this.storeState.bind(this);
  }

  storeState(chunk) {
     const line = chunk.toString();
     state.push(line);
  }

  _transform(chunk, enc, done) {
   this.storeState(chunk);
   this._write(line);
   done();
  }
}

