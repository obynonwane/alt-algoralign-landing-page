import Link from "next/link";
import ResetPassword from "../components/ResetPassword";
export const metadata = {
  title: "Reset Password - Algoralign",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  description: "Reset Password - Algoralign",
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
      noimageindex: true,
    },
  },
};
function page() {
  return (
    <main
      className="mt-10  max-w-[1200] mx-auto w-full p-5
    "
    >
      {/* <ResetPassword /> */}
    </main>
  );
}

export default page;
