import "./App.css";
import { Box } from "@chakra-ui/react";
import SideNav from "./Components/SideNav";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box w="246px">
          <SideNav />
        </Box>
        <Box w="1194px">
          <HomePage />
        </Box>
      </Box>
    </div>
  );
}

export default App;
