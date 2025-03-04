import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const headingRef = useRef(null);
  const mapRef = useRef(null);
  const contentRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('Message sent successfully:', result.text);
        alert('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsPopupOpen(false);
      })
      .catch((error) => {
        console.error('Failed to send message:', error.text);
        alert('There was an error sending your message. Please try again later.');
      });
  };

  // Intersection Observer for each element
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingVisible(true);
          headingObserver.unobserve(entry.target);
        }
      },
      observerOptions
    );

    const mapObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          mapObserver.unobserve(entry.target);
        }
      },
      observerOptions
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
          contentObserver.unobserve(entry.target);
        }
      },
      observerOptions
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);
    if (mapRef.current) mapObserver.observe(mapRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      if (headingRef.current) headingObserver.unobserve(headingRef.current);
      if (mapRef.current) mapObserver.unobserve(mapRef.current);
      if (contentRef.current) contentObserver.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="bg-white text-gray-900 py-12">
      {/* Centered Heading with Top Animation */}
      <h2
        ref={headingRef}
        className={`text-4xl font-bold text-center mb-12 tracking-wide uppercase text-red-600 transition-all duration-700 ease-out ${
          isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Contact Us
      </h2>

      <div className="container mx-auto px-4">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Google Map with Left Animation */}
          <div
            ref={mapRef}
            className={`transition-all duration-700 ease-out ${
              isMapVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-red-600">Our Location</h3>
            <div className="w-full h-64 rounded overflow-hidden shadow-lg">
              <iframe
                title="Company Location"
                src="https://maps.google.com/maps?q=20.3432677,72.9549228&z=15&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Text, Address, and Button with Right Animation */}
          <div
            ref={contentRef}
            className={`flex flex-col justify-between transition-all duration-700 ease-out ${
              isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                We’d Like to Hear From You
              </h3>
              <p className="text-gray-700 mb-6">
                Have a question or need a quote? Reach out to us for expert boiler
                fabrication, steam piping, and repair services.
              </p>
              <div className="text-gray-900">
                <p className="font-semibold">Address:</p>
                <p>123 Industrial Lane, Boiler City, BC 45678</p>
                <p className="mt-2">
                  <span className="font-semibold">Phone:</span> (555) 123-4567
                </p>
                <p>
                  <span className="font-semibold">Email:</span> info@boilerworks.com
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsPopupOpen(true)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 shadow-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Popup Contact Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-xl w-full max-w-lg relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-red-600">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}