import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer1 from "./components/Footer";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <Footer1 />
      </Suspense>
    </>
  );
}

export default App;
