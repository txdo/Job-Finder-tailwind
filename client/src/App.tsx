import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllJobs from "./components/AllJobs";
import CompanyInfo from "./components/CompanyInfo";
import WithHeader from "./components/WithHeader";
import WithFooter from "./components/WithFooter";
import Login from "./components/Login";

function App() {
  return (
    <div className="box">
      <Routes>
        <Route element={<WithHeader />}>
          <Route path="/login" element={<Login />} />
          <Route element={<WithFooter />}>
            <Route index element={<Home />} />
            <Route path="/all-jobs" element={<AllJobs />} />
            <Route path="/companies/:id" element={<CompanyInfo />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
