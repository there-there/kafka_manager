FROM node:10.13.0-alpine 

# Set environment variables.
ENV HOME /var/build

# Define working directory.
WORKDIR $HOME

RUN npm init -y && npm install express --save

EXPOSE 8080

#add current files
ADD dist /var/build/dist
ADD ./server.js /var/build/server.js

CMD ["node", "server.js"]