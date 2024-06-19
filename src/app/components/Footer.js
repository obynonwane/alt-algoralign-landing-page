"use client";

import React, { useState } from "react";
import Image from "next/image";
import lines from "../../images/lines.png";
import logo from "../../images/algoralign_liquidity_solution_logo.svg";
import ndic from "../../images/ndic.png";

import {
  FaPaperPlane,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInfoCircle,
} from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
function Footer() {
  const [email, setEmail] = useState(null);
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const serverUrl =
    process.env.NEXT_PUBLIC_EVIRONMENT === "production"
      ? "https://service.algoralign.com/api/v1/"
      : "https://staging.service.algoralign.com/api/v1/";
  const clientUrls = [
    "https://projects.algoralign.com/",
    "https://staging.projects.algoralign.com/",
  ];

  const projectclientUrl =
    process.env.NEXT_PUBLIC_EVIRONMENT === "production"
      ? clientUrls[0]
      : clientUrls[1];
  const handleWaitlist = async (e) => {
    e.preventDefault();

    if (isLoading || email.length < 3) {
      return;
    }
    setIsLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    };
    fetch(`${serverUrl}waitlist/create`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 200) {
          setSuccess(data.message);
          setIsLoading(false);

          //   reset state
          setTimeout(() => {
            setSuccess(null);
            setErr(null);
            setEmail("");
          }, 3000);
        }
      })
      .catch((error) => {
        setErr("Error joining waitlist");
        //   reset state
        setTimeout(() => {
          setSuccess(null);
          setErr(null);
          setEmail("");
        }, 3000);
      });
  };

  return (
    <>
      {" "}
      <footer className="mt-5">
        <div className="max-w-[1200]   px-5"></div>

        <section className="py-5 px-5  flex flex-wrap justify-between items-center max-w-[1200px] mx-auto font-light">
          {/* <Image
              width="200"
              src={logo}
              className="mb-3"
              alt="algoralign logo"
              priority
            /> */}
          {/* <div className="text-center w-fit md:mx-0 mx-auto  ">
            <Image
              width="180"
              className="mx-auto"
              src={ndic}
              alt="ndic logo"
              priority
            />
          </div> */}
          <div className="ml-md-auto flex  flex-wrap items-center w-full md:w-fit justify-center mt-3 md:mt-0 gap-y-2 gap-x-3 md:gap-y-0">
            {/* <a className="hover:text-blue-600" href="#">
              {" "}
              Donors
            </a> */}

            <Link href="/privacy-policy" className="hover:text-blue-600">
              {" "}
              Privacy & Policy{" "}
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-600">
              {" "}
              TOS{" "}
            </Link>
          </div>
          <div className="md:w-auto w-full justify-center my-5 md:my-0 flex items-center gap-x-4 ">
            <a href="https://www.linkedin.com/company/algoralign/about/">
              <FaLinkedin className="text-xl hover:text-blue-600 text-gray-500" />
            </a>
            <a
              href="https://twitter.com/algoralign"
              className="text-2xl -mt-[2.5px] hover:text-blue-600 text-gray-500"
            >
              &#120143;
            </a>
            {/* <a href="">
              <FaFacebook className="text-xl hover:text-blue-600 text-gray-500" />
            </a> */}
          </div>
          <div className="text-center mx-auto md:mx-0   md:text-left w-full md:w-fit ">
            {process.env.NEXT_PUBLIC_EVIRONMENT} © {new Date().getFullYear()}{" "}
            Algoralign. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
