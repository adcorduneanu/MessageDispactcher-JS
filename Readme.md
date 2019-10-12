# MessageDispatcher JS

Create a Message Dispatcher on a channel that will comsume message from a queue and will deliver them to the subscribers, based on a priority.

A message dispatcher consist of two parts, the subscriber(the one who listen to a specific queue) and the publisher(the one who will send the message).

### Publish
The one who will publish a message to all the subscribers from a specific queue.

Argument | Type | Optional | Description
| ----------- | ----------- | ----------- | ----------- | 
| queue | string | false | the location where it will deliver the message |
| message | any | false | the payload (can be object, json, array, string, number, boolean) |

`Usage:`
```
const message = { sample: true, content: 'sample' };
messageDispatcher.publish('myQueue', message);
```

### Subscribe
The one who will subscribe to retrieve a message from a specific queue. 

 Argument | Type | Optional | Description
| ----------- | ----------- | ----------- | ----------- | 
| queue | string | false | the location where it will listen for an incoming message |
| callback | function | false | the action to be executed when a message arrives |
| id | string | true | subscription identification code (used to unsubscribe and subscription update); if none is given a generated value will be used |
| priority | MessagePriority | true | subscription priority |

- MessagePriority - available values: `low` (default), `medium`, `high`

`Usage:`
```
const myEvent = message => console.log(message);
const subscriber = messageDispatcher.subscribe('myQueue', myEvent, 'myCustomId', Priority.medium);
```

### Unsubscribe
Remove a listener from a queue, based on it's creation id. 

Argument | Type | Optional | Description
| ----------- | ----------- | ----------- | ----------- | 
| queue | string | false | the location where it will deliver the message |
| id | string | false | the identification code of the targeted listener |

`Usage:`
```
messageDispatcher.subscribe('myQueue', subscriber.id);
```

