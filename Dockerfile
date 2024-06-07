FROM node:20.14.0-alpine3.19 AS base

FROM base as builder
WORKDIR /app
RUN yarn global add turbo@^2.0.3
COPY . .
RUN turbo prune @turbo/cms --docker

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn workspaces focus @turbo/cms --production
COPY --from=builder /app/out/full/ .
RUN yarn dlx turbo@^2.0.3 run build --filter=@turbo/cms...
CMD ["yarn", "dlx", "turbo@^2.0.3", "run", "start", "--filter=@turbo/cms..."]