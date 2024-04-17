import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllJobs from "./components/AllJobs";
import CompanyInfo from "./components/CompanyInfo";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="box">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/companies/:id" element={<CompanyInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
