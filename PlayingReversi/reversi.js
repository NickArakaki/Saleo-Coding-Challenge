const reversi = (obj) => {
  const res = {};

  Object.entries(obj).forEach(([key, val]) => {
    if (!(val in res)) {
      res[val] = [];
    }

    res[val].push(key);
  });

  // Sorting to have a deterministic output
  for (let key in res) {
    res[key].sort();
  }

  return res;
};

module.exports.reversi = reversi;
