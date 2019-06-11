const Post = require("../models/Post");

module.exports = {
  async indexedDB(req, res) {},

  async store(req, res) {
    return res.json({ ok: true });
  }
};
