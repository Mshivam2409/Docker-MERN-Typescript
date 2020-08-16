FROM node:12.18.2
RUN mkdir build
WORKDIR /build
ADD build/ ./
ENV NODE_ENV=production
ENV PORT=8000
EXPOSE 8000
RUN yarn install
CMD [ "node", "index.js" ]