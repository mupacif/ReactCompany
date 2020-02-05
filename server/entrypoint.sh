#!/usr/bin/env sh

cd /app/db
npx sequelize db:migrate --env production
cd /app
npm start