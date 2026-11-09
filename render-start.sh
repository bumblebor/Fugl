set -o errexit

npm install
npm install-scripts approve puppeteer
npx puppeteer browsers install chrome
