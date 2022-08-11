FROM node:14
ENV APP_DIR /usr/src/app
RUN mkdir -p $APP_DIR
WORKDIR ${APP_DIR}
ADD package*.json $APP_DIR/
ADD yarn.lock $APP_DIR/
ADD .npmrc $APP_DIR/
ADD .next $APP_DIR/.next
ADD server $APP_DIR/server
ADD node_modules $APP_DIR/node_modules
ADD next.config.js $APP_DIR/
ADD .babelrc $APP_DIR/
ADD public $APP_DIR/public
ADD .env $APP_DIR/
RUN yarn global add cross-env
CMD yarn start
