import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
