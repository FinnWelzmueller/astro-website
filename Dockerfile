# Build stage
FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine AS runtime
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./user_file.htpasswd /etc/nginx/user_file.htpasswd
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
