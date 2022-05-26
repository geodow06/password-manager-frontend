FROM node:14-alpine as build_stage
WORKDIR /src
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

FROM nginx:stable-alpine as prod_stage
COPY --from=build_stage /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]