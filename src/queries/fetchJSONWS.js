import uriTemplate from "uri-templates";

import Configuration from "../Configuration";
import languageMap from "../json/languageMap.json";

export default function fetchJSONWS(uriTemplateString, data, languageId) {
  return fetch(
    Configuration.apiServer +
      "/api/jsonws" +
      uriTemplate(uriTemplateString).fill(data),
    {
      headers: {
        "Accept-Language": languageMap[languageId] || "en-US",
      },
      method: "GET",
    }
  ).then((res) => res.json());
}
