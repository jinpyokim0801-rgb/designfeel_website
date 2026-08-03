# Assets and fonts

All production assets are bundled under `public/` and are referenced with root-relative URLs.

## Images

- `public/images/brand/` — header and footer Design Feel logos
- `public/images/process/` — hero, philosophy, archive, process and package photography
- `public/images/founder-001.png` through `founder-003.png` — retained collection artwork assets
- `public/favicon.svg` — browser icon

The package preserves all image files from the working website, including alternate process-image versions, so future redesigns do not lose source options.

## Fonts

1. **EB Garamond Regular** — English headings, numbers and primary Latin typography
   - File: `public/fonts/eb-garamond-regular.woff2`
   - License: `public/fonts/EB-Garamond-OFL.txt`
2. **Noto Serif KR ExtraLight** — Korean typography
   - File: `public/fonts/noto-serif-kr-extralight.woff2`
   - License: `public/fonts/Noto-Serif-KR-OFL.txt`

Both fonts are self-hosted with `@font-face` declarations in `app/globals.css`. No external font CDN is required.
