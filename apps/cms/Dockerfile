FROM node:20.14.0-alpine3.19 AS base

FROM base as builder
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune @turbo/cms --docker

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install
COPY --from=builder /app/out/full/ .
CMD ["yarn", "dev"]
