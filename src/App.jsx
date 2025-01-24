import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AIHub from "./pages/AIHub";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-hub" element={<AIHub />} />
      </Routes>
    </Router>
  );
}

export default App;
