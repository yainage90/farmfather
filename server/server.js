const { default: axios } = require("axios");
const express = require("express");
const app = express();

const port = 5000;

app.use("/api/course/:courseId", async (req, res) => {
  await axios
    .get(
      "https://raw.githubusercontent.com/yaincoding/farmfather-fake-api/master/Course.json"
    )
    .then((res) => {
      const docs = res.data.docs;
      [resultDoc] = docs.filter((doc) => {
        return doc.id === req.params.courseId;
      });
    });

  return res.json({ ...resultDoc });
});

app.listen(port, () => {
  console.log(`Node server is listening to port ${port}`);
});
