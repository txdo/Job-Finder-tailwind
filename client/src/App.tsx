import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AllJobs from "./components/AllJobs";

function App() {
  return (
    <div className="box">
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/all-jobs" element={<AllJobs />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
