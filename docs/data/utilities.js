const sass = require("node-sass");
const path = require("path");
const fs = require("fs");

module.exports = async function () {
  const filePath = path.resolve(__dirname, "../../src/_styles.scss");
  const scssStyles = fs.readFileSync(filePath, "utf8");
  const { css } = sass.renderSync({
    data: scssStyles,
    includePaths: [path.resolve(__dirname, "../../src")],
  });

  const pattern = /((\/\*(\=+)([\s\S]+?)\*\/))/gm;
  const hashPattern = /(@[a-z]+)(\:\s)(.+)/gm;

  return (css.toString().match(pattern) || [])
    .map((item) => {
      let resp = {};
      item.match(hashPattern).forEach((match) => {
        const line = match.split(hashPattern);
        resp[line[1].replace("@", "")] = line[3];
      });

      return {
        name: resp.name || "Not Documented",
        classname: `${resp.classname}####`,
        properties: resp.properties.split(" "),
        responsive: !!resp.properties.responsive,
        values: resp.values
          .replace("(", "")
          .replace(")", "")
          .replace(/\"/gm, "")
          .replace(/\s/gm, "")
          .split(",")
          .map((item) => {
            const i = item.split(":");
            let prop = {};
            prop[`${resp.classname}${i[0].replace(/\\+/gm, "")}`] = i[1];
            return prop;
          }),
      };
    })
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (b.name < a.name) {
        return 1;
      }
      return 0;
    });
};
