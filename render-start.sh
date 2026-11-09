set -o errexit
mkdir -p $PUPPETEER_CACHE_DIR
npm install && npx puppeteer browsers install chrome

