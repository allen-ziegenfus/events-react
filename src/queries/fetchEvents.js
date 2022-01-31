import fetchJSONWS from "./fetchJSONWS";

export default function fetchEvents(queryValues, languageId) {
  return fetchJSONWS(
    "/osb.marketingevent/get-marketing-events{?params*}",
    queryValues,
    languageId
  );
}
