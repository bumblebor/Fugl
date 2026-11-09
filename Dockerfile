FROM ghcr.io/puppeteer/puppeteer:25.13.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_CACHE_DIR =/home/node/.cache/puppeteer

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["node", "index.js"]