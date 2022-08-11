import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

const aName = {
  first: "Linh",
  last: "Tao",
};

const names = [
  { first: "Linh", last: "Tao" },
  { first: "Luong", last: "Tao" },
  { first: "Cat", last: "Tao" },
];

function App() {
  return (
    <>
      <Status status="loading" />
      <Greet name="Dai Linhx" messageCount={10} isLogin={false} />
      <Person name={aName} />
      <PersonList name={names} />
      <Heading>Hello</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
    </>
  );
}

export default App;
