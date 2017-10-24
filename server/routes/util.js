module.exports.mapBindingToValues = binding => {
  const values = {};
  Object.keys(binding).forEach(key => {
    values[key] = binding[key].value
  });
  return values;
};
