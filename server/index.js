import koa from "koa";
import mongoose from "mongoose";
import onerror from "koa-onerror";

import middleware from "./middleware";
import db from "./configs/db";
import api from "./api";

mongoose.Promise = Promise;
// connect mongodb
mongoose.connect(
  db.mongodb.url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Connection Success!");
    }
  }
);

mongoose.connection.on("error", console.error);

const router = require("koa-router")();

const app = new koa();

app.use(middleware());
onerror(app);

app.use(api());

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.listen(8899);
console.log("listening...");

export default app;
