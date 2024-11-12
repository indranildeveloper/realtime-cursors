import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const [username, setUsername] = useState("");

  return username ? (
    <Home username={username} />
  ) : (
    <Login handleSubmit={setUsername} />
  );
};

export default App;
