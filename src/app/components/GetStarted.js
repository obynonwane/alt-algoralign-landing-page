"use client";
import Link from "next/link";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BiSolidChevronDown } from "react-icons/bi";
import { toast } from "react-toastify";
import * as yup from "yup";
import { AiFillCheckCircle } from "react-icons/ai";
import axios from "axios";
import Image from "next/image";
import logo from "../../images/algoralign_liquidity_solution_logo.svg";

function GetStarted() {
  const [isShowSentSuccessfullyMessage, setIsShowSentSuccessfullyMessage] =
    useState(false);
  // to check if form is being submitted
  const [isLoading, setIsLoading] = useState(false);

  // const monthlyProcessingVolumes = [
  //   { value: "Under $20,000" },
  //   { value: "$20,000 - $100,000" },
  //   { value: "$100,000 - $1,000,000" },
  //   { value: "Above $1,000,000" },
  // ];
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [corporateEmail, setCorporateEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [monthlyProcessingVolume, setMonthlyProcessingVolume] = useState("");
  // const [selectedMonthlyProcessingVolume, setSelectedMonthlyProcessingVolume] =
  //   useState(monthlyProcessingVolumes[0]);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    companyName: yup.string().required("Company Name is required"),
    corporateEmail: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    message: yup.string().required("Message is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    // init loading state
    setIsLoading(true);
    const formData = {
      firstName,
      lastName,
      companyName,
      corporateEmail,
      phoneNumber,
      message,
    };
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // If validation passes, continue with your form submission logic
      // console.log("Form is valid:", formData);
      // axios.defaults.withCredentials = true;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/demo-request`,
        {
          first_name: firstName,
          last_name: lastName,
          company_name: companyName,
          email: corporateEmail,
          phone: phoneNumber,
          // monthly_processing_volume: selectedMonthlyProcessingVolume.value,
          // monthly_processing_volume: selectedMonthlyProcessingVolume.value,
          message,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${_iddm_alm_tkn}`,
        //   },
        // }
      );
      // console.log(response.data);
      if (response.data.status_code === 200) {
        setIsShowSentSuccessfullyMessage(true);
        // toast.success("Sent Successfully", toastOptions);
      }
      // end loading state
      setIsLoading(false);
    } catch (errors) {
      // console.log({ errors });
      if (errors instanceof yup.ValidationError) {
        let validationErrors = {};
        const error = errors.inner[0];
        validationErrors[error.path] = error.message;

        // Display the first error
        toast.error(error.message, toastOptions);
        setIsLoading(false);

        // console.log("errors", errors);
      } else {
        // console.log("errors", errors.response.data);
        setIsLoading(false);
        // console.log(errors.response.data);
        toast.error(errors.response.data.message, toastOptions);
        // toast.error(
        //   "error proceeding, please reload and try again",
        //   toastOptions
        // );
      }
    }
  };
  return (
    <>
      {isShowSentSuccessfullyMessage ? (
        <section className="max-w-[500px] w-full mx-auto text-center ">
          <AiFillCheckCircle className="w-20 h-20 mx-auto mt-32 text-blue-600" />
          <h2 className="text-3xl  font-bold mb-2  text-center text-blue-950 ">
            Successful
          </h2>
          <p className="text-center mb-7">
            Thank you for requesting a demo of our product! We&apos;re thrilled
            that you&apos;re interested in experiencing what our solution can do
            for your business. Your request has been received, and we&apos;ll be
            in touch shortly to schedule the demo.
          </p>
          <Link
            href="/"
            onClick={() => setShow(!show)}
            className="mb-10 px-8 text-white hover:opacity-75 bg-blue-600 py-3 rounded"
          >
            Explore
          </Link>
        </section>
      ) : (
        <form
          className="flex flex-wrap max-w-[600px] mx-auto  mb-24 "
          onSubmit={handleSubmit}
        >
          {/* heading */}
          <div className="w-full">
            <div className="max-w-[600px] mx-auto ">
              <Link
                href="/"
                className=" w-48 mb-2  relative cursor-pointer block"
              >
                <Image src={logo} alt="algoralign logo" priority />
              </Link>
              <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-blue-950 max-w-[700px]md:m ax-w-[600px] mx-auto pt-16">
                Your First Step Towards Seamless Cross-Border Remittances
                Solutions.{" "}
              </h2>
            </div>
            <p className="text-gray-600 text-center font-light mb-5">
              Requesting a demo is the first step towards unlocking its full
              potential. Simply fill out the form below, and we&apos;ll be in
              touch to schedule a personalized demonstration.{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
              placeholder="First Name"
              onInput={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
              placeholder="Last Name"
              onInput={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="w-full  p-2">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Company Name
            </label>
            <input
              type="text"
              className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
              placeholder="Company Name"
              onInput={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="w-full  p-2">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
              placeholder=" Corporate Email"
              onInput={(e) => setCorporateEmail(e.target.value)}
            />
          </div>
          <div className="w-full  p-2">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
              placeholder=" Phone Number"
              onInput={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {/* <div className="w-full  p-2">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Daily Processing Volume in USD
            </label>
            <>
              <div className="">
                <Listbox
                  value={selectedMonthlyProcessingVolume}
                  onChange={setSelectedMonthlyProcessingVolume}
                >
                  <div className="relative mt-1 border rounded">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left -md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">
                        {selectedMonthlyProcessingVolume.value}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <BiSolidChevronDown
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base -lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {monthlyProcessingVolumes.map((person, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `relative cursor-pointer select-none p-2  ${
                                active
                                  ? "bg-blue-100 text-blue-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selectedMonthlyProcessingVolume }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selectedMonthlyProcessingVolume
                                      ? "font-medium"
                                      : "font-normal"
                                  }`}
                                >
                                  {person.value}
                                </span>
                                {selectedMonthlyProcessingVolume ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <BiSolidChevronDown
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </>
          </div> */}
          <div className="w-full  p-2">
            <label className="block text-gray-500 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              value={message}
              className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
              onChange={(e) => setMessage(e.target.value)}
              // rows={4} // Specify the number of visible rows
              // cols={50} // Specify the number of visible columns
            />
          </div>
          <button
            type="submit"
            className={` bg-blue-600 text-white w-full py-3 rounded mt-5 ${
              isLoading ? "animate-pulse cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      )}
    </>
  );
}

export default GetStarted;
