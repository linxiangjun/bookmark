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
  const { name, description, link, category, tag } = ctx.request.body;

  const newList = new List({
    name,
    description,
    link,
    category,
    tag
  });

  const result = await newList.save().catch(err => {
    ctx.throw(500, "服务器错误");
  });

  return;

  ctx.body = {
    success: true,
    msg: "ok",
    data: ""
  };
};
