import Navbar from "./frontend/components/Navbar";
import Carousel from "./frontend/components/carousel";
import Products from "./frontend/components/products";
import ContactForm from "./frontend/components/contactForm";
import Footer from "./frontend/components/footer";
import IndustriesSection from "./frontend/components/industries";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <div className="flex-grow">
        <Carousel />
      </div>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <Products />
      </section>

      <IndustriesSection/>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
