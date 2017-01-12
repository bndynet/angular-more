describe("Filter about datetime", function() {
  var arg1, dt, filter, result, result1;
  filter = null;
  beforeEach(module("bnFilters"));
  beforeEach(inject(function(_$filter_) {
    return filter = _$filter_;
  }));
  dt = "1/1/2017 01:02:03";
  arg1 = Date.parse(dt);
  result = "1/1/2017";
  it(dt + " | appDate -> " + result, function() {
    return expect(filter("appDate")(arg1)).toEqual(result);
  });
  result1 = "Jan 1, 2017 1:02 AM";
  return it(dt + " | appDateTime -> " + result1, function() {
    return expect(filter("appDateTime")(arg1)).toEqual(result1);
  });
});