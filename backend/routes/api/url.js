const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const shortUrl = require("node-url-shortener");

//Url model
const Url = require("../../models/Url");

// get all urls
router.get("/get-all", async (req, res) => {
  const urls = await Url.find();

  const result = [];

  urls.forEach((url) => {
    result.push({
      urlShort: url.urlShort,
      urlLong: url.urlLong,
    });
  });

  res.status(200).json({
    url: result,
  });
});
// send short and get long
router.post("/get-long", (req, res) => {
  const { url } = req.body;

  if (!url)
    return res
      .status(400)
      .json({ msg: "Error: Please enter a valid URL and try again" });

  // Check if URL exists and find URL
  Url.findOne({ urlShort: url }).then((urlShort) => {
    if (!urlShort)
      return res.status(400).json({
        msg: "Error: The URL you are looking for does not exist, please try again",
      });

    res.status(200).json({
      url: {
        urlShort: urlShort.urlShort,
        urlLong: urlShort.urlLong,
      },
    });
  });
});

// send long url and get short url
router.post("/send-long", (req, res) => {
  const { url } = req.body;

  if (!url)
    return res.status(400).json({ msg: "Error: Please enter a valid URL" });

  Url.findOne({ urlLong: url }).then((urlLong) => {
    if (urlLong)
      return res.status(400).json({ msg: "Error: URL Already exists" });

    shortUrl.short(`${urlLong}`, (err, urlShort) => {
      if (err)
        return res
          .status(400)
          .json({ msg: "Error: Something went wrong, please try again" });

      const newUrl = new Url({
        urlShort,
        urlLong: url,
      });

      newUrl.save().then((url) => {
        jwt.sign(
          { id: url.id },
          config.get("appsecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
              url: {
                urlShort: url.urlShort,
                urlLong: url.urlLong,
              },
            });
          }
        );
      });
    });
  });
});

module.exports = router;
