import { SettingsStore } from '../schema/settings.store.interface';

/**
 * ### settingsStore
 * Keeps track of server settings, keeps them unique and allows for overlaying.
 * @type Map<key, value>
*/
export const settingsStore:SettingsStore = new Map();