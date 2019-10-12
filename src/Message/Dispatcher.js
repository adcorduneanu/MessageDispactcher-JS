import Subscriber from './Subscriber';

class Dispatcher {
    constructor() {
        this.queues = {};
    }

    publish = (queue, message) => {
        this.ensureQueueExists(queue);

        this.queues[queue].forEach((messageSubscriber) =>
            messageSubscriber.callback.call(this, message, messageSubscriber.priority));

        return true;
    }

    subscribe = (queue, callback, id, priority) => {
        if (typeof callback !== "function") {
            throw "Invalid callback function.";
        }
        this.ensureQueueExists(queue);

        const subscriber = new Subscriber(callback, id, priority);

        this.unsubscribe(queue, id);

        this.queues[queue].push(subscriber);
        this.queues[queue].sort((current, next) => current.priority > next.priority ? -1 : 1);

        return [subscriber.id, subscriber.priority];
    }

    unsubscribe = (queue, id) => {
        this.ensureQueueExists(queue);

        this.queues[queue] = this.queues[queue].filter((messageCalback) =>
            messageCalback.id !== id);

        return true;
    }

    ensureQueueExists = queue => {
        if (this.queues[queue] === undefined) {
            this.queues[queue] = [];
        }
    }
};

export default Dispatcher;