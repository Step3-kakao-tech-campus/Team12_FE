import adminHandlers from './admin';
import postWriteHandlers from './postWrite';

const handlers = [...adminHandlers, ...postWriteHandlers];

export default handlers;
