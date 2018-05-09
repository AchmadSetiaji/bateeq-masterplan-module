function test(name, path) {
  describe(name, function() {
    require(path);
  });
}

describe("Module Unit Test", function(done) {
  this.timeout(2 * 60000);
});
