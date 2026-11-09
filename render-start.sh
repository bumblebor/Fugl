set -o errexit
PUPPETEER_CACHE_DIR=/opt/render/.cache/puppeteer

mkdir -p $PUPPETEER_CACHE_DIR
npm install && npx puppeteer browsers install chrome

