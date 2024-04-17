import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const WithHeaderAndFooter = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default WithHeaderAndFooter;
