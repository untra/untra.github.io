#!/usr/bin/env bash
set -euo pipefail

SRC="img/promo"
DST="img/promo/preview"

if ! command -v magick >/dev/null 2>&1; then
  echo "error: ImageMagick (magick) not found. brew install imagemagick" >&2
  exit 1
fi

mkdir -p "$DST"

for f in "$SRC"/*.png; do
  [ -e "$f" ] || continue
  out="$DST/$(basename "$f")"
  magick "$f" \
    -resize '1200x630>' \
    -define png:compression-level=9 \
    -define png:compression-filter=5 \
    -define png:compression-strategy=1 \
    "$out"
  printf "  %-40s %8d -> %8d bytes\n" "$(basename "$f")" "$(wc -c <"$f")" "$(wc -c <"$out")"
done

echo "done. wrote $(ls "$DST" | wc -l | tr -d ' ') files to $DST"
