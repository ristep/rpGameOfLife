
// World Selectors
export const getWorldConf = state => state.world.conf;
export const getWorldCells = state => state.world.cells;
export const getInterval = state => state.world.interval;
export const getDelay = state => state.world.delay;
export const getCellTipe = state => state.world.conf.cellTipe;

// UI state selectors
export const getSettingsDialogState = (state) => ( state.uiState.settingsDialogState );
export const getAboutDialogState = (state) => ( state.uiState.aboutDialogState );
