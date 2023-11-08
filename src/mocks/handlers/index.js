import adminHandlers from './admin';
import registerHandlers from './register';
import articleWriteHandlers from './articleWrite';
import articleListHandlers from './articleList';

const handlers = [...adminHandlers, ...registerHandlers, ...articleWriteHandlers, ...articleListHandlers];

export default handlers;
