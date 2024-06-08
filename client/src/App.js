import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DropBox from "./components/DropBox/DropBox";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DropBox />} />
      </Routes>
    </Router>
  );
}

export default App;
