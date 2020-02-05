#!/usr/bin/env bash

cd /app/db
RUN npx sequelize db:migrate --env production
cd /app
npm start