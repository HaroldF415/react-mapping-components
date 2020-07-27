import React from "react";

import Term from "./Term";
import emojis from "../emojipedia";

function createTerm(emoji) {
  return (
    <Term
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createTerm)}</dl>
    </div>
  );
}

export default App;
