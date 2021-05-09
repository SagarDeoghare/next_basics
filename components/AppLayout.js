import AppNavBar from "./AppNavBar";
import Footer from "./Footer";

const AppLayout = ({ children }) => {
  return (
    <div>
      <AppNavBar></AppNavBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
