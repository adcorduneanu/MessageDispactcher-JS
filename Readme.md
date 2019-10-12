# MessageDispatcher JS

Create a Message Dispatcher on a channel that will comsume message from a queue and will deliver them to the subscribers, based on a priority.

A message dispatcher consist of two parts:

- Subscriber - the one who will subscribe to retrieve a message from a specific queue.

- Publisher - the one who will publish a message to all the subscribers from a specific queue.