import adminHandlers from './admin';
import registerHandlers from './register';
import postWriteHandlers from './postWrite';
import postListHandlers from './postList';

const handlers = [...adminHandlers, ...registerHandlers, ...postWriteHandlers, ...postListHandlers];

export default handlers;
