import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col w-screen ">
      <Navbar />
      <main>
       {children}
      </main>
      <div>
        <Footer />
      </div>

    </div>
  );
}
