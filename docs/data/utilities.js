const sass = require("sass");

module.exports = async function () {
  const filePath = __dirname + "/../../src/_styles.scss";
  const { css } = sass.compile(filePath, {style: "expanded", verbose: true});
  const pattern = /((\/\*(\=+)([\s\S]+?)(\=+)\*\/))/gm;
  const hashPattern = /(@[a-z]+)(\:\s)(.+)/gm;

  const result = (css.toString().match(pattern) || [])
    .map((item) => {
      let resp = {};
      const cleanItem = item
        .replace(/\/\*/gm, "")
        .replace(/\*\//gm, "")
        .replace(/\,\s*?\n/gm, ", ")
        .replace(/\(\s*?\n\s/gm, "[")
        .replace(/\)\s/gm, "]")
        .replace(/\=+/gm, "")
      cleanItem.match(hashPattern).forEach((match) => {
        const line = match.split(hashPattern);
        resp[line[1].replace("@", "")] = line[3];
      });

      return {
        name: resp.name || "Not Documented",
        classname: `${resp.classname}####`,
        properties: resp.properties.split(" "),
        responsive: !!resp.properties.responsive,
        values: resp.values
          .replace("[", "")
          .replace("]", "")
          .split(/\,\s{2,}/gm)
          .map((item) => {
            const i = item.split(":");
            if (i[1]) {
              let prop = {};
              prop[`${
                resp.classname}${i[0]
              }`] = i[1];
              return prop;
            }
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
    return result;
};
