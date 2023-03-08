const { alias, configPaths } = require("react-app-rewire-alias");

module.exports = (config) => {
    const overrider = alias(configPaths("./jsconfig.paths.json"));
    return overrider(config);
};