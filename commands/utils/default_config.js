module.exports = {
  lambdatest_auth: {
    username: "<Your LambdaTest username>",
    access_key: "<Your LambdaTest access key>",
  },
  browsers: [
    {
      browser: "Chrome",
      platform: "Windows 10",
      versions: ["latest-1"],
    },
    {
      browser: "Firefox",
      platform: "Windows 10",
      versions: ["latest-1"],
    },
  ],
  run_settings: {
    cypress_config_file: "cypress.json",
    reporter_config_file: "base_reporter_config.json",
    build_name: "build-name",
    parallels: 1,
    specs: "./*.spec.js",
    ignore_files: "",
    feature_file_suppport: false,
    network: false,
    headless: false,
    reporter_config_file: "",
    npm_dependencies: {
      cypress: "9.0.0",
    },
  },
  tunnel_settings: {
    tunnel: false,
    tunnel_name: null,
  },
};
