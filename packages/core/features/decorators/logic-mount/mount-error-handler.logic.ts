import { settingsStore } from '../../stores/settings.store';

const port = settingsStore.get('port');

export const mountErrorHandler =  (port,err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
}