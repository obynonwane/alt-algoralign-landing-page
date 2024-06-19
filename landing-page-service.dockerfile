FROM --platform=linux/amd64 node:18 as BUILD_IMAGE
WORKDIR /app
COPY package.json package-lock.json ./
# install dependencies
RUN npm install
COPY . .
# build
RUN npm run build
# remove dev dependencies
RUN npm prune --production
FROM --platform=linux/amd64 node:18
WORKDIR /app
# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
EXPOSE 3001
CMD ["npm", "start"]