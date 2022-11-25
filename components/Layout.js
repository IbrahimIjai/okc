import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between  ">
      <div>
        <Navbar />
       {children}
      </div>
      <Footer />
    </div>
  );
}
