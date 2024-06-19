import React from "react";
import contact from "../../images/contact.svg";
import Image from "next/image";

export const metadata = {
  title: "Contact Us - Algoralign ",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  description: "Contact - Algoralign .",
  keywords: [
    "Algoralign",
    "Secure Transactions",
    "Financial Protection",
    "Transaction Security",
    "Trustworthy Payments",
    "Safe Money Handling",
    "Secure Payment Solutions",
    "Risk-Free Transactions",
    "Financial Safeguarding",
    "Protected Financial Services",
    "Online Payment Security",
    "Trust-Based Transactions",
    "Payment Assurance",
    "Verified Payment Methods",
    "Transaction Assurance",
    "Payment Escrow Alternatives",
    "Secure Fund Handling",
    "Financial Transaction Assurance",
    "Protected Payment Services",
    "Trustworthy Financial Solutions",
    "Secure Fund Management",
  ],
  robots: {
    index: false,
    follow: true,
    // nocache: true,
    googleBot: {
      index: true,
      follow: false,
      // noimageindex: true,
      // 'max-video-preview': -1,
      // 'max-image-preview': 'large',
      // 'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Algoralign - Homepage",
    description:
      "Algoralign offers secure financial solutions for your peace of mind.",
    url: "https://algoralign.com",
    siteName: "Next.js",
    images: [
      {
        url: "https://algoralign.com/logopng",
        width: 800,
        height: 600,
      },
      {
        url: "https://algoralign.com/logo.png",
        width: 1800,
        height: 1600,
        alt: "Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
function page() {
  return (
    <main className="md:min-h-screen max-w-[1200px] mx-auto mt-4 md:mt-10 p-5">
      <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <Image
                src={contact}
                className=" w-72 md:mx-0 mx-auto"
                alt="contact icon"
                priority
              />

              <div className="max-w-[570px] mb-12 lg:mb-0">
                {/* <span className="block mb-4 text-base text-primary font-semibold">
                  Contact Us
                </span> */}
                <h2
                  className="
                 text-dark
                 mb-4
                 uppercase
                 font-bold
                 text-[32px]
                 sm:text-[40px]
                 lg:text-[36px]
                  text-blue-950
                 "
                >
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-gray-500 font-light ">
                  Getting in touch with us is easy and we arere always here to
                  help. Whether you have questions, feedback, or just want to
                  say hello, we welcome your inquiries. Our dedicated team is
                  ready to assist you with any information or assistance you may
                  need.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                       w-full
                       rounded
                       py-3
                       px-[14px]
                       text-body-color text-base
                       border border-[f0f0f0]
                       outline-none
                       focus-visible:shadow-none
                       focus:border-primary
                       "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="
                       w-full
                       rounded
                       py-3
                       px-[14px]
                       text-body-color text-base
                       border border-[f0f0f0]
                       outline-none
                       focus-visible:shadow-none
                       focus:border-primary
                       "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="
                       w-full
                       rounded
                       py-3
                       px-[14px]
                       text-body-color text-base
                       border border-[f0f0f0]
                       outline-none
                       focus-visible:shadow-none
                       focus:border-primary
                       "
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="
                       w-full
                       rounded
                       py-3
                       px-[14px]
                       text-body-color text-base
                       border border-[f0f0f0]
                       resize-none
                       outline-none
                       focus-visible:shadow-none
                       focus:border-primary
                       "
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="
                       w-full
                       text-white
                       bg-primary
                       rounded
                       border border-primary
                       p-3
                       transition
                       hover:bg-opacity-90
                       "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
