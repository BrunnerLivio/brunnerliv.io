const React = require("react")
const fs = require("fs")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: fs.readFileSync("./init-theme.js", "utf-8"),
      }}
    />,
  ])
}
