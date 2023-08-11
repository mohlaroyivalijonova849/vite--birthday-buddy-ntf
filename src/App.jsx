import { useState } from "react";
// component
import List from "./component/List";
//data
import data from "./data/db";

function App() {
  const deletePerson = (id) => {
    const users = people.filter((user) => {
      return user.id !== id;
    });
    setPeople(users);
  };

  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      <h1> {people ? people.length : 0} Birthday Buddy</h1>
      <List people={people} deletePerson={deletePerson} />
      {people.length ? (
        <button
          className="clear-btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      ) : null}
      {!people.length && (
        <button
          className="refresh-btn"
          onClick={() => {
            setPeople(data);
          }}
        >
          Refresh
        </button>
      )}
    </div>
  );
}

export default App;
