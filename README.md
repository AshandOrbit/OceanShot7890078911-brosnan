# OceanShot website (GitHub Pages)

Static prototype of the OceanShot commercial site. All business content is placeholder until verified.

## Structure
- `index.html`: single-page site (services, projects, mitigation, clients, calculator teaser, lab, learning, footer)
- `assets/css/styles.css`: styles, light and dark themes
- `assets/js/main.js`: services, project portfolio and map, coastal scene, client tabs, demo portal and calculator
- `assets/img/hero.jpg`, `assets/img/barbuda.jpg`: page images
- `404.html`, `robots.txt`, `.nojekyll`

## Publish on GitHub Pages
1. Create a repository and upload all files, keeping the folder structure.
2. Settings, Pages, Source: deploy from branch `main`, folder `/ (root)`.
3. The site appears at `https://<user>.github.io/<repo>/`. For a custom domain, add a `CNAME` file containing the domain.

## Before public release
- **Portal and calculator are demos.** GitHub Pages is static hosting and cannot protect client data. The sign-in is not real. Connect a real identity provider and backend (for example Auth0, Supabase or Firebase) before any client uses it. Forms are not connected to anything.
- **Verification.** The in-page verification register lists content needing scientific, engineering, legal or commercial review. Remove that section before launch.
- **Images.** Confirm usage rights and credits for `hero.jpg` and `barbuda.jpg`, and confirm the Lab caption and donor acknowledgment wording with OceanShot.
- **Calculator.** Defaults are illustrative placeholders, not OceanShot pricing or results.
- **Map.** Add a licensed basemap and verified project coordinates.
