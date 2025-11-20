// This is a test file for src/index.js

const sayHi = require('./index.js')

test("Says 'Hello Mike' when 'Mike' is passed", () => {
   expect(sayHi('Mike')).toBe('Hello Mike')
})
