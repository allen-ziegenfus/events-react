const ConfigurationLocal = {
  apiServer: "https://www-dev.liferay.com",
  imageURLPrefix: "https://www-dev.liferay.com",
};

const ConfigurationCloud = {
  apiServer: "",
  imageURLPrefix: "",
};

export const ConfigurationProd = {
  apiServer: "",
  imageURLPrefix: "",
};

let Configuration = ConfigurationCloud;

if (
  (window && window.location.hostname === "localhost") ||
  window.location.hostname === "0.0.0.0"
) {
  Configuration = ConfigurationLocal;
} else if (window && window.location.hostname === "www.liferay.com") {
  Configuration = ConfigurationProd;
}

export default Configuration;
