import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AllJobs from "./components/AllJobs";
import CompanyInfo from "./components/CompanyInfo";
import WithHeader from "./components/WithHeader";
import Login from "./components/Login";
import useApp from "./hooks/useApp";
import Register from "./components/Register";
import Candidates from "./components/Candidates";
import WithHeaderAndFooter from "./components/WithHeaderAndFooter";
import Profile from "./components/Profile";
import RegisterCompany from "./components/RegisterCompany";
import LoginCompany from "./components/LoginCompany";
import Companies from "./components/Companies";
import CompanyProfile from "./components/CompanyProfile";

function App() {
  useApp();

  return (
    <div className="box">
      <Routes>
        <Route element={<WithHeader />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-company" element={<RegisterCompany />} />
          <Route path="/login-company" element={<LoginCompany />} />
        </Route>
        <Route element={<WithHeaderAndFooter />}>
          <Route index element={<Home />} />
          <Route path="/all-jobs" element={<AllJobs />} />
          <Route path="/companies/:id" element={<CompanyInfo />} />
          <Route path="/people" element={<Candidates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
