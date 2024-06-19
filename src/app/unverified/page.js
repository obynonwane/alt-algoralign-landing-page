import Link from "next/link";
import Login from "../components/Login";
export const metadata = {
  title: "Reset Password - Algoralign",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  robots: {
    index: false,
    follow: true,
    // nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};
function page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
        <p>You do not have permission to access this page.</p>
        <Link
          href="/"
          className="w-fit mx-auto px-4 py-3 mt-5 underline text-white"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
}

export default page;
