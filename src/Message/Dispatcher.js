import Subscriber from './Subscriber';

class Dispatcher {
    constructor() {
        this.queues = {};
    }

    publish = (queue, message) => {
        this.useQueue(queue)
            .forEach((messageSubscriber) => messageSubscriber.callback.call(this, message, messageSubscriber.priority));

        return true;
    }

    subscribe = (queue, callback, id, priority) => {
        if (typeof callback !== "function") {
            throw "Invalid callback function.";
        }

        var messageQueue = this.useQueue(queue);

        const subscriber = new Subscriber(callback, id, priority);

        unsubscribe(queue, id);

        messageQueue.push(subscriber);
        messageQueue.sort((current, next) => current.priority > next.priority ? -1 : 1);

        return [subscriber.id, subscriber.priority];
    }

    unsubscribe = (queue, id) => {
        this.queues[queue] = this.useQueue(queue)
            .filter((messageCalback) => messageCalback.id !== id);

        return true;
    }

    useQueue = queue => {
        if (this.queues[queue] === undefined) {
            this.queues[queue] = [];
        }

        return this.queues[queue];
    }
};

export default Dispatcher;