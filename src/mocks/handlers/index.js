import adminHandlers from './admin';
import registerHandlers from './register';
import articleWriteHandlers from './articleWrite';
import articleListHandlers from './articleList';
import loginHandlers from './login';

const handlers = [
  ...adminHandlers,
  ...registerHandlers,
  ...articleWriteHandlers,
  ...articleListHandlers,
  ...loginHandlers,
];

export default handlers;
