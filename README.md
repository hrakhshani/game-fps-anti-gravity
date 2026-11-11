# PAYNE NOIR // AAA Procedural Neo-Noir FPS

A zero-external-asset, AAA-grade procedural WebGL2 First-Person Shooter inspired by **Cordon 9** and **Max Payne**, featuring seamless indoor/outdoor combat across multiple cities, **Bullet Time**, **Shootdodge**, **Painkillers**, and GPU-baked PBR rendering.

## Quick Start

Open [`index.html`](file:///Users/mac/.gemini/antigravity/scratch/payne-noir-fps/index.html) directly in any modern browser, or serve the folder locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (or pass `?q=ultra` / `?map=saopaulo` / `?map=tokyo` / `?map=field`).

## Rebuilding from Modular Source

All 89 modular source files are organized under `src/` and listed in [`manifest.txt`](file:///Users/mac/.gemini/antigravity/scratch/payne-noir-fps/manifest.txt). To rebuild `index.html` and validate syntax:

```bash
python3 build.py
```

## Key Features

- **Max Payne Combat Mechanics**:
  - **Bullet Time (`V` / `B` / `CapsLock`)**: Dilates world time to `0.25x` while preserving 1:1 mouse aim, shifting the post-processing pipeline into a high-contrast neo-noir grade, and tightening weapon accuracy.
  - **Shootdodge (`X` / `Left Alt` or `Space` while aiming + moving)**: Launches a cinematic horizontal slow-motion dive with directional camera bank/roll and automatic Bullet Time activation so you can dodge incoming syndicate bullet tracers mid-air.
  - **Painkillers (`H` / `Tab` + Last Stand Auto-Save)**: Restores `+48 HP` on demand and automatically saves you from lethal damage if you have a bottle in reserve.
- **Seamless Inside & Outside City Exploration**:
  - Walk freely between rain-slicked asphalt street canyons, service alleys, and 5 fully detailed ground-floor building interiors (**Club Ragna Rok Lounge**, **24h Laundromat Safehouse**, **Golden Lotus Noodle Diner**, **Syndicate Deli & Armory**, and **Metro Transit Concourse**) with interior cover colliders, indoor rain occlusion, and navmesh pathfinding.
- **Multi-City Noir Chapters**:
  - **New York · Hell's Kitchen (`?map=halsey`)** — *02:15 AM · Freezing Rain & Neon Noir*
  - **São Paulo · Zona Sul (`?map=saopaulo`)** — *20:45 PM · Tropical Storm & Amber Haze*
  - **Neo-Tokyo · Shinjuku Sector 9 (`?map=tokyo`)** — *00:30 AM · Cyber-Noir Downpour*
  - **Thornwake · Industrial Compound (`?map=field`)** — *03:50 AM · Sports Hall Interior & Evacuation Grounds*
# game-fps-anti-gravity
