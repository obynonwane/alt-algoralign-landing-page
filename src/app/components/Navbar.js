"use client";

import { Fragment, useEffect, useRef, useState } from "react";
// import logo from "../../images/logo.png";
import logo from "../../images/algoralign_liquidity_solution_logo.svg";
import Image from "next/image";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
// import { useRouter } from "next/router";

import { Menu, Transition } from "@headlessui/react";
import { BiSolidChevronDown } from "react-icons/bi";

function Navbar() {
  const [isSidebar, setIsSidebar] = useState(false);
  // const router = useRouter();

  // const clientUrls0 = [
  //   "https://pos.liquidity.algoralign.com/auth",
  //   "https://staging.projects.algoralign.com/",
  // ];

  // const clientUrls1 = [
  //   "",
  //   "https://staging.projects.algoralign.com/",
  // ];

  // const projectclientUrl =
  //   process.env.NEXT_PUBLIC_EVIRONMENT == "production"
  //     ? clientUrls[0]
  //     : clientUrls[1];

  return (
    <section className="  bg-white w-full text-zinc-600 fixed top-0 -blur-lg  z-50">
      <nav className=" max-w-6xl mx-auto flex items-center  justify-between px-6 lg:py-3 py-5 md:px-5 lg:px-0 ">
        <Link href="/" className=" w-32 md:w-40 relative cursor-pointer block">
          {/* <img src="/algoralign_liquidity_solution_logo.svg" alt="logo" /> */}
          <Image src={logo} alt="algoralign logo" priority />
        </Link>
        <div
          className={`flex md:p-0 p-5 md:pt-0 pt-20 md:flex-row  md:-left-[0vw] transition-all ease-linear duration-200 flex-col md:relative fixed md:h-fit h-screen md:bg-transparent bg-white inset-0 text-sm ${
            isSidebar ? "-left-[0vw]" : "-left-[100vw] "
          }  md:w-fit w-full `}
        >
          <Link
            className="md:hover:bg-transparent hover:bg-zinc-50 transition-all ease-linear duration-100  hover:text-blue-600 flex flex-col   px-4 py-4 rounded md:py-2  md:my-1 font-semibold"
            onClick={() => setIsSidebar(false)}
            // href="/#features"
            href="/"
          >
            Home
          </Link>
          <div
            className="md:hover:bg-transparent relative hover:bg-zinc-50 transition-all ease-linear duration-100   flex flex-col   pt-1 font-semibold "
            // onClick={() => setIsSidebar(false)}
            // href="/#features"
          >
            <Menu>
              <Menu.Button className="text-left justify-between  px-4 py-4 md:py-2 rounded flex items-center">
                Solutions <BiSolidChevronDown className="md:ml-1 " />
              </Menu.Button>
              <Menu.Items className="flex border flex-col md:absolute md:bg-white md:-left-10 md:min-w-[280px] md:-bottom-[250px] md:rounded ">
                <Menu.Item className="border-a">
                  {({ active }) => (
                    <Link
                      className={`md:pt-3 py-0 pb-3 flex items-center gap-x-2  px-3 md:mt-0 mt-3 ${
                        active && " text-blue-600"
                      }`}
                      href="/solutions/project-funding"
                    >
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.729004"
                          y="0.862305"
                          width="36.627"
                          height="36.627"
                          rx="5"
                          fill="#7913E5"
                          fillOpacity="0.13"
                        />
                        <path
                          d="M18.5478 25.9029L17.4776 27.7566C17.3881 27.9116 17.1882 27.9651 17.0332 27.8757C16.8783 27.7862 16.8247 27.5863 16.9141 27.4313L17.9844 25.5776L17.2914 25.1774L16.2211 27.0312C16.1317 27.1861 15.9317 27.2397 15.7767 27.1503C15.6218 27.0608 15.5682 26.8608 15.6577 26.7059L16.7279 24.8521L15.0094 23.86L12.7762 27.728L16.2836 29.753C16.8668 30.0897 17.6194 29.8857 17.9577 29.2997L19.5761 26.4966L18.5478 25.9029ZM10.6668 25.0902C10.3284 25.6762 10.528 26.43 11.114 26.7684L11.5676 27.0302L13.8008 23.1622L12.2852 22.2871L10.6668 25.0902Z"
                          fill="#7913E5"
                        />
                        <path
                          d="M28.4708 12.5621L19.9092 7.61905C19.3233 7.28074 18.5723 7.48197 18.234 8.06794L11.5294 19.6805C11.1911 20.2665 11.3907 21.0203 11.9767 21.3586L20.5382 26.3016C21.1242 26.6399 21.8768 26.4359 22.2152 25.8499L28.9197 14.2373C29.258 13.6514 29.0568 12.9004 28.4708 12.5621ZM15.4345 20.929C15.3447 21.0846 15.1458 21.1379 14.9902 21.0481L13.834 20.3806C13.6784 20.2908 13.6251 20.0918 13.7149 19.9362L14.2088 19.0808C14.2986 18.9252 14.4976 18.8719 14.6532 18.9617L15.8094 19.6292C15.965 19.719 16.0183 19.918 15.9284 20.0736L15.4345 20.929ZM16.8238 18.5227C16.734 18.6783 16.5351 18.7316 16.3795 18.6418L15.2233 17.9742C15.0677 17.8844 15.0144 17.6854 15.1042 17.5299L15.5981 16.6744C15.688 16.5188 15.8869 16.4655 16.0425 16.5553L17.1987 17.2229C17.3543 17.3127 17.4076 17.5116 17.3177 17.6672L16.8238 18.5227ZM18.2132 16.1163C18.1233 16.2719 17.9244 16.3252 17.7688 16.2354L16.6126 15.5679C16.457 15.478 16.4037 15.2791 16.4936 15.1235L16.9874 14.2681C17.0773 14.1125 17.2762 14.0591 17.4318 14.149L18.588 14.8165C18.7436 14.9063 18.7969 15.1053 18.7071 15.2609L18.2132 16.1163ZM18.1677 22.507C18.0778 22.6626 17.8789 22.7159 17.7233 22.6261L16.5671 21.9586C16.4116 21.8687 16.3582 21.6698 16.4481 21.5142L16.942 20.6587C17.0318 20.5032 17.2308 20.4498 17.3863 20.5397L18.5425 21.2072C18.6981 21.297 18.7514 21.496 18.6616 21.6516L18.1677 22.507ZM19.557 20.1007C19.4672 20.2562 19.2682 20.3096 19.1126 20.2197L17.9564 19.5522C17.8009 19.4624 17.7475 19.2634 17.8374 19.1078L18.3313 18.2524C18.4211 18.0968 18.6201 18.0435 18.7756 18.1333L19.9318 18.8008C20.0874 18.8907 20.1407 19.0896 20.0509 19.2452L19.557 20.1007ZM20.9463 17.6943C20.8565 17.8499 20.6575 17.9032 20.5019 17.8134L19.3458 17.1459C19.1902 17.056 19.1369 16.8571 19.2267 16.7015L19.7206 15.846C19.8104 15.6904 20.0094 15.6371 20.165 15.727L21.3211 16.3945C21.4767 16.4843 21.53 16.6833 21.4402 16.8388L20.9463 17.6943ZM20.9008 24.085C20.811 24.2406 20.612 24.2939 20.4565 24.2041L19.3003 23.5366C19.1447 23.4467 19.0914 23.2478 19.1812 23.0922L19.6751 22.2367C19.7649 22.0811 19.9639 22.0278 20.1195 22.1177L21.2757 22.7852C21.4312 22.875 21.4846 23.074 21.3947 23.2295L20.9008 24.085ZM22.2901 21.6787C22.2003 21.8342 22.0013 21.8875 21.8458 21.7977L20.6896 21.1302C20.534 21.0404 20.4807 20.8414 20.5705 20.6858L21.0644 19.8304C21.1543 19.6748 21.3532 19.6215 21.5088 19.7113L22.665 20.3788C22.8205 20.4687 22.8739 20.6676 22.784 20.8232L22.2901 21.6787ZM23.6795 19.2723C23.5896 19.4279 23.3907 19.4812 23.2351 19.3914L22.0789 18.7238C21.9233 18.634 21.87 18.4351 21.9598 18.2795L22.4537 17.424C22.5436 17.2684 22.7425 17.2151 22.8981 17.3049L24.0543 17.9725C24.2099 18.0623 24.2632 18.2612 24.1734 18.4168L23.6795 19.2723ZM25.2773 16.8944C25.1874 17.05 24.9885 17.1033 24.8329 17.0134L17.873 12.9952C17.7174 12.9053 17.6641 12.7064 17.754 12.5508L19.3789 9.73632C19.4687 9.58072 19.6677 9.52741 19.8233 9.61725L26.7831 13.6355C26.9387 13.7253 26.992 13.9243 26.9022 14.0799L25.2773 16.8944Z"
                          fill="#7913E5"
                        />
                      </svg>
                      Project Funding
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item className="border-a">
                  {({ active }) => (
                    <Link
                      className={`md:pt-3 py-0 pb-3 flex items-center gap-x-2  px-3 md:mt-0 mt-3 ${
                        active && " text-blue-600"
                      }`}
                      href="/solutions/liquidity-market-making"
                    >
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.729004"
                          y="0.510742"
                          width="36.627"
                          height="36.627"
                          rx="5"
                          fill="#22C55E"
                          fillOpacity="0.18"
                        />
                        <path
                          d="M12.4976 23.1768H10.5116C10.2657 23.1768 10.0576 23.3848 10.0576 23.6307V27.1299C10.0576 27.3758 10.2657 27.5839 10.5116 27.5839H12.4976C12.7435 27.5839 12.9516 27.3758 12.9516 27.1299V23.6307C12.9705 23.3848 12.7624 23.1768 12.4976 23.1768Z"
                          fill="#00CE4C"
                        />
                        <path
                          d="M17.0181 19.9424H15.0321C14.7862 19.9424 14.5781 20.1504 14.5781 20.3963V27.1111C14.5781 27.3569 14.7862 27.565 15.0321 27.565H17.0181C17.264 27.565 17.4721 27.3569 17.4721 27.1111V20.3963C17.4721 20.1504 17.2829 19.9424 17.0181 19.9424Z"
                          fill="#00CE4C"
                        />
                        <path
                          d="M21.5391 16.7266H19.5531C19.3072 16.7266 19.0991 16.9346 19.0991 17.1805V27.1296C19.0991 27.3755 19.3072 27.5836 19.5531 27.5836H21.5391C21.785 27.5836 21.9931 27.3755 21.9931 27.1296V17.1805C21.9931 16.9346 21.785 16.7266 21.5391 16.7266Z"
                          fill="#00CE4C"
                        />
                        <path
                          d="M27.913 13.1901L25.4163 10.2205C25.2271 10.0124 24.9056 10.0124 24.7164 10.2205L22.2197 13.1901C21.9738 13.4927 22.1818 13.9467 22.5601 13.9467H23.6194V27.1302C23.6194 27.3761 23.8274 27.5842 24.0733 27.5842H26.0594C26.3053 27.5842 26.5133 27.3761 26.5133 27.1302V13.9467H27.5725C27.9508 13.9467 28.1778 13.4927 27.913 13.1901Z"
                          fill="#00CE4C"
                        />
                      </svg>
                      Liquidity/Market Making{" "}
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item className="border-a">
                  {({ active }) => (
                    <Link
                      className={`md:pt-3 py-0 pb-3 flex items-center gap-x-2  px-3 md:mt-0 mt-3 ${
                        active && " text-blue-600"
                      }`}
                      href="#"
                    >
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.729004"
                          y="0.686523"
                          width="36.627"
                          height="36.627"
                          rx="5"
                          fill="#2563EB"
                          fillOpacity="0.12"
                        />
                        <path
                          d="M25.006 10.587L10.1342 19.4846C9.55339 19.8306 9.62719 20.6691 10.2047 20.922L13.6155 22.406L22.8338 13.981C23.0103 13.8179 23.2605 14.0675 23.1097 14.2572L15.3802 24.0232V26.7018C15.3802 27.487 16.2947 27.7965 16.7439 27.2275L18.7813 24.6554L22.7792 26.3923C23.2349 26.592 23.7547 26.2958 23.8381 25.7867L26.1483 11.4122C26.2574 10.7401 25.5611 10.2542 25.006 10.587Z"
                          fill="#2563EB"
                        />
                      </svg>
                      Decentralized Insurance (DeFi){" "}
                      <span className="ml-auto px-1 rounded-full bg-green-400 text-white text-xs">
                        Soon
                      </span>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item className="border-a">
                  {({ active }) => (
                    <Link
                      className={`md:pt-3 py-0 pb-3 flex items-center gap-x-2  px-3 md:mt-0 mt-3 ${
                        active && " text-blue-600"
                      }`}
                      href="#"
                    >
                      <svg
                        width="33"
                        height="32"
                        viewBox="0 0 38 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.729004"
                          y="0.334961"
                          width="36.627"
                          height="36.627"
                          rx="5"
                          fill="#FFF0F7"
                        />
                        <path
                          fill-rule="evenodd"
                          clipRule="evenodd"
                          d="M18.5683 12.799C18.5683 12.504 18.8064 12.2644 19.0996 12.2644C19.3928 12.2644 19.6309 12.504 19.6309 12.799V13.5525C20.1454 13.6594 20.6063 13.9173 20.965 14.2782C21.4431 14.7594 21.7397 15.4237 21.7397 16.1549V16.538C21.7397 16.8331 21.5016 17.0727 21.2084 17.0727C20.9153 17.0727 20.6772 16.8331 20.6772 16.538V16.1549C20.6772 15.7187 20.4996 15.3217 20.2133 15.0341C19.927 14.746 19.5325 14.5673 19.0996 14.5673C18.6667 14.5673 18.2717 14.746 17.9859 15.0341C17.6996 15.3222 17.522 15.7187 17.522 16.1549C17.522 16.3539 17.5565 16.5291 17.6273 16.6786C17.6967 16.8247 17.8044 16.9568 17.952 17.0727L20.8981 19.3855C21.177 19.6043 21.3855 19.8642 21.5262 20.1597C21.6694 20.4612 21.7397 20.7904 21.7397 21.1424C21.7397 21.8736 21.4426 22.5379 20.965 23.0191C20.6063 23.38 20.1454 23.6379 19.6309 23.7448V24.4982C19.6309 24.7933 19.3928 25.0329 19.0996 25.0329C18.8064 25.0329 18.5683 24.7933 18.5683 24.4982V23.7443C18.07 23.6403 17.6219 23.3943 17.2677 23.0498L17.2348 23.0191C16.7566 22.5379 16.4595 21.8736 16.4595 21.1424V20.6904C16.4595 20.3954 16.6976 20.1558 16.9908 20.1558C17.284 20.1558 17.522 20.3954 17.522 20.6904V21.1424C17.522 21.5785 17.6996 21.9755 17.9859 22.2631L18.009 22.2879C18.2919 22.5612 18.6766 22.7295 19.0996 22.7295C19.533 22.7295 19.927 22.5508 20.2133 22.2627C20.4996 21.9745 20.6772 21.578 20.6772 21.1419C20.6772 20.9429 20.6423 20.7676 20.5714 20.6186C20.5021 20.4726 20.3943 20.3404 20.2468 20.2246L17.3007 17.9118C17.0218 17.693 16.8132 17.4331 16.6725 17.1375C16.5294 16.8356 16.459 16.5068 16.459 16.1544C16.459 15.4232 16.7561 14.7589 17.2343 14.2777C17.5929 13.9168 18.0538 13.6589 18.5679 13.552V12.7985L18.5683 12.799ZM25.1295 12.5802C23.5864 11.0273 21.4544 10.0664 19.0996 10.0664C16.7448 10.0664 14.6124 11.0273 13.0692 12.5802C11.5261 14.1331 10.5713 16.2786 10.5713 18.6484C10.5713 21.0181 11.5261 23.1641 13.0692 24.7171C14.6124 26.27 16.7443 27.2309 19.0996 27.2309C21.4549 27.2309 23.5864 26.27 25.1295 24.7171C26.6726 23.1641 27.6274 21.0186 27.6274 18.6484C27.6274 16.2781 26.6726 14.1331 25.1295 12.5802Z"
                          fill="#FE61AC"
                        />
                      </svg>
                      Compliance{" "}
                      <span className="ml-auto px-1 rounded-full bg-green-400 text-white text-xs">
                        Soon
                      </span>
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <div className="md:hover:bg-transparent relative hover:bg-zinc-50 transition-all ease-linear duration-100   flex flex-col    ">
            <Menu>
              <Menu.Button className="text-left text-white  items-center md:hover:bg-transparent hover:border-blue-600  hover:border transition-all bg-blue-600 hover:bg-white  ease-linear duration-100  hover:text-blue-600 flex   px-4 py-4 rounded md:py-2  md:my-1 font-semibold">
                Login{" "}
                <div className="ml-auto flex items-center gap-x-2 md:hidden">
                  <CgMenu
                    onClick={() => setIsSidebar(true)}
                    className="ml-3 mr-1  cursor-pointer text-2xl"
                  />
                </div>
                <BiSolidChevronDown />
              </Menu.Button>
              <Menu.Items className="flex border flex-col md:absolute md:bg-white md:-left-10 md:min-w-[200px] md:px-2 md:-bottom-[105px] md:rounded ">
                <Menu.Item className="border-a">
                  {({ active }) => (
                    <Link
                      className={`py-3 px-3 md:mt-0 mt-3 ${
                        active && " text-blue-600"
                      }`}
                      href="https://project.algoralign.com/"
                    >
                      Project Funding
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`py-3 px-3  ${active && " text-blue-600"}`}
                      href="https://app.algoralign.com/"
                    >
                      Liquidity/Market Making
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>

          {/* <div className="md:hover:bg-transparent relative hover:bg-zinc-50 transition-all ease-linear duration-100   flex flex-col   pt-1 font-semibold">
            <Menu>
              <Menu.Button className="text-left justify-between bg-blue-600 text-white px-4 py-4 md:py-2 rounded flex items-center">
                Login <BiSolidChevronDown className="md:ml-1 " />
              </Menu.Button>
              <Menu.Items className="flex border flex-col md:absolute md:bg-white md:-left-10 md:min-w-[200px] md:-bottom-[135px] md:rounded ">
                <Menu.Item className="border-a">
                  {({ active }) => (
                    <a
                      className={`md:pt-3 py-0 pb-3 flex items-center gap-x-2  px-3 md:mt-0 mt-3 ${
                        active && " text-blue-600"
                      }`}
                      target="_blank"
                      href="https://client.liquidity.algoralign.com/auth"
                    >
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.729004"
                          y="0.862305"
                          width="36.627"
                          height="36.627"
                          rx="5"
                          fill="#7913E5"
                          fillOpacity="0.13"
                        />
                        <path
                          d="M18.5478 25.9029L17.4776 27.7566C17.3881 27.9116 17.1882 27.9651 17.0332 27.8757C16.8783 27.7862 16.8247 27.5863 16.9141 27.4313L17.9844 25.5776L17.2914 25.1774L16.2211 27.0312C16.1317 27.1861 15.9317 27.2397 15.7767 27.1503C15.6218 27.0608 15.5682 26.8608 15.6577 26.7059L16.7279 24.8521L15.0094 23.86L12.7762 27.728L16.2836 29.753C16.8668 30.0897 17.6194 29.8857 17.9577 29.2997L19.5761 26.4966L18.5478 25.9029ZM10.6668 25.0902C10.3284 25.6762 10.528 26.43 11.114 26.7684L11.5676 27.0302L13.8008 23.1622L12.2852 22.2871L10.6668 25.0902Z"
                          fill="#7913E5"
                        />
                        <path
                          d="M28.4708 12.5621L19.9092 7.61905C19.3233 7.28074 18.5723 7.48197 18.234 8.06794L11.5294 19.6805C11.1911 20.2665 11.3907 21.0203 11.9767 21.3586L20.5382 26.3016C21.1242 26.6399 21.8768 26.4359 22.2152 25.8499L28.9197 14.2373C29.258 13.6514 29.0568 12.9004 28.4708 12.5621ZM15.4345 20.929C15.3447 21.0846 15.1458 21.1379 14.9902 21.0481L13.834 20.3806C13.6784 20.2908 13.6251 20.0918 13.7149 19.9362L14.2088 19.0808C14.2986 18.9252 14.4976 18.8719 14.6532 18.9617L15.8094 19.6292C15.965 19.719 16.0183 19.918 15.9284 20.0736L15.4345 20.929ZM16.8238 18.5227C16.734 18.6783 16.5351 18.7316 16.3795 18.6418L15.2233 17.9742C15.0677 17.8844 15.0144 17.6854 15.1042 17.5299L15.5981 16.6744C15.688 16.5188 15.8869 16.4655 16.0425 16.5553L17.1987 17.2229C17.3543 17.3127 17.4076 17.5116 17.3177 17.6672L16.8238 18.5227ZM18.2132 16.1163C18.1233 16.2719 17.9244 16.3252 17.7688 16.2354L16.6126 15.5679C16.457 15.478 16.4037 15.2791 16.4936 15.1235L16.9874 14.2681C17.0773 14.1125 17.2762 14.0591 17.4318 14.149L18.588 14.8165C18.7436 14.9063 18.7969 15.1053 18.7071 15.2609L18.2132 16.1163ZM18.1677 22.507C18.0778 22.6626 17.8789 22.7159 17.7233 22.6261L16.5671 21.9586C16.4116 21.8687 16.3582 21.6698 16.4481 21.5142L16.942 20.6587C17.0318 20.5032 17.2308 20.4498 17.3863 20.5397L18.5425 21.2072C18.6981 21.297 18.7514 21.496 18.6616 21.6516L18.1677 22.507ZM19.557 20.1007C19.4672 20.2562 19.2682 20.3096 19.1126 20.2197L17.9564 19.5522C17.8009 19.4624 17.7475 19.2634 17.8374 19.1078L18.3313 18.2524C18.4211 18.0968 18.6201 18.0435 18.7756 18.1333L19.9318 18.8008C20.0874 18.8907 20.1407 19.0896 20.0509 19.2452L19.557 20.1007ZM20.9463 17.6943C20.8565 17.8499 20.6575 17.9032 20.5019 17.8134L19.3458 17.1459C19.1902 17.056 19.1369 16.8571 19.2267 16.7015L19.7206 15.846C19.8104 15.6904 20.0094 15.6371 20.165 15.727L21.3211 16.3945C21.4767 16.4843 21.53 16.6833 21.4402 16.8388L20.9463 17.6943ZM20.9008 24.085C20.811 24.2406 20.612 24.2939 20.4565 24.2041L19.3003 23.5366C19.1447 23.4467 19.0914 23.2478 19.1812 23.0922L19.6751 22.2367C19.7649 22.0811 19.9639 22.0278 20.1195 22.1177L21.2757 22.7852C21.4312 22.875 21.4846 23.074 21.3947 23.2295L20.9008 24.085ZM22.2901 21.6787C22.2003 21.8342 22.0013 21.8875 21.8458 21.7977L20.6896 21.1302C20.534 21.0404 20.4807 20.8414 20.5705 20.6858L21.0644 19.8304C21.1543 19.6748 21.3532 19.6215 21.5088 19.7113L22.665 20.3788C22.8205 20.4687 22.8739 20.6676 22.784 20.8232L22.2901 21.6787ZM23.6795 19.2723C23.5896 19.4279 23.3907 19.4812 23.2351 19.3914L22.0789 18.7238C21.9233 18.634 21.87 18.4351 21.9598 18.2795L22.4537 17.424C22.5436 17.2684 22.7425 17.2151 22.8981 17.3049L24.0543 17.9725C24.2099 18.0623 24.2632 18.2612 24.1734 18.4168L23.6795 19.2723ZM25.2773 16.8944C25.1874 17.05 24.9885 17.1033 24.8329 17.0134L17.873 12.9952C17.7174 12.9053 17.6641 12.7064 17.754 12.5508L19.3789 9.73632C19.4687 9.58072 19.6677 9.52741 19.8233 9.61725L26.7831 13.6355C26.9387 13.7253 26.992 13.9243 26.9022 14.0799L25.2773 16.8944Z"
                          fill="#7913E5"
                        />
                      </svg>
                      Client
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="border-a">
                  {({ active }) => (
                    <a
                      className={`md:pt-3 py-0 pb-3 flex items-center gap-x-2  px-3 md:mt-0 mt-3 ${
                        active && " text-blue-600"
                      }`}
                      target="_blank"
                      href="https://pos.liquidity.algoralign.com/auth"
                    >
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.729004"
                          y="0.510742"
                          width="36.627"
                          height="36.627"
                          rx="5"
                          fill="#22C55E"
                          fillOpacity="0.18"
                        />
                        <path
                          d="M12.4976 23.1768H10.5116C10.2657 23.1768 10.0576 23.3848 10.0576 23.6307V27.1299C10.0576 27.3758 10.2657 27.5839 10.5116 27.5839H12.4976C12.7435 27.5839 12.9516 27.3758 12.9516 27.1299V23.6307C12.9705 23.3848 12.7624 23.1768 12.4976 23.1768Z"
                          fill="#00CE4C"
                        />
                        <path
                          d="M17.0181 19.9424H15.0321C14.7862 19.9424 14.5781 20.1504 14.5781 20.3963V27.1111C14.5781 27.3569 14.7862 27.565 15.0321 27.565H17.0181C17.264 27.565 17.4721 27.3569 17.4721 27.1111V20.3963C17.4721 20.1504 17.2829 19.9424 17.0181 19.9424Z"
                          fill="#00CE4C"
                        />
                        <path
                          d="M21.5391 16.7266H19.5531C19.3072 16.7266 19.0991 16.9346 19.0991 17.1805V27.1296C19.0991 27.3755 19.3072 27.5836 19.5531 27.5836H21.5391C21.785 27.5836 21.9931 27.3755 21.9931 27.1296V17.1805C21.9931 16.9346 21.785 16.7266 21.5391 16.7266Z"
                          fill="#00CE4C"
                        />
                        <path
                          d="M27.913 13.1901L25.4163 10.2205C25.2271 10.0124 24.9056 10.0124 24.7164 10.2205L22.2197 13.1901C21.9738 13.4927 22.1818 13.9467 22.5601 13.9467H23.6194V27.1302C23.6194 27.3761 23.8274 27.5842 24.0733 27.5842H26.0594C26.3053 27.5842 26.5133 27.3761 26.5133 27.1302V13.9467H27.5725C27.9508 13.9467 28.1778 13.4927 27.913 13.1901Z"
                          fill="#00CE4C"
                        />
                      </svg>
                      Investify
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div> */}
          {/* 
          <Link
            className="transition-all ease-linear duration-100 bg-blue-600 text-white hover:opacity-75 flex flex-col    px-4 py-4 rounded md:py-2 my-3 md:my-1 font-semibold"
            onClick={() => setIsSidebar(false)}
            href={"/get-started"}
          >
            Request Demo
          </Link>
*/}
          {/* <a
            className="md:hover:bg-transparent hover:border-blue-600  hover:border transition-all bg-blue-600 hover:bg-white text-white ease-linear duration-100  hover:text-blue-600 flex flex-col   px-4 py-4 rounded md:py-2  md:my-1 font-semibold"
            // onClick={() => setIsSidebar(false)}
            href="https://app.algoralign.com/"
          >
            Login
          </a> */}
          {/* close mobile menu button */}
          <MdOutlineClose
            className="cursor-pointer text-3xl  right-10 top-10 absolute md:hidden "
            onClick={() => setIsSidebar(false)}
          />
        </div>{" "}
        {/* open mobile menu button */}
        <div className="ml-auto flex items-center gap-x-2 md:hidden">
          <CgMenu
            onClick={() => setIsSidebar(true)}
            className="ml-3 mr-1  cursor-pointer text-2xl"
          />
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
