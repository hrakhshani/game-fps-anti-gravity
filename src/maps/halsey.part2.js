// src/maps/halsey.js
var meta = { id: "halsey", title: "New York \xB7 Hell's Kitchen", sub: "02:15 AM \xB7 Rain-Slicked Street & Enterable Lounges", viewpoints: null };
function build(G4, opts = {}) {
  const W = buildArena(G4, opts);
  const drops = W.ground && W.ground.drops || [], xw = ROAD.hw + ROAD.kerb, ss11 = (a, b, x) => {
    const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };
  const groundY2 = (x, z) => {
    const ax = Math.abs(x);
    if (ax <= ROAD.hw) return 0;
    let top = ROAD.walkY;
    const sd = x > 0 ? 1 : -1;
    for (const d of drops) if (d[2] === sd && z > d[0] - 0.6 && z < d[1] + 0.6) {
      const k = Math.max(0, Math.min(1, 1 - (ax - xw) / 1.2)) * ss11(d[0] - 0.6, d[0], z) * (1 - ss11(d[1], d[1] + 0.6, z));
      top = ROAD.walkY - k * (ROAD.walkY - 0.05);
      break;
    }
    return ax >= ROAD.hw + 0.25 ? top : top * ((ax - ROAD.hw) / 0.25);
  };
  W.id = opts.id || meta.id;
  W.bounds = BOUNDS;
  W.groundY = groundY2;
  W.surfaceAt = (x) => Math.abs(x) > ROAD.hw + 0.3 ? "concrete" : "asphalt";
  W.rayGround = (ox, oy, oz, dx, dy) => {
    let tg = -oy / dy;
    const gx = ox + dx * tg;
    if (Math.abs(gx) > ROAD.hw + 0.25) tg = (ROAD.walkY - oy) / dy;
    return tg;
  };
  W.nav = { cell: 0.5, x0: -17, x1: 17, z0: -34, z1: 34, rel: false, lo: 0.5, hi: 1.6, ray: 80 };
  const roofGLSL2 = "float cxRoof(vec3 p){ if(abs(p.x) > 9.65){ if(p.x < 0.0 && ((p.z > -14.2 && p.z < -11.3) || (p.z > 11.3 && p.z < 14.2))) return 0.0; if(p.x > 0.0 && (p.z > -6.2 && p.z < -3.3)) return 0.0; return 1.0; } return 0.0; }";
  W.fx = { splashGLSL: `float cxSplashY(vec2 xz){ return abs(xz.x) > ${(ROAD.hw + 0.25).toFixed(2)} ? ${ROAD.walkY.toFixed(2)} : 0.0; }`, roofGLSL: roofGLSL2, floor: (x) => Math.abs(x) > ROAD.hw + 0.25 ? ROAD.walkY + 0.01 : 0.01 };
  W.env = { cam: [0, 2, 4], probe: [0, 2.4, 3] };
  W.look = opts.look || {};
  W.rules = null;
  W.botHome = [1.2, 10];
  W.viewpoints = meta.viewpoints;
  W.points = { generator: [-4.9, -8.9], drops: [[0.2, -17.6], [0.2, 1.6], [0.9, 18.6]], caches: [[-4.6, -1.9], [4.7, 9], [5.2, -12.2], [-7.9, 3.6], [11.8, 1.2], [-11.8, -0.5]] };
  return W;
}

