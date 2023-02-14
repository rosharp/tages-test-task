const config = {
  appenders:
  {
    debug: {
      type: "file",
      filename: "/logs/debug.log",
      category: "debug",
      maxLogSize: 20480,
      backups: 10,
    }
  }
};

module.exports = config;
