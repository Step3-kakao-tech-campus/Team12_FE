import adminHandlers from './admin';
import registerHandlers from './register';

const handlers = [...adminHandlers, ...registerHandlers];

export default handlers;
