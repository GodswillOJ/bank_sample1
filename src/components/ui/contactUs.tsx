import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg shadow">
      {/* Breadcrumbs */}
      <nav className="text-gray-500 text-sm mb-6">
        <span className="font-semibold text-gray-800">Home</span> &gt;{" "}
        <span>Contact Us</span>
      </nav>

      {/* Hero Section */}
      <div
        className="relative rounded-lg overflow-hidden shadow-lg mb-8"
        style={{ backgroundImage: 'url(/icons/bill-house.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white p-6 sm:p-10 lg:p-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <strong>Help and customer support</strong>
            <br />
            Got a question? View our FAQs or get in touch with us by phone,
            email, or social media.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Customer Service */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Customer Service
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            We’re here to help. Contact us online or speak to your local team.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">FAQ</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            View our frequently asked questions covering information about us,
            how to apply for a job, and shareholder details.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
            Read our FAQs
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Social Media</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Got an account question or something not mentioned in our FAQs?
            Message us. Please avoid sharing account details on X (formerly
            Twitter).
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
            Message us
          </a>
        </div>

        {/* Video Banking */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Video Banking</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            We offer video banking in certain countries, allowing you to speak
            to us securely from anywhere.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
            Learn more
          </a>
        </div>

        {/* Local Experts */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Find Local Experts
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Visit your local website to find contact details for customer care
            teams who can assist with specific account questions.
          </p>
        </div>

        {/* Global HQ */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Global HQ</h3>
          <address className="text-gray-700 text-sm sm:text-base not-italic">
            <p>Next Bank Global Headquarters</p>
            <p>1 Basinghall Avenue, London, EC2V 5DD</p>
            <p>+44 (0)20 7885 8888</p>
            <p>
              <a
                href="https://nextbank.com/uk"
                className="text-blue-600 hover:underline"
              >
                nextbank.com/uk
              </a>
            </p>
          </address>
        </div>

        {/* Careers */}
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Interested in Joining Us?
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Recent graduate? Looking for your next opportunity? Start a career
            with us at Next Bank.
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm sm:text-base">
            Start a career with us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
