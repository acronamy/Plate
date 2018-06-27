
type ServerSettingKeys = 
/**
 * The port which this instance of Plate is bound to.
 * @default undefined
*/
'port'|
/**
 * The root url of this Plate instance.
 * @default undefined
*/
'appBase'


/**
 * ### SettingsStore
 * Keeps track of server Settings, keeps them unique and allows for overlaying.
 * @type Map<key, value>
*/
export type SettingsStore = Map<ServerSettingKeys,any>;