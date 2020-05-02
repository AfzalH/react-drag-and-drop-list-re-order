import React from "react";
import List from "./data";
import { ListContainer, ListItem } from "./styles";
import { DragHandle } from "./partials/DragHandle";

const App = () => {
  const list = List.getList();
  return (
    <div className="App">
      <ListContainer>
        {list.map((item, i) => (
          <ListItem>
            <DragHandle />
            <span>{item.title}</span>
          </ListItem>
        ))}
      </ListContainer>
    </div>
  );
};

export default App;
