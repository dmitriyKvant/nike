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
RUN yarn dlx turbo@1.13.4 run build --filter=@turbo/cms...
ENTRYPOINT ["yarn", "dlx", "turbo@1.13.4", "run", "start", "--filter=@turbo/cms..."]
EXPOSE 1337