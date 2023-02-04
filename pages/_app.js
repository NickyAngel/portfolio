import Navbar from "../components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="pt-16"></div>
      <Component {...pageProps} className="pt-16" />
    </>
  );
}
