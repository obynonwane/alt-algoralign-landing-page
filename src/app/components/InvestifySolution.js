"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import hicon1 from "../../images/hicon (1).svg";
import hicon2 from "../../images/hicon (2).svg";
import hicon3 from "../../images/hicon (3).svg";
import right from "../../images/Group 2333.svg";
import api from "../../images/api.svg";
import chart from "../../images/chart.png";
import arrow from "../../images/arrow.png";
import { Menu, Transition } from "@headlessui/react";
import lines from "../../images/lines.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import Faq from "./Faq";
import { RxCaretRight } from "react-icons/rx";

export default function PaymentPrtnersSolution() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen --font-clash flex-col items-center justify-between lg:pt-28 pt-24 pb-10   ">
        <section className="max-w-[1300px] flex items-center flex-wrap p-6">
          <div className="w-full md:w-1/2 md:p-16">
            <h2 className=" text-4xl  font-semibold mb-4 md:text-left text-center text-blue-950">
              Ignite Your Wealth, Maximize Your Returns{" "}
            </h2>
            <p className="text-gray-600 font-light mb-5 md:text-left text-center">
              Lock in your funds for significant returns and take a calculated
              step toward financial success. This isn&apos;t just saving;
              it&apos;s strategic investing with Investify.
            </p>
            <div className="flex items-center pt-2 md:justify-start justify-center">
              <Link
                href="/get-started"
                className="mb-10  text-white hover:opacity-75 bg-blue-600 px-4 py-2 rounded"
              >
                Request Demo
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2  flex z-20 items-center justify-center md:max-w-[100%] max-w-[100%] mx-auto">
            <Image src={right} alt="" priority />
          </div>
        </section>
        <section className="max-w-[1180px] mx-auto p-6">
          <div className="text-center max-w-lg mb-8 mt-16 mx-auto">
            <h4 className="text-blue-900 text-3xl font-semibold">
              How It Works?
            </h4>
            {/* <p className="text-center text-gray-600 font-light mb-5  ">
              Elevate your remittance or POS services with seamless cross-border
              transactions and local currency support{" "}
            </p> */}
          </div>

          <div className="grid grid-cols-12 gap-5 mt-10 mb-20">
            <div className="md:col-span-4 col-span-12 bg-zinc-100 p-5 rounded">
              <span className="p-5 text-2xl font-semibold mb-4 mt-3 bg-blue-100 w-12   h-12   rounded-lg flex items-center justify-center text-center text-blue-600">
                1
              </span>
              <h4 className="text-blue-600 text-xl font-semibold">
                Choose Your Plan
              </h4>
              <p className=" text-gray-600 font-light mb-5  ">
                Select an investment plan tailored to your financial objectives
              </p>
            </div>

            <div className="md:col-span-4 col-span-12 bg-zinc-100 p-5 rounded">
              <span className="p-5 text-2xl font-semibold mb-4 mt-3 bg-blue-100 w-12   h-12   rounded-lg flex items-center justify-center text-center text-blue-600">
                2
              </span>
              <h4 className="text-blue-600 text-xl font-semibold">
                Lock in Your Funds
              </h4>
              <p className=" text-gray-600 font-light mb-5  ">
                Secure your investment by committing your funds for a
                predetermined period
              </p>
            </div>
            <div className="md:col-span-4 col-span-12 bg-zinc-100 p-5 rounded">
              <span className="p-5 text-2xl font-semibold mb-4 mt-3 bg-blue-100 w-12   h-12   rounded-lg flex items-center justify-center text-center text-blue-600">
                3
              </span>
              <h4 className="text-blue-600 text-xl font-semibold">
                Watch Your Wealth Grow
              </h4>
              <p className=" text-gray-600 font-light mb-5  ">
                Experience growth with attractive interest rates, maximizing
                your returns effortlessly.
              </p>
            </div>
          </div>

          <div className="text-center max-w-lg mb-8 mt-16 mx-auto">
            <h4 className="text-blue-900 text-3xl font-semibold">
              Why Choose Us?{" "}
            </h4>
            {/* <p className="text-center text-gray-600 font-light mb-5  ">
              Elevate your remittance or POS services with seamless cross-border
              transactions and local currency support
            </p> */}
          </div>
          <div className="grid grid-cols-12 gap-5 mt-10 mb-20">
            <div className="md:col-span-6 col-span-12 bg-blue-600 p-5 rounded">
              <svg
                width="77"
                height="96"
                viewBox="0 0 77 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.4662 53.1572C25.2541 53.1572 17.5246 55.5014 17.0864 56.7577C17.5246 57.9381 25.2541 60.2822 38.4662 60.2822C51.5453 60.2822 59.251 57.9844 59.8305 56.7197C59.251 55.455 51.5453 53.1572 38.4662 53.1572Z"
                  fill="white"
                />
                <path
                  d="M32.5288 72.0269C34.0595 72.0946 35.646 72.1349 37.2788 72.1492V67.4004C35.6959 67.3861 34.1082 67.341 32.5288 67.2686V72.0269Z"
                  fill="white"
                />
                <path
                  d="M25.4038 71.4949C26.9167 71.6564 28.5032 71.7905 30.1538 71.8962V67.1379C28.5483 67.0334 26.9606 66.898 25.4038 66.7354V71.4949Z"
                  fill="white"
                />
                <path
                  d="M4.02881 63.8449C4.02881 65.0775 5.69012 66.4835 8.77881 67.7838V63.2203C6.84318 62.4757 5.22937 61.6338 4.02881 60.6992V63.8449Z"
                  fill="white"
                />
                <path
                  d="M11.1538 68.6707C12.5479 69.1315 14.138 69.5661 15.9038 69.9651V65.2626C14.2104 64.8992 12.6192 64.4895 11.1538 64.0371V68.6707Z"
                  fill="white"
                />
                <path
                  d="M18.2788 70.4581C19.7584 70.7384 21.3461 70.9901 23.0288 71.211V66.4574C21.3936 66.2484 19.8047 66.005 18.2788 65.7295V70.4581Z"
                  fill="white"
                />
                <path
                  d="M39.6538 72.1494C41.2866 72.1351 42.8731 72.0948 44.4038 72.0271V67.2676C42.8244 67.34 41.2367 67.3851 39.6538 67.3994V72.1494Z"
                  fill="white"
                />
                <path
                  d="M53.9038 71.211C55.5865 70.9901 57.1742 70.7384 58.6538 70.4581V65.7295C57.1279 66.0062 55.539 66.2484 53.9038 66.4574V71.211Z"
                  fill="white"
                />
                <path
                  d="M68.1538 67.7841C71.2425 66.4837 72.9038 65.0777 72.9038 63.8451V60.6982C71.7032 61.6328 70.0894 62.4747 68.1538 63.2193V67.7841Z"
                  fill="white"
                />
                <path
                  d="M61.0288 69.9649C62.7946 69.5659 64.3847 69.1301 65.7788 68.6705V64.0381C64.3134 64.4905 62.7222 64.9002 61.0288 65.2636V69.9649Z"
                  fill="white"
                />
                <path
                  d="M46.7788 71.8962C48.4294 71.7905 50.0159 71.6564 51.5288 71.4949V66.7354C49.972 66.8992 48.3843 67.0346 46.7788 67.1379V71.8962Z"
                  fill="white"
                />
                <path
                  d="M38.4663 48.4072C17.1293 48.4072 4.02881 53.2487 4.02881 56.7197C4.02881 60.1908 17.1293 65.0322 38.4663 65.0322C59.8033 65.0322 72.9038 60.1908 72.9038 56.7197C72.9038 53.2487 59.8033 48.4072 38.4663 48.4072ZM38.4663 62.6572C29.6444 62.6572 14.7163 61.4068 14.7163 56.7197C14.7163 52.0327 29.6444 50.7822 38.4663 50.7822C47.2882 50.7822 62.2163 52.0327 62.2163 56.7197C62.2163 61.4068 47.2882 62.6572 38.4663 62.6572Z"
                  fill="white"
                />
                <path
                  d="M25.4038 30.5947H35.8301L38.1421 39.843C38.2169 40.1375 38.7145 40.1387 38.7893 39.8418L41.1026 30.5947H51.5288C52.1843 30.5947 52.7163 30.0627 52.7163 29.4072V10.4072C52.7163 9.75173 52.1843 9.21973 51.5288 9.21973H25.4038C24.7483 9.21973 24.2163 9.75173 24.2163 10.4072V29.4072C24.2163 30.0627 24.7483 30.5947 25.4038 30.5947ZM33.7163 22.2822H36.0913V23.4697H39.6538C40.3093 23.4697 40.8413 22.9377 40.8413 22.2822C40.8413 21.6267 40.3093 21.0947 39.6538 21.0947H37.2788C35.3147 21.0947 33.7163 19.4964 33.7163 17.5322C33.7163 15.5681 35.3147 13.9697 37.2788 13.9697V11.5947H39.6538V13.9697H43.2163V17.5322H40.8413V16.3447H37.2788C36.6233 16.3447 36.0913 16.8767 36.0913 17.5322C36.0913 18.1877 36.6233 18.7197 37.2788 18.7197H39.6538C41.6179 18.7197 43.2163 20.3181 43.2163 22.2822C43.2163 24.2464 41.6179 25.8447 39.6538 25.8447V28.2197H37.2788V25.8447H33.7163V22.2822Z"
                  fill="white"
                />
                <path
                  d="M70.5287 22.2822C67.9091 22.2822 65.7787 24.4126 65.7787 27.0322C65.7787 28.4074 66.3748 29.6364 67.3106 30.5045L62.7565 38.9619C62.5796 38.9345 62.4014 38.9072 62.2162 38.9072C61.0061 38.9072 59.9386 39.5164 59.2937 40.4415L52.6889 38.64C52.5499 36.803 51.0264 35.3447 49.1537 35.3447C47.1896 35.3447 45.5912 36.9431 45.5912 38.9072C45.5912 39.6138 45.8037 40.2681 46.16 40.8227L42.0679 46.0833C43.0428 46.1106 44.0166 46.1486 44.9879 46.1973L48.0398 42.2726C48.3925 42.3914 48.7618 42.4697 49.1537 42.4697C50.3637 42.4697 51.4325 41.8605 52.0761 40.9355L58.681 42.7369C58.8199 44.574 60.3423 46.0322 62.2162 46.0322C64.1803 46.0322 65.7787 44.4339 65.7787 42.4697C65.7787 41.5518 65.4201 40.7217 64.8477 40.0888L69.4006 31.6314C69.7639 31.7217 70.138 31.7822 70.5287 31.7822C73.1483 31.7822 75.2787 29.6519 75.2787 27.0322C75.2787 24.4126 73.1483 22.2822 70.5287 22.2822Z"
                  fill="white"
                />
                <path
                  d="M11.1538 32.9697H19.4663V28.2197H11.1538V25.8447L4.02881 30.5947L11.1538 35.3447V32.9697Z"
                  fill="white"
                />
                <path
                  d="M65.7788 13.9697L72.9038 9.21973L65.7788 4.46973V6.84473H57.4663V11.5947H65.7788V13.9697Z"
                  fill="white"
                />
              </svg>

              <h4 className="text-white text-xl font-semibold">
                Personalized Approach
              </h4>
              <p className=" text-white font-light   ">
                Your financial goals are unique, and so is our approach.
                Experience personalized investment strategies that align with
                your aspirations. We work with you to craft a plan that suits
                your individual needs.
              </p>
            </div>

            <div className="md:col-span-6 col-span-12 bg-blue-600 p-5 rounded">
              <svg
                width="54"
                height="73"
                viewBox="0 0 64 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.0285 53.2392C33.0285 46.3106 38.6835 40.6812 45.6435 40.6812H49.3845C51.5595 35.3115 52.7775 29.4222 52.7775 23.4463V15.9115C52.7775 13.2267 50.6895 10.9749 48.0795 10.8017C41.8155 10.2821 35.8995 7.59724 31.4625 3.18027L30.0705 1.88117C28.1565 -0.0241908 24.7635 -0.0241908 22.8495 1.88117L21.5445 3.18027C17.1075 7.59724 11.1915 10.2821 4.92749 10.8017C2.23049 10.9749 0.229492 13.2267 0.229492 15.9115V23.4463C0.229492 40.2481 9.27749 55.7508 23.9805 63.9785C24.7635 64.4115 25.6335 64.5847 26.5035 64.5847C26.9385 64.5847 27.3735 64.4981 27.7215 64.4115V63.0258C27.7215 59.5615 29.9835 56.6169 33.1155 55.491V53.2392H33.0285ZM25.8945 40.5079C25.2855 41.1142 24.4155 41.5472 23.5455 41.5472C22.6755 41.5472 21.7185 41.1142 21.1095 40.5079L14.6715 33.5794C13.4535 32.2803 13.5405 30.2017 14.8455 28.9892C16.1505 27.7767 18.2385 27.8633 19.4565 29.1624L23.5455 33.5794L33.4635 22.9267C34.6815 21.6276 36.6825 21.541 38.0745 22.7535C39.3795 23.966 39.4665 26.0446 38.2485 27.3437L25.8945 40.5079Z"
                  fill="white"
                />
                <path
                  d="M60.4337 60.1675H58.0847V53.2389C58.0847 49.0818 54.6917 45.7041 50.5157 45.7041H45.6437C41.4677 45.7041 38.0747 49.0818 38.0747 53.2389V60.1675H35.7257C34.0727 60.1675 32.6807 61.5532 32.6807 63.1987V79.7407C32.6807 81.3862 34.0727 82.772 35.7257 82.772H60.4337C62.0867 82.772 63.4787 81.3862 63.4787 79.7407V63.1121C63.4787 61.4666 62.0867 60.1675 60.4337 60.1675ZM49.5587 71.6862L50.6027 75.7568C50.6897 76.0166 50.6027 76.2764 50.4287 76.5362C50.2547 76.7961 49.9937 76.8827 49.7327 76.8827H46.3397C46.0787 76.8827 45.8177 76.7961 45.6437 76.5362C45.4697 76.2764 45.3827 76.0166 45.4697 75.7568L46.5137 71.6862C45.5567 71.1666 45.0347 70.1273 45.0347 69.088C45.0347 67.4425 46.4267 66.0568 48.0797 66.0568C49.7327 66.0568 51.1247 67.4425 51.1247 69.088C51.1247 70.1273 50.5157 71.08 49.5587 71.6862ZM52.6907 60.1675H43.4687V53.2389C43.4687 52.0264 44.4257 51.0737 45.6437 51.0737H50.5157C51.7337 51.0737 52.6907 52.0264 52.6907 53.2389V60.1675Z"
                  fill="white"
                />
              </svg>

              <h4 className="text-white text-xl font-semibold mt-4">
                Transparency and Security:
              </h4>
              <p className=" text-white font-light   ">
                Invest with confidence knowing that transparency and security
                are at the core of our operations. We keep you informed every
                step of the way, ensuring a secure and trustworthy investment
                environment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
