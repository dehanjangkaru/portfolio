#!/usr/bin/env bash

set -euo pipefail

remote="${GIT_REMOTE:-origin}"
site_url="https://dehanjangkaru.github.io/portfolio/"
pages_settings_url="https://github.com/dehanjangkaru/portfolio/settings/pages"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: run this script from inside the portfolio Git repository." >&2
  exit 1
fi

branch="$(git symbolic-ref --quiet --short HEAD || true)"

if [[ -z "$branch" ]]; then
  echo "Error: deploy from a named Git branch, not a detached HEAD." >&2
  exit 1
fi

if ! git remote get-url "$remote" >/dev/null 2>&1; then
  echo "Error: Git remote '$remote' does not exist." >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Error: commit or stash your changes before deploying." >&2
  git status --short
  exit 1
fi

echo "Running lint checks..."
npm run lint

echo "Pushing source branch '$branch' to '$remote'..."
git push "$remote" "$branch"

echo "Publishing the static export to the gh-pages branch..."
npm run deploy

echo
echo "Published: $site_url"
echo "First deployment only: enable gh-pages /(root) at $pages_settings_url"
