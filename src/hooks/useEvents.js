import { useQuery } from "react-query";

import fetchEvents from "../queries/fetchEvents";

const getEvents = ({ queryKey }) => {
  const [_key, { start, end, type, languageId }] = queryKey;
  const queryValues = {
    params: {
      end,
      start,
      type,
    },
  };

  return fetchEvents(queryValues, languageId);
};

export default function useEvents(start, end, type, languageId) {
  return useQuery(["events", { start, end, type, languageId }], getEvents, {
    staleTime: 30000,
  });
}
