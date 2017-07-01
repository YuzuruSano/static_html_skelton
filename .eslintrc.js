module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jquery": true,
    "es6": true
  },
  "rules": {
    "curly": 2,
    "eqeqeq": 2,
    "no-multi-spaces": 1,
    "no-underscore-dangle": 1,
    "quotes": [2, "single"],
    "strict" : 2,
    "semi": ["error", "always"],
    "comma-spacing": ["error", {"before": false, "after": true}]
  },
  "ecmaFeatures": {
    "jsx": true
  }
};