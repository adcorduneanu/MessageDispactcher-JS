import Priority from './Priority';

class Subscriber {
    constructor(callback, id, priority) {
        this.callback = callback;
        this.priority = priority || Priority.low;
        this.id = id || `sub-${Math.random().toString(36).substr(2, 9)}`;
    }
};

export default Subscriber;