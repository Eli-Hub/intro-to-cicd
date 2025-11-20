// This is a test file for src/index.js

const sayHi = require('./index.js')

// This test checks if sayHi function returns the correct greeting
test("Says 'Hello Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello Mike')
})
