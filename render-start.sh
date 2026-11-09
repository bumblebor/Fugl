set -o errexit

npm install
npx puppeteer browsers install chrome-headless-shell
mkdir -p $PUPPETEER_CACHE_DIR && npx puppeteer browsers install chrome
