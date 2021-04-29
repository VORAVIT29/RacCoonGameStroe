var mongoose = require("mongoose");

var gameSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ  document
    image: {
      type: String
    },
    image1: {
      type: String
    },
    image2: {
      type: String
    },
    image3: {
      type: String
    },
    image4: {
      type: String
    },
    name: {
      type: String
    },
    price: {
      type: Number
    },
    detail: {
      type: String
    },
    system: {
      type: String
    },
    publisher: {
      type: String
    },
    developer: {
      type: String
    },
    downlaod: {
      type: String
    },
    video: {
      type: String
    }
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "GAMES"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Game = mongoose.model("games", gameSchema);
module.exports = Game;