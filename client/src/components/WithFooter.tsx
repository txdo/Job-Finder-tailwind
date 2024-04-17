import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const WithFooter = (): JSX.Element => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default WithFooter;
