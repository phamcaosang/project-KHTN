import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";
import Usage from "./pages/Usage/Usage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />}/>
        <Route path="/usage" element={<Usage />}/>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
