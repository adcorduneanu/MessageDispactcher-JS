import Dispatcher from './Message/Dispatcher';
import Priority from './Message/Priority';

const messageDispatcher = new Dispatcher();

export { messageDispatcher, Priority as MessagePriority };
