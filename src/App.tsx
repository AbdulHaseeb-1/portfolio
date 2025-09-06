import Navbar from "./components/navbar";
import MainGrid from "./components/main-grid";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="bg-neutral-50 dark:bg-black">
      <div className="-z-10  w-full h-full overflow-hidden pointer-events-none ">
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" /> */}
        {/* <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl" /> */}
      </div>
        {/* <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-tr from-green-500/5 to-transparent rounded-full blur-3xl" /> */}
      <Navbar />
      <MainGrid />
      <Footer />
    </div>
  );
}
