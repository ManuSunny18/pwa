import express from "express";
import _ from "lodash";
import http from "http";
import serverMiddleware from "react-pwa/src/server/middleware";
import Config from "./config";
var bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
var router = require('./api.js')
/**
 * --- Your custom code START ---
 */


app.use('/api', router.router);
/**
 * --- Your custom code END ---
 */
// Add the core server as middleware
app.use(serverMiddleware);

const server = http.createServer(app);
const serverPort = process.env.PORT || _.get(Config, "server.port", 3000);




server.listen(serverPort, "0.0.0.0", function(err) {
  if (err) throw err;
  const addr = server.address();

  // eslint-disable-next-line
  console.log("Listening at http://%s:%d", addr.address, addr.port);
});

export default app;
