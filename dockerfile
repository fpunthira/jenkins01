FROM node:8.11.1

# install dependencies
WORKDIR /opt/app

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /opt/app
RUN npm cache clean --force && npm install
# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects
ENV PORT 3000
EXPOSE 3000

CMD [ "/bin/bash" ]
