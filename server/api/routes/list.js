import * as $ from "../../controllers/list.js";

export default async router => {
  router.post("/list", $.updateList).get("/list", $.getList);
};
