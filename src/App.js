import logo from "./logo.svg";
import "./App.css";

import useEvents from "./hooks/useEvents";

function App() {
  const start = 0;
  const end = 5;
  const type = 1;
  const { data, isFetching, status } = useEvents(start, end, type, "en-US");

  return (
    <div className="App">
      {status === "success" &&
        data &&
        data.map((event) => (
          <div key={event.marketingEventId}>{event.titleCurrentValue}: {event.titleURL}</div>
        ))}
    </div>
  );
}

export default App;
