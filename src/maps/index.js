// src/maps/index.js
var saopaulo_exports = {
  meta: { id: "saopaulo", title: "S\xE3o Paulo \xB7 Zona Sul", sub: "20:45 PM \xB7 Tropical Storm & Syndicate Lounges", viewpoints: null },
  build: (G4) => build(G4, { id: "saopaulo", sky: "saopaulo", wet: 0.92, look: { preset: "saopaulo" } })
};
var tokyo_exports = {
  meta: { id: "tokyo", title: "Neo-Tokyo \xB7 Shinjuku Sector 9", sub: "00:30 AM \xB7 Cyber-Noir Downpour & Concourse", viewpoints: null },
  build: (G4) => build(G4, { id: "tokyo", sky: "tokyo", wet: 1.0, look: { preset: "tokyo" } })
};
var MAPS = { halsey: halsey_exports, saopaulo: saopaulo_exports, tokyo: tokyo_exports, field: field_exports };
var DEFAULT_MAP = "halsey";
function pickMap(id) {
  return MAPS[id] || MAPS[DEFAULT_MAP];
}
var mapList = () => Object.values(MAPS).map((m) => ({ id: m.meta.id, name: m.meta.title, sub: m.meta.sub || "", note: m.meta.sub || "" }));

