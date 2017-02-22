var coffeeReactVersion = "2.4.1";

Package.describe({
  summary: "Write React Components for Meteor in Coffeescript",
  version: coffeeReactVersion,
  name: "jhartma:cjsx",
  git: "https://github.com/jhartma/meteor-cjsx"
});

Package.registerBuildPlugin({
  name: "compileCJSX",
  use: [],
  sources: [
    'compile-cjsx.js'
  ],
  npmDependencies: {"coffee-react-transform": coffeeReactVersion, "coffee-script": "1.7.1", "source-map": "0.1.32"}
});
