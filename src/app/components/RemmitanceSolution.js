"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import hicon1 from "../../images/hicon (1).svg";
import hicon2 from "../../images/hicon (2).svg";
import hicon3 from "../../images/hicon (3).svg";
import right from "../../images/Group 2331.svg";
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

export default function RemmitanceSolution() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen --font-clash flex-col items-center justify-between lg:pt-28 pt-24 pb-10   ">
        <section className="max-w-[1300px] flex items-center flex-wrap p-6">
          <div className="w-full md:w-1/2 md:p-16">
            <span className="md:mx-0 mx-auto px-2 py-1 mb-3 block w-fit rounded-full bg-green-600 text-white text-sm ">
              Coming Soon
            </span>
            <h2 className=" text-4xl  font-semibold mb-4 md:text-left text-center text-blue-950">
              Empowering Seamless Cross-Border Transfers
            </h2>
            <p className="text-gray-600 font-light mb-5 md:text-left text-center">
              We are reshaping the remittance landscape for enhanced efficiency
              and global financial accessibility
            </p>
            <div className="flex items-center pt-2 md:justify-start justify-center">
              <Link
                href="/get-started"
                className="mb-10  text-white hover:opacity-75 bg-blue-600 px-4 py-2 rounded"
              >
                Request A Demo
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
            <p className="text-center text-gray-600 font-light mb-5  ">
              Elevate your remittance or POS services with seamless cross-border
              transactions and local currency support{" "}
            </p>
          </div>

          <div className="grid grid-cols-12 gap-5 mt-10 mb-20">
            <div className="md:col-span-4 col-span-12 bg-zinc-100 p-5 rounded">
              <span className="p-5 text-2xl font-semibold mb-4 mt-3 bg-blue-100 w-12   h-12   rounded-lg flex items-center justify-center text-center text-blue-600">
                1
              </span>
              <h4 className="text-blue-600 text-xl font-semibold">
                Initiate Request
              </h4>
              <p className=" text-gray-600 font-light mb-5  ">
                Kick off the process by letting us know the amount and where you
                want it to go.
              </p>
            </div>

            <div className="md:col-span-4 col-span-12 bg-zinc-100 p-5 rounded">
              <span className="p-5 text-2xl font-semibold mb-4 mt-3 bg-blue-100 w-12   h-12   rounded-lg flex items-center justify-center text-center text-blue-600">
                2
              </span>
              <h4 className="text-blue-600 text-xl font-semibold">
                Send Us the Equivalent
              </h4>
              <p className=" text-gray-600 font-light mb-5  ">
                Seal the deal by supplying the equivalent amount in the local
                currency. This sets the wheels in motion for a smooth and
                efficient transaction.
              </p>
            </div>
            <div className="md:col-span-4 col-span-12 bg-zinc-100 p-5 rounded">
              <span className="p-5 text-2xl font-semibold mb-4 mt-3 bg-blue-100 w-12   h-12   rounded-lg flex items-center justify-center text-center text-blue-600">
                3
              </span>
              <h4 className="text-blue-600 text-xl font-semibold">
                Swift and Direct Delivery{" "}
              </h4>
              <p className=" text-gray-600 font-light mb-5  ">
                Experience swift and direct delivery of funds to the designated
                account, ensuring seamless access.
              </p>
            </div>
          </div>

          <div className="text-center max-w-lg mb-8 mt-16 mx-auto">
            <h4 className="text-blue-900 text-3xl font-semibold">
              Why Choose Us?{" "}
            </h4>
            <p className="text-center text-gray-600 font-light mb-5  ">
              Elevate your remittance or POS services with seamless cross-border
              transactions and local currency support
            </p>
          </div>
          <div className="grid grid-cols-12 gap-5 mt-10 mb-20">
            <div className="md:col-span-4 col-span-12 bg-blue-600 p-5 rounded">
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
                Global Reach, Local Touch
              </h4>
              <p className=" text-white font-light   ">
                Enjoy a global reach with a local touch, as we seamlessly
                navigate cross-border transactions with precision and
                understanding.
              </p>
            </div>

            <div className="md:col-span-4 col-span-12 bg-zinc-100 p-5 rounded max-w-[1100px] mx-auto">
              <svg
                className="fill-blue-600"
                width="80"
                height="83"
                viewBox="0 0 80 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M47.8107 20.2895C43.8719 20.2895 40.0215 21.4552 36.7465 23.6393C33.4714 25.8233 30.9189 28.9276 29.4115 32.5595C27.9042 36.1914 27.5098 40.1879 28.2783 44.0435C29.0467 47.8992 30.9434 51.4408 33.7286 54.2205C36.5138 57.0003 40.0623 58.8933 43.9255 59.6603C47.7886 60.4272 51.7929 60.0336 55.4319 58.5292C59.0709 57.0248 62.1812 54.4772 64.3695 51.2085C66.5578 47.9399 67.7258 44.097 67.7258 40.1658C67.7198 34.8962 65.6196 29.8441 61.8861 26.1178C58.1526 22.3916 53.0907 20.2956 47.8107 20.2895ZM47.8107 39.1653C49.2731 39.1647 50.6825 39.7116 51.7604 40.698C52.8383 41.6844 53.5061 43.0385 53.632 44.4927C53.7579 45.9468 53.3326 47.3951 52.4402 48.5514C51.5478 49.7077 50.2533 50.4878 48.8124 50.7375V54.6136C48.8162 54.7473 48.7931 54.8804 48.7444 55.0051C48.6957 55.1297 48.6225 55.2433 48.5291 55.3392C48.4356 55.4351 48.3239 55.5113 48.2005 55.5634C48.077 55.6154 47.9443 55.6423 47.8103 55.6423C47.6763 55.6423 47.5436 55.6154 47.4202 55.5634C47.2967 55.5113 47.185 55.4351 47.0916 55.3392C46.9981 55.2433 46.9249 55.1297 46.8762 55.0051C46.8276 54.8804 46.8044 54.7473 46.8082 54.6136V50.7375C45.4538 50.5017 44.226 49.7969 43.3406 48.7471C42.4553 47.6974 41.9689 46.3697 41.9671 44.9975C41.9633 44.8638 41.9865 44.7307 42.0351 44.6061C42.0838 44.4815 42.157 44.3679 42.2504 44.272C42.3439 44.1761 42.4556 44.0998 42.5791 44.0478C42.7025 43.9957 42.8352 43.9689 42.9692 43.9689C43.1032 43.9689 43.2359 43.9957 43.3593 44.0478C43.4828 44.0998 43.5945 44.1761 43.688 44.272C43.7814 44.3679 43.8546 44.4815 43.9033 44.6061C43.9519 44.7307 43.9751 44.8638 43.9713 44.9975C43.9712 45.7555 44.1962 46.4964 44.618 47.1267C45.0398 47.7569 45.6393 48.2482 46.3409 48.5383C47.0424 48.8285 47.8144 48.9045 48.5593 48.7567C49.3041 48.6089 49.9883 48.2441 50.5253 47.7082C51.0623 47.1723 51.4281 46.4895 51.5763 45.7462C51.7245 45.0028 51.6485 44.2323 51.3579 43.5321C51.0674 42.8319 50.5752 42.2333 49.9438 41.8123C49.3124 41.3912 48.5701 41.1664 47.8107 41.1664C46.3482 41.1672 44.9387 40.6204 43.8607 39.6341C42.7826 38.6477 42.1146 37.2936 41.9886 35.8394C41.8627 34.3852 42.2879 32.9368 43.1803 31.7804C44.0727 30.624 45.3673 29.8439 46.8082 29.5942V25.7181C46.8044 25.5844 46.8276 25.4513 46.8762 25.3266C46.9249 25.202 46.9981 25.0884 47.0916 24.9925C47.185 24.8966 47.2967 24.8204 47.4202 24.7683C47.5436 24.7163 47.6763 24.6894 47.8103 24.6894C47.9443 24.6894 48.077 24.7163 48.2005 24.7683C48.3239 24.8204 48.4356 24.8966 48.5291 24.9925C48.6225 25.0884 48.6957 25.202 48.7444 25.3266C48.7931 25.4513 48.8162 25.5844 48.8124 25.7181V29.5942C50.1668 29.83 51.3946 30.5348 52.28 31.5845C53.1654 32.6343 53.6517 33.962 53.6535 35.3342C53.6573 35.4679 53.6342 35.601 53.5855 35.7256C53.5368 35.8502 53.4636 35.9638 53.3702 36.0597C53.2768 36.1556 53.165 36.2319 53.0416 36.2839C52.9181 36.336 52.7855 36.3628 52.6514 36.3628C52.5174 36.3628 52.3848 36.336 52.2613 36.2839C52.1378 36.2319 52.0261 36.1556 51.9327 36.0597C51.8392 35.9638 51.766 35.8502 51.7174 35.7256C51.6687 35.601 51.6456 35.4679 51.6493 35.3342C51.6495 34.5762 51.4244 33.8352 51.0026 33.205C50.5808 32.5747 49.9812 32.0834 49.2796 31.7933C48.578 31.5032 47.8059 31.4272 47.0611 31.575C46.3162 31.7229 45.632 32.0878 45.0951 32.6238C44.5581 33.1597 44.1924 33.8426 44.0443 34.586C43.8961 35.3294 43.9722 36.0999 44.2629 36.8001C44.5536 37.5004 45.0458 38.0988 45.6774 38.5198C46.3089 38.9408 47.0513 39.1654 47.8107 39.1653ZM47.8107 12.3197H26.8931C26.3683 12.3301 25.8686 12.5455 25.5011 12.9196C25.1337 13.2937 24.9279 13.7966 24.9279 14.3205C24.9279 14.8443 25.1337 15.3473 25.5011 15.7214C25.8686 16.0954 26.3683 16.3108 26.8931 16.3212H33.3964C30.6678 17.9688 28.2409 20.0689 26.22 22.5311H6.61458C6.08981 22.5415 5.59005 22.7569 5.22261 23.1309C4.85518 23.505 4.64936 24.008 4.64936 24.5318C4.64936 25.0557 4.85518 25.5586 5.22261 25.9327C5.59005 26.3068 6.08981 26.5222 6.61458 26.5326H23.485C21.4711 30.104 20.2774 34.0774 19.9901 38.1655H7.61867C7.08712 38.1655 6.57733 38.3763 6.20147 38.7514C5.8256 39.1265 5.61444 39.6353 5.61444 40.1658C5.61444 40.6964 5.8256 41.2052 6.20147 41.5803C6.57733 41.9554 7.08712 42.1662 7.61867 42.1662H19.9901C20.319 46.8383 21.8306 51.3506 24.3833 55.2807H15.3172C15.054 55.2807 14.7934 55.3324 14.5502 55.4329C14.3071 55.5334 14.0861 55.6808 13.9 55.8665C13.7139 56.0523 13.5663 56.2728 13.4656 56.5155C13.3648 56.7582 13.313 57.0183 13.313 57.281C13.313 57.5437 13.3648 57.8038 13.4656 58.0465C13.5663 58.2892 13.7139 58.5097 13.9 58.6954C14.0861 58.8812 14.3071 59.0285 14.5502 59.129C14.7934 59.2296 15.054 59.2813 15.3172 59.2813H26.8931C27.0806 59.2783 27.2668 59.2488 27.4461 59.1938C29.1971 61.0621 31.1965 62.6819 33.3885 64.0081H21.5503C21.0256 64.0185 20.5258 64.2339 20.1584 64.608C19.7909 64.982 19.5851 65.485 19.5851 66.0089C19.5851 66.5327 19.7909 67.0357 20.1584 67.4097C20.5258 67.7838 21.0256 67.9992 21.5503 68.0096H47.7167C47.7483 68.0096 47.7791 68.0096 47.8099 68.0096C55.2096 68.0096 62.3062 65.0758 67.5385 59.8536C72.7709 54.6315 75.7104 47.5487 75.7104 40.1635C75.7104 32.7782 72.7709 25.6955 67.5385 20.4733C62.3062 15.2512 55.2096 12.3174 47.8099 12.3174L47.8107 12.3197ZM47.8107 62.0425C43.4755 62.0425 39.2376 60.7595 35.633 58.3556C32.0284 55.9518 29.2189 52.5351 27.5599 48.5377C25.9009 44.5402 25.4668 40.1416 26.3125 35.8979C27.1583 31.6543 29.2459 27.7562 32.3114 24.6967C35.3769 21.6372 39.2825 19.5537 43.5345 18.7095C47.7864 17.8654 52.1936 18.2987 56.1989 19.9545C60.2041 21.6102 63.6274 24.4142 66.036 28.0118C68.4445 31.6094 69.73 35.8391 69.73 40.1658C69.7236 45.9659 67.4121 51.5266 63.3029 55.6278C59.1936 59.7291 53.6221 62.036 47.8107 62.0425ZM16.6602 14.3209C16.6601 14.0581 16.7119 13.7979 16.8126 13.5551C16.9132 13.3123 17.0608 13.0917 17.247 12.9059C17.4331 12.7201 17.6541 12.5727 17.8973 12.4721C18.1405 12.3715 18.4012 12.3197 18.6645 12.3197H21.7881C22.3129 12.3301 22.8126 12.5455 23.1801 12.9196C23.5475 13.2937 23.7533 13.7966 23.7533 14.3205C23.7533 14.8443 23.5475 15.3473 23.1801 15.7214C22.8126 16.0954 22.3129 16.3108 21.7881 16.3212H18.6645C18.1329 16.3212 17.6231 16.1104 17.2472 15.7353C16.8714 15.3602 16.6602 14.8514 16.6602 14.3209ZM12.8911 68.0096C12.3664 67.9992 11.8666 67.7838 11.4992 67.4097C11.1317 67.0357 10.9259 66.5327 10.9259 66.0089C10.9259 65.485 11.1317 64.982 11.4992 64.608C11.8666 64.2339 12.3664 64.0185 12.8911 64.0081H15.3457C15.8704 64.0185 16.3702 64.2339 16.7376 64.608C17.1051 64.982 17.3109 65.485 17.3109 66.0089C17.3109 66.5327 17.1051 67.0357 16.7376 67.4097C16.3702 67.7838 15.8704 67.9992 15.3457 68.0096H12.8911ZM8.62513 59.2813H6.61458C6.08303 59.2813 5.57324 59.0706 5.19738 58.6954C4.82151 58.3203 4.61035 57.8115 4.61035 57.281C4.61035 56.7505 4.82151 56.2417 5.19738 55.8665C5.57324 55.4914 6.08303 55.2807 6.61458 55.2807H8.62276C8.88596 55.2807 9.14658 55.3324 9.38975 55.4329C9.63291 55.5334 9.85386 55.6808 10.04 55.8665C10.2261 56.0523 10.3737 56.2728 10.4744 56.5155C10.5752 56.7582 10.627 57.0183 10.627 57.281C10.627 57.5437 10.5752 57.8038 10.4744 58.0465C10.3737 58.2892 10.2261 58.5097 10.04 58.6954C9.85386 58.8812 9.63291 59.0285 9.38975 59.129C9.14658 59.2296 8.88596 59.2813 8.62276 59.2813H8.62513Z" />
              </svg>

              <h4 className="text-blue-600 text-xl mt-3 font-semibold">
                Seamless Transactions:
              </h4>
              <p className=" text-gray-600 font-light   ">
                Benefit from meticulously tailored funding strategies designed
                to address the specific challenges and opportunities of your
                Point of Sale business.
              </p>
            </div>
            <div className="md:col-span-4 col-span-12 bg-blue-600 p-5 rounded">
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
                Continuous Innovation
              </h4>
              <p className=" text-white font-light   ">
                Stay ahead with continuous innovation, as we strive to enhance
                our services, providing you with the latest advancements in the
                remittance landscape.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}