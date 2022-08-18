import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";

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
  // const [value, setValue] = useState("");
  return (
    <>
      <Status status="loading" />
      <Greet name="Dai Linhx" isLogin />
      <Person name={aName} />
      <PersonList name={names} />
      <Heading>Hello</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Button handleClick={(event) => console.log("Hello;", event)} />
      <Input
        initValue="hi"
        // handleChange={(event) => setValue(event.target.value)}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
}

export default App;
