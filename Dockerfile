FROM openjdk:11
ADD build/libs/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar" , "app.jar"]

FROM node:12.4.0-alpine as build
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
COPY /frontend/package.json /frontend/package.json
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent
COPY /frontend /frontend
RUN npm run build

FROM nginx:1.16.0-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /frontend/build /usr/share/nginx/html
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
