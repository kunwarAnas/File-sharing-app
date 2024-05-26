import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DropBox from "./components/DropBox/DropBox";
import Share from "./components/Share/Share";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DropBox />} />
        <Route exact path="/share" element={<Share/>} />
      </Routes>
    </Router>
  );
}

export default App;
