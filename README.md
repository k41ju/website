# CCC-style Jekyll 4 Site (Option 1)

**Stack:** Jekyll 4.x + plugins (archives, feed, paginate, sitemap, SEO) deployed to **GitHub Pages via Actions**.

## Quick start
1. Create a new GitHub repo and set default branch to `main`.
2. Upload this project (or unzip and push).
3. Repo → **Settings → Pages → Build and deployment** → **Source: GitHub Actions**.
4. Repo → **Settings → Actions → General → Workflow permissions** → **Read and write**.
5. Push a commit (or re-run the workflow).

### Notes
- Edit nav in `/_layouts/default.html`.
- Add posts in `_posts/` with `YYYY-MM-DD-title.md`.
- Tags auto-generate archive pages at `/tag/<name>/` via `jekyll-archives`.
- CSS cache-busting uses a timestamp query string (`?v={{ site.time | date: "%s" }}`).
