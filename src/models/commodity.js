"use strict";

let BaseModel = require("model-toolkit").BaseModel;

module.exports = class Commodity extends BaseModel {
  constructor(source) {
    super("commodity", "1.0.0");

    this.code = "";
    this.name = "";
    this.description = "";

    this.copy(source);
  }
};
