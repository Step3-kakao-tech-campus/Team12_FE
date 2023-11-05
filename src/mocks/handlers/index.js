import adminHandlers from './admin';
import registerHandlers from './register';
import postListHandlers from './postList';

const handlers = [...adminHandlers, ...registerHandlers, ...postListHandlers];

export default handlers;
