import Link from "next/link";
import PosSolution from "../../components/PosSolution";
export const metadata = {
  title: "P.O.S Solution - Algoralign",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  description:
    "Algoralign offers secure financial solutions for your peace of mind.",
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
    index: true,
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
    siteName: "Algoralign",
    images: [
      {
        url: "https://algoralign.com/logo.png",
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
    <main>
      <PosSolution />
    </main>
  );
}

export default page;
