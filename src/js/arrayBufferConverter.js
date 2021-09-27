export default class ArrayBufferConverter {
  load(buf) {
    this.buffer = buf;
  }

  toString() {
    const buffer = new Uint16Array(this.buffer);
    return String.fromCharCode(...buffer);
  }
}
