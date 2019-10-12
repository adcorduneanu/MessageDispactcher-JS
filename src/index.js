import Dispatcher from './Message/Dispatcher';
import Priority from './Message/Priority';

var messageDispatcher = new Dispatcher();

export { messageDispatcher, Priority as MessagePriority };