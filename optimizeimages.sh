#!/usr/bin/env bash
set -euo pipefail

SRC="img/promo"
DST="img/promo/preview"

# Prefer ImageMagick 7's `magick` if present, otherwise fall back to the v6
# `convert` binary. `convert` is what ships on Ubuntu (apt) and is also
# available on macOS Homebrew v7 installs as a back-compat alias.
if command -v magick >/dev/null 2>&1; then
  IM=(magick)
elif command -v convert >/dev/null 2>&1; then
  IM=(convert)
else
  echo "error: ImageMagick not found. Install via 'brew install imagemagick' (macOS) or 'sudo apt-get install imagemagick' (Debian/Ubuntu)." >&2
  exit 1
fi

mkdir -p "$DST"

for f in "$SRC"/*.png; do
  [ -e "$f" ] || continue
  out="$DST/$(basename "$f")"
  "${IM[@]}" "$f" \
    -resize '1200x630>' \
    -define png:compression-level=9 \
    -define png:compression-filter=5 \
    -define png:compression-strategy=1 \
    "$out"
  printf "  %-40s %8d -> %8d bytes\n" "$(basename "$f")" "$(wc -c <"$f")" "$(wc -c <"$out")"
done

echo "done. wrote $(ls "$DST" | wc -l | tr -d ' ') files to $DST"
