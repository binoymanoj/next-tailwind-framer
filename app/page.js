import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Image from "next/image";
import carbgimg from "@/app/assets/carbgimg.jpg";

export default function Page() {
  return (
    <>
      <Image
        src={carbgimg}
        alt="backgroundimg"
        className="absolute bg-black/80 -z-10 top-0"
      />

      <Header />
      <Home />
      <Footer />
    </>
  );
}
