FROM registry.access.redhat.com/ubi9/nodejs-16
MAINTAINER Aly Ibrahim<aly.ibrahim@gmail.com>
ADD ./ .
RUN npm update -g
RUN npm install
CMD npm run dev

