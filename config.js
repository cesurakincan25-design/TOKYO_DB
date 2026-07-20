/**
 * config.js — TOKYO_DB
 */
window.RPCONFIG = {
  tableName:     'tokyo_db',
  storageKey:    'tokyo_db_v10',
  storageLegacy: 'tokyo_db_v8',
  sfxKey:        'tokyo_sfx_muted',
  langKey:       'tokyo_lang',
  themeKey:      'tokyo_theme',
  playerKey:     'tokyo_active_player',
  bootMode:      'player-select',
  universe:      'TOKYO RP',
  colorPhotos:   true,

  players: [
    { id: 'eren',  name: 'Eren',  role: 'admin', color: '#e8728a' },
    { id: 'nes',   name: 'Nes',   role: 'admin', color: '#c8a84b' },
    { id: 'aley',  name: 'Aley',  role: 'admin', color: '#7b4a8a' }
  ],

  firebaseConfig: {
    apiKey:            "AIzaSyCk5-f6fPp8GX7Ce_z0M74y_ai1017t4Yc",
    authDomain:        "roleplay-databases.firebaseapp.com",
    projectId:         "roleplay-databases",
    storageBucket:     "roleplay-databases.firebasestorage.app",
    messagingSenderId: "265831449807",
    appId:             "1:265831449807:web:d5eeb3f114e13dd5f8e3ba"
  },

  seedDB: {
    metadata: { version: '8.5', universe: 'TOKYO RP', lastUpdated: new Date().toISOString() },
    organizations: [], characters: [], vehicles: [], properties: [],
    equipments: [], contracts: [], cases: [], logs: []
  }
};

function _initFirebase() {
  if(window._fbApp) return;
  var cfg = window.RPCONFIG.firebaseConfig;
  window._fbApp = window._fbSDK.initializeApp(cfg);
  window._fbDb  = window._fbFirestore.getFirestore(window._fbApp);
  console.log('[Firebase] TOKYO_DB bağlantısı hazır');
}

if(window._fbFirestoreReady) {
  _initFirebase();
} else {
  window.addEventListener('firebase-ready', _initFirebase, { once: true });
}
