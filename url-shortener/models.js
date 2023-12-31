const express = require("express");
const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  original_url: { type: String, required: true },
  short_url: { type: Number, required: true },
});
const Url = mongoose.model("Url", urlSchema);

module.exports = Url;

