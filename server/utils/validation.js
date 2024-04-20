exports.validateRegister = (name, username, password, confirmPassword) => {
  const errors = [];

  if (name.length < 4) errors.push("Name must be at least 4 characters");
  if (username.length < 4)
    errors.push("Username must be at least 4 characters");
  if (password.length < 6)
    errors.push("Password must be at least 6 characters");
  if (password !== confirmPassword) errors.push("Passwords must match");

  return errors;
};

exports.validateCompany = (
  name,
  description,
  reasons,
  url,
  username,
  password,
  confirmPassword,
  banner,
  image
) => {
  const errors = [];

  if (name.length < 4) errors.push("Name must be at least 4 characters");
  if (description.length < 50)
    errors.push("Description must be at least 50 characters");
  if (reasons.length < 3) errors.push("Reasons must be at least 3 characters");
  if (!url.match(/([\w]+).([\w]+)/)) errors.push("URL is not valid");
  if (username.length < 4)
    errors.push("Username must be at least 4 characters");
  if (password.length < 6)
    errors.push("Password must be at least 6 characters");
  if (password !== confirmPassword) errors.push("Passwords must match");
  if (!banner) errors.push("Banner is required");
  if (!image) errors.push("Image is required");

  return errors;
};
