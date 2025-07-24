// Define a type alias for a callback function that takes a generic type T as an argument
type CallbackFunction<T> = (args: T) => void;

// Define a type alias for an "events dictionary" that maps event keys (keyof T) to arrays of CallbackFunction<T[K]>
type EventsDictionary<T extends Record<string, unknown>> = {
    [K in keyof T]: CallbackFunction<T[K]>[];
};

// Define the EventEmitter class
export class EventEmitter<T extends Record<string, unknown>> {
    // Declare a property 'callbacks' of type EventsDictionary<T>
    callbacks: EventsDictionary<T>;

    // Constructor initializes the 'callbacks' property as an empty EventsDictionary<T>
    constructor() {
        this.callbacks = {} as EventsDictionary<T>;
    }

    // Method to add an event listener for a specific event
    on<K extends keyof T>(event: K, cb: CallbackFunction<T[K]>) {
        // If there are no callbacks for the given event, initialize an empty array
        if (!this.callbacks[event]) this.callbacks[event] = [];
        // Add the callback function to the array of callbacks for the event
        this.callbacks[event].push(cb);
        // Return a function that can be used to remove the event listener
        return () => this.off(event, cb);
    }

    // Method to remove an event listener for a specific event
    off<K extends keyof T>(event: K, cb: CallbackFunction<T[K]>) {
        // If there are no callbacks for the given event, do nothing
        if (!this.callbacks[event]) return;
        // Find the index of the callback function in the array of callbacks
        const index = this.callbacks[event].indexOf(cb);
        // Remove the callback function from the array of callbacks
        this.callbacks[event].splice(index, 1);
    }

    // Method to emit an event and call all associated callback functions
    emit<K extends keyof T>(event: K, args: T[K]) {
        // Get the array of callbacks for the given event
        const cbs = this.callbacks[event];
        // If there are callbacks, call each one with the provided arguments
        if (cbs) cbs.forEach((cb) => cb(args));
    }

    // Method to stop the EventEmitter and clear all registered callbacks
    stop() {
        this.callbacks = {} as EventsDictionary<T>;
    }
}