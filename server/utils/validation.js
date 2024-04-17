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
