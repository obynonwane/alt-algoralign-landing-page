import Signup from "../components/Signup";
export const metadata = {
  title: "Signup - Algoralign",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  description: "Algoralign Signup",
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
    url: "https://algoralign.com/get-started",
    siteName: "Algoralign",
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
    <main
      id="top"
      className="pt-8  max-w-[1200] mx-auto w-full p-5
    "
    >
      <Signup />
    </main>
  );
}

export default page;
