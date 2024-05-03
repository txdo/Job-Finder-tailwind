const Company = require("../models/Company");

exports.getCompanyInfo = async (req, res) => {
  if (!req.user)
    return res.status(401).send({ errors: ["User not logged in"] });

  try {
    const company = await Company.findById(req.user._id);
    res.status(200).send({ company });
  } catch (err) {
    res.status(500).send({ errors: ["Something went wrong"] });
  }
};
