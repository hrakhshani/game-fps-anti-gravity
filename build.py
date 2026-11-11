#!/usr/bin/env python3
"""
Builds index.html from the modular source files listed in manifest.txt
and validates the assembled JavaScript bundle syntax with node --check.
"""
import os
import subprocess

ROOT = os.path.dirname(os.path.abspath(__file__))
MANIFEST = os.path.join(ROOT, "manifest.txt")
OUT_HTML = os.path.join(ROOT, "index.html")
OUT_JS = os.path.join(ROOT, "dist_check.mjs")

def main():
    with open(MANIFEST, "r", encoding="utf-8") as f:
        files = [line.strip() for line in f if line.strip()]

    chunks = []
    for rel in files:
        p = os.path.join(ROOT, rel)
        with open(p, "r", encoding="utf-8") as mf:
            chunks.append(mf.read())

    full_html = "\n".join(chunks)
    s0 = full_html.find("<script type=\"module\">")
    s1 = full_html.rfind("</script>")
    if s0 < 0 or s1 < 0:
        raise RuntimeError("Could not locate <script type=\"module\">...</script> bounds")

    js_only = full_html[s0 + len("<script type=\"module\">"):s1]
    with open(OUT_JS, "w", encoding="utf-8") as jf:
        jf.write(js_only)

    res = subprocess.run(["node", "--check", OUT_JS], capture_output=True, text=True)
    if res.returncode != 0:
        print("JS Syntax check FAILED:")
        print(res.stderr)
        raise SystemExit(1)
    os.remove(OUT_JS)

    with open(OUT_HTML, "w", encoding="utf-8") as hf:
        hf.write(full_html)

    print(f"Built {OUT_HTML} ({len(full_html):,} bytes across {len(files)} modules) - Syntax OK!")

if __name__ == "__main__":
    main()
