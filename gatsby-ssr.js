const React = require("react")
const fs = require("fs")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      // Theming setup
      dangerouslySetInnerHTML={{
        __html: `!(function () {
          function e(e) {
            (window.__theme = e),
              (document.documentElement.className = "dark" === e ? "dark" : ""),
              window.dispatchEvent(new CustomEvent("theme", { detail: e }));
          }
          let t;
          window.__setPreferredTheme = function (t) {
            e(t);
            try {
              localStorage.setItem("preferred-theme", t);
            } catch (e) {}
          };
          try {
            t = localStorage.getItem("preferred-theme");
          } catch (e) {}
          let r = window.matchMedia("(prefers-color-scheme: dark)");
          e(t || (r.matches ? "dark" : "light"));
        })();
        `
      }}
    />,
  ])
}
