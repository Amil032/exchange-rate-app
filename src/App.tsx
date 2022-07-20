import { Routes, Route } from "react-router-dom";
import { Page1 } from "./components/pages/Convert/Convert";
import { Page2 } from "./components/pages/Rates/Rates";
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

export default App;
