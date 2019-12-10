import List from "../models/list.js";

// 获取书签列表
export const getList = async ctx => {
  const list = await List.find().catch(err => {
    ctx.throw(500, "服务器内部错误");
  });

  ctx.body = {
    success: true,
    msg: "ok",
    data: list
  };
};

export const updateList = async ctx => {
  // mock
  const newList = new List({
    name: "如何使用koa2+es6/7打造高质量Restful API",
    description: "刨根问底，篇幅略长，精华在后面，需要耐心看",
    link: "https://www.jianshu.com/p/f59594b90500",
    category: "koa",
    tag: "koa"
  });

  const result = await newList.save().catch(err => {
    ctx.throw(500, "服务器错误");
  });

  ctx.body = {
    success: true,
    msg: "ok",
    data: ""
  };
};
