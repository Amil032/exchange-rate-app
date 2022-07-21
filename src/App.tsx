import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Page1 } from "./components/pages/Convert/Convert";
import { Page2 } from "./components/pages/Rates/Rates";
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Header><Page1 /></Header>} />
        <Route path="page2" element={<Header><Page2 /></Header>} />
      </Routes>
    </div>
  );
}

export default App;
