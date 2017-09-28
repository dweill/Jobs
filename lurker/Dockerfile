FROM node
RUN mkdir /lurker
COPY . /lurker
WORKDIR /lurker
CMD ["rm" "package-lock.json"]
RUN npm i
EXPOSE 3000 80 443
CMD ["npm", "start" ]
