// fs-polyfill.js
// goal is to add webtorrent as a cdn media service but with nextjs get this error `Module not found: Can't resolve 'dgram'` not mvp enough to worry about yet
const { Readable } = require('stream');

class FsReadStream extends Readable {
  constructor(file, options) {
    super(options);
    this.file = file;
    this.position = 0;
  }

  _read(size) {
    if (this.position >= this.file.length) {
      this.push(null);
      return;
    }

    const chunk = this.file.slice(this.position, this.position + size);
    this.push(chunk);
    this.position += chunk.length;
  }
}

module.exports = {
  createReadStream: (file, options) => new FsReadStream(file, options),
  readFile: (file, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (typeof callback !== 'function') {
      throw new Error('callback must be a function');
    }

    try {
      const data = file;
      callback(null, data);
    } catch (err) {
      callback(err);
    }
  },
};