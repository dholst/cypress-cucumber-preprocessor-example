const cucumber = require("@darrinholst/cypress-cucumber-preprocessor").default; // eslint-disable-line

module.exports = on => {
  on("file:preprocessor", cucumber());
};
