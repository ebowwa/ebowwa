// Only polyfill ProgressEvent during server-side builds where it is not
// available natively. This prevents ReferenceError exceptions when browser
// oriented libraries like Three.js emit progress events.
if (typeof window === 'undefined' && typeof global.ProgressEvent === 'undefined') {
  global.ProgressEvent = class ProgressEvent {
    constructor(type, options = {}) {
      this.type = type;
      this.lengthComputable = !!options.lengthComputable;
      this.loaded = options.loaded || 0;
      this.total = options.total || 0;
    }
  };
}
