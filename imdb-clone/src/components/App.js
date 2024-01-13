import Header from "./Header/Header";
import ContactUs from "./Routes/ContactUs";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import wishList from "./Utils/wishList";
function App() {
  return (
    <>
      <Provider store={wishList}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
