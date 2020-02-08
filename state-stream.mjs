import { Transform } from 'stream';

export default class LineStream extends Transform {
  constructor(args) {
   super(args);
   this.state = [];
   this.storeState = this.storeState.bind(this);
  }

  storeState(chunk) {
     const line = chunk.toString();
     this.state.push(line);
     return line;
  }

  _transform(chunk, enc, done) {
   console.log('CHUNK');
   const line = this.storeState(chunk);
   this.push(line);
   console.log('Wrote line', line);
   done();
  }
}

