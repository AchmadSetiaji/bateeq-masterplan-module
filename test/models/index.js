let models = require("../../src/models");
let validate = require("./validators");

describe("Model Unit Test", function() {
  it("#01. Commodity should valid", function() {
    let Commodity = models.commodity;
    validate.commodity(new Commodity());
  });
});
