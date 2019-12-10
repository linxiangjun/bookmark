const db = {
  mongodb: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/bookmark"
  },
  mongodbSecret: {
    user: "",
    pass: ""
  }
};

export default db;
