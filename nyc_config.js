/**
 * config.js — NYC_DB
 * Bu dosyayı NYC_DB reposuna koy.
 * Supabase credentials, oyuncu listesi ve NYC'ye özgü ayarları içerir.
 */
window.RPCONFIG = {
  // ── Supabase ──────────────────────────────────────────────
  supaUrl:       'https://vhzroetspwbwmouqkcxe.supabase.co',
  supaKey:       'sb_publishable_kM788c6s2-mOyndFnIdc1A_EKPSIz8J',
  tableName:     'nyc_db',

  // ── LocalStorage anahtarları ───────────────────────────────
  storageKey:    'nyc_db_v10',
  storageLegacy: 'nyc_db_v8',
  sfxKey:        'nyc_sfx_muted',
  langKey:       'nyc_lang',
  themeKey:      'nyc_theme',
  playerKey:     'nyc_active_player',

  // ── Açılış modu ───────────────────────────────────────────
  // 'splash'        → init-screen'e tıklayınca boot animasyonu (NYC tarzı)
  // 'player-select' → direkt oyuncu seçim ekranı (TOKYO tarzı)
  bootMode:      'splash',

  // ── Evren bilgisi ─────────────────────────────────────────
  universe:      'NYC Cyber-Noir RP',

  // ── Oyuncu listesi ────────────────────────────────────────
  players: [
    { id: 'eren',  name: 'Eren',  role: 'admin', color: '#00a2ff' },
    { id: 'melih', name: 'Melih', role: 'admin', color: '#ff2a2a' },
    { id: 'tuna',  name: 'Tuna',  role: 'admin', color: '#00ff66' },
    { id: 'nes',   name: 'Nes',   role: 'admin', color: '#a855f7' },
    { id: 'aley',  name: 'Aley',  role: 'admin', color: '#f59e0b' }
  ],

  // ── Başlangıç veritabanı (Supabase boşsa kullanılır) ──────
  seedDB: {
    metadata: {
      version: '8.5',
      universe: 'NYC Cyber-Noir RP',
      lastUpdated: new Date().toISOString()
    },
    organizations: [],
    characters: [],
    vehicles: [],
    properties: [],
    equipments: [],
    contracts: [],
    cases: [],
    logs: []
  }
};
