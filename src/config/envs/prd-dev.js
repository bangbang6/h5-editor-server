const devConf = require("./dev");
Object.assign(devConf.redisConf, {
  port: "6378",
  host: "localhost", //host改为docker容器
});
Object.assign(devConf.mysqlConf, {
  host: "localhost", //host改为docker容器
  port: "3305",
});
Object.assign(devConf.mongodbConf, {
  host: "localhost", //host改为docker容器
  port: "27016",
});
module.exports = devConf;
