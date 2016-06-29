// Write a test suite to validate your JavaScript functions.


describe("The specification for word checker functions", function() {

	// There should be a function defined with the name checkWordCount.
  it("should have a checkWordCount function", function() {
    expect(checkWordCount).toBeDefined();
  });

	// That function should return false if a string sent to it has more than 100 words in it.
  it("should return false if more than 100 words", function() {
  	var string = "1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10";
  	expect(checkWordCount(string)).toBe(false);
  })


	// There should be a function defined with the name duplicateCheck.
  it("should have a duplicateCheck function", function() {
    expect(duplicateCheck).toBeDefined();
  });

	// That function should return false if a string has duplicate words in it.
	it("should return false if there are duplicate words", function() {
		var string2 = "one two one three one";
		expect(duplicateCheck(string2)).toBe(false);
	})


	// There should be a function defined with the name verifyAlphaNumeric.
  it("should have a verifyAlphaNumeric function", function() {
    expect(verifyAlphaNumeric).toBeDefined();
  });

	// That function should return false if there are any non-alphanumeric characters in a string.
	it("should return false if any non-alphanumeric characters", function() {
  	var string3 = "one two _";
		expect(verifyAlphaNumeric(string3)).toBe(false);		
	})

});

