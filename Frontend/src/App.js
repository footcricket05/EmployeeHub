import react from "react";
import Footerr from "./components/Footerr";
import Navbarr from "./components/Navbarr";
import UserItem from "./components/UserItem";
import "./styles/App.css";
import Routes from "./routes";
function App() {
  return (
    <div>
      <Routes />
      <Footerr />
    </div>
  );
}

export default App;
