FROM node:20.14.0-alpine3.19 AS base

FROM base AS builder
WORKDIR /app
RUN yarn global add turbo@1.13.4
COPY . .
RUN turbo prune @turbo/cms --docker

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn workspaces focus @turbo/cms --production
COPY --from=builder /app/out/full/ .
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 1337