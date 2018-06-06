import { createServer } from 'http';
import { mountResolver } from '../logic-mount/mount-resolver.logic';
import { mountErrorHandler } from '../logic-mount/mount-error-handler.logic';
import { settingsStore } from '../../stores/settings.store';

const port = settingsStore.get('port');

//mount handles route resolving (a type of proxying requests)
const server = createServer(mountResolver); 
server.listen(port, mountErrorHandler);