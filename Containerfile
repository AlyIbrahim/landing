FROM registry.access.redhat.com/ubi9/nodejs-16
MAINTAINER Aly Ibrahim<aly.ibrahim@gmail.com>
ADD ./ .
RUN npm init
CMD npm run dev

