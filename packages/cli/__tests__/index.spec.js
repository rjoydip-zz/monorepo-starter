const welcome = require("@lerna-stater/core");

test("core welcome method", () => {
  expect(typeof welcome).toBe("function");
});

test("welcome message", () => {
  expect(welcome()).toEqual("Welcome to lerna javascript monorepo project stater");
});
