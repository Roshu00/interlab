import { Navbar } from "@/app/components/navbar";
import { Hero } from "./components/hero";
import { AboutUs } from "./components/about-us";
import { Services } from "./components/services";
import { How } from "./components/how";
import { Work } from "./components/work";
import { Location } from "./components/location";
import { ContactUs } from "./components/contact-us";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <How />
      <Work />
      <Location />
      <ContactUs />
      <Footer />
    </div>
  );
}
