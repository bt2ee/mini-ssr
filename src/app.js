const express = require("express");
import React from "react"; //引入React以支持JSX的语法
import { renderToString } from "react-dom/server"; //引入renderToString方法
import Home from "./Home.js";

const app = express();
const content = renderToString(<Home />);

app.get("/", (req, res) =>
  res.send(`
  <html>
  <head>
      <title>ssr demo</title>
  </head>
  <body>
      hello,1234${content}
  </body>
  </html>
`)
);

app.listen(3000, () =>
  console.log("listen on port 3000 !, http://127.0.0.1:3000")
);
