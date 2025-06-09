if (typeof globalThis.ProgressEvent === 'undefined') {
  globalThis.ProgressEvent = class ProgressEvent {
    constructor(type, options = {}) {
      this.type = type;
      this.lengthComputable = !!options.lengthComputable;
      this.loaded = options.loaded || 0;
      this.total = options.total || 0;
    }
  };
}
