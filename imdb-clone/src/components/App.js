import Header from "./Header/Header";
import ContactUs from "./Routes/ContactUs";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
