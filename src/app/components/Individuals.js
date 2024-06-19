/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BiSolidChevronDown } from "react-icons/bi";
import { toast } from "react-toastify";
import * as yup from "yup";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import { PiCaretLeftBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import logo from "../../images/algoralign_liquidity_solution_logo.svg";

import axios from "axios";
import { saveToLocalStorage, getFromLocalStorage } from "../../utility";

function Individuals({ userType, signupCode, userSubType }) {
  const router = useRouter();
  const user = getFromLocalStorage("_iddm_ls_lp_uu");

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

  const [isShowSentSuccessfullyMessage, setIsShowSentSuccessfullyMessage] =
    useState(false);
  // to check if form is being submitted
  const [isLoading, setIsLoading] = useState(false);
  // form steps
  const [step, setStep] = useState(1);

  //   STEP 1 FIELDS
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  //  STEP 3 FIELDS
  const [bvn, setBvn] = useState("");
  const [files, setFiles] = useState([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [image1, setImage1] = useState(null);

  const [image1UploadState, setImage1UploadState] = useState(null);
  // can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image2UploadState, setImage2UploadState] = useState(null);
  // can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
  const [image2Preview, setImage2Preview] = useState(null);
  //  STEP 4 FIELDS
  const [banks, setBanks] = useState(null);

  const [selectedBank, setSelectedBank] = useState(null);
  const [cooperative_member_check, setcooperative_member_check] =
    useState(false);
  const [confirm_account_check, setconfirm_account_check] = useState(false);
  const [tc_check, settc_check] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountFirstName, setAccountFirstName] = useState("");
  const [accountLastName, setAccountLastName] = useState("");

  const step1schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    emailAddress: yup
      .string()
      .email("Invalid email format")
      .required("Email Address is required"),

    phoneNumber: yup
      .string()
      // .matches(/^\d{11}$/, "Phone number must be 11 digits")
      .required("Phone Number is required"),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const step3schema = yup.object().shape({
    bvn: yup
      .string()
      .matches(/^\d{10}$/, "BVN must be 10 digits")
      .required("BVN is required"),
  });

  const step4schema = yup.object().shape({
    accountNumber: yup
      .string()
      .matches(/^\d{10}$/, "Account Number must be 10 digits")
      .required("Account Number is required"),
    accountFirstName: yup.string().required("Account First Name is required"),
    accountLastName: yup.string().required("Account Last Name is required"),
    bvn: yup.string().required("Bvn is required"),
  });

  const handleStep4 = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }
    if (!cooperative_member_check || !confirm_account_check) {
      toast.error("Kindly check required fields", toastOptions);
      return;
    }
    if (!tc_check) {
      toast.error("Kindly agree to terms and conditions", toastOptions);
      return;
    }

    // init loading state
    setIsLoading(true);
    const formData = {
      accountNumber,
      accountFirstName,
      accountLastName,
      bvn,
    };
    try {
      await step4schema.validate(formData, { abortEarly: false });
      // If validation passes, continue with your form submission logic, move to step 2

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}bank/verify-acount`,
        {
          first_name: accountFirstName,
          last_name: accountLastName,
          bank_account: accountNumber,
          bank_id: selectedBank.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
        // save bank info
      );
      console.log(response.data);

      const saveBankDetailsRes = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/submit-bank-detail`,
        {
          first_name: accountFirstName,
          last_name: accountLastName,
          bank_account: accountNumber,
          bank_id: selectedBank.id,
          bvn,
        },
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      // console.log(saveBankDetailsRes.data);
      setIsShowSentSuccessfullyMessage(true);
      sessionStorage.removeItem("_iddm_ls_lp_uu");

      // console.log("Form is valid:", formData);
    } catch (errors) {
      if (errors instanceof yup.ValidationError) {
        let validationErrors = {};
        const error = errors.inner[0];
        validationErrors[error.path] = error.message;

        // Display the first error
        toast.error(error.message, toastOptions);
        setIsLoading(false);

        // console.log("errors", errors);
      } else {
        console.log("errors", errors.response.data);
        // ! SAMPLE
        //   {
        //     "error": true,
        //     "status_code": 422,
        //     "message": "invalid account supplied"
        // }
        setIsLoading(false);

        toast.error(
          errors.response.data.message || "Check account details and try again",
          toastOptions
        );
      }
    }

    setIsLoading(false);
  };

  const handleStep3 = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }
    if (!image1 || !image2) {
      toast.error("Kindly upload the neccessary documents", toastOptions);
      return;
    }
    // confirm images have been uploaded
    if (image1UploadState !== "UPLOADED" || image2UploadState !== "UPLOADED") {
      toast.error("Kindly upload the neccessary documents", toastOptions);
      return;
    }

    setIsLoading(false);

    setStep(4);
  };
  const handleStep1 = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    // init loading state
    setIsLoading(true);
    const formData = {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      password,

      confirmPassword,
    };
    try {
      await step1schema.validate(formData, { abortEarly: false });
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/liquidity-signup-individual`,
        {
          first_name: firstName,
          last_name: lastName,
          password: password,
          confirm_password: confirmPassword,
          phone: phoneNumber,
          user_type: "liquidity_provider",
          user_sub_type: "individual",
          reg_id: signupCode,
        }
      );
      // console.log(response.data);
      saveToLocalStorage("_iddm_ls_lp_uu", response.data.data);
      setStep(2);
      console.log("Form is valid:", formData);
    } catch (errors) {
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
        // console.log(errors);
        // console.log(errors.response.data.message);
        // ! SAMPLE RESPONSE
        //   {
        //     "error": true,
        //     "status_code": 400,
        //     "message": "link no longer active"
        // }
        toast.error(
          errors.response.data.message || "error Ssigning up!",
          toastOptions
        );
      }
    }

    setIsLoading(false);
  };

  const handleImageChange = (event, type) => {
    const file = event.target.files[0];

    if (file && type === 1) {
      setImage1UploadState("LOADING");
      //! can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)

      // Update the state with the selected image file
      setImage1(file);

      // Display a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage1Preview(reader.result);
      };
      reader.readAsDataURL(file);

      //
      //
      //
      //  upload logic goes here
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", "identity_doc");

      // alert("sending");

      // Using Axios to send the image to your API
      axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_API}auth/upload-image`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((response) => {
          // console.log("API response:", response.data);
          setImage1UploadState("UPLOADED");
          //! can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
        })
        .catch((error) => {
          setImage1UploadState("FAILED");
          //! can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
          // console.error("Error uploading image:", error);
        });
      //
      //
    }
    if (file && type === 2) {
      // Update the state with the selected image file
      setImage2(file);
      setImage2UploadState("LOADING");
      //! can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)

      // Display a preview of the image
      // Display a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage2Preview(reader.result);
      };
      reader.readAsDataURL(file);

      //
      //
      //
      //  upload logic goes here
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", "utility_bill_doc");

      // alert("sending");

      // Using Axios to send the image to your API
      axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_API}auth/upload-image`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          }
        )
        .then((response) => {
          setImage2UploadState("UPLOADED");
          //! can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
        })
        .catch((error) => {
          setImage2UploadState("FAILED");
          //! can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
          console.error("Error uploading image:", error);
        });
    }
  };

  const removeImage = (index) => {
    if (index === 1) {
      setImage1(null);
      setImage1Preview(null);
    } else {
      setImage2(null);
      setImage2Preview(null);
    }
  };
  useEffect(() => {
    router.push("#top");
  }, [step, imagePreviewUrls, isShowSentSuccessfullyMessage]);

  useEffect(() => {
    if (step === 4) {
      axios
        .get(`${process.env.NEXT_PUBLIC_SERVER_API}auth/bank-list`)
        .then((response) => {
          console.log(response.data.data);

          // !SAMPLE RESPONSE
          //   {
          //     "error": false,
          //     "status_code": 200,
          //     "message": "banks retrieved succesfully",
          //     "data": [

          //         {
          //             "anchor_bank_id": "16891072299720-anc_bk",
          //             "code": "",
          //             "created_at": "2023-11-13T13:57:59.478076Z",
          //             "id": 443,
          //             "name": "CINTRUST MICROFINANCE BANK",
          //             "nip_code": "090480",
          //             "updated_at": "2023-11-13T13:57:59.478076Z"
          //         },
          //         {
          //             "anchor_bank_id": "16891072319611-anc_bk",
          //             "code": "",
          //             "created_at": "2023-11-13T13:57:59.478076Z",
          //             "id": 444,
          //             "name": "ILORA MICROFINANCE BANK",
          //             "nip_code": "090430",
          //             "updated_at": "2023-11-13T13:57:59.478076Z"
          //         }
          //     ]
          // }
          setSelectedBank(response.data.data[0]);
          setBanks(response.data.data);
        })
        .catch((error) => {
          console.error("Error getting banks:", error);
        });
    }
  }, [step]);
  return (
    <main className="mt-10 max-w-[1100px] mx-auto">
      {isShowSentSuccessfullyMessage ? (
        <section className="max-w-[500px] w-full mx-auto text-center mb-64">
          <AiFillCheckCircle className="w-32 h-32 mx-auto mt-32 text-blue-600" />
          <h2 className="text-3xl  font-bold mb-6  text-center text-blue-950 ">
            Signup Complete🎉
          </h2>
          <p className="mb-5">
            Great news! Your account has been successfully created. Our team is
            currently in the process of verifying the information you provided
            for security purposes.
          </p>

          {/* <a
            href="#"
            onClick={() => setShow(!show)}
            className="mb-10 px-8 text-white hover:opacity-75 bg-blue-600 py-3 rounded"
          >
            LOGIN
          </a> */}
        </section>
      ) : (
        <section className="">
          {/* {userTypeSubset} */}
          <div className="max-w-[600px] mx-auto ">
            <Link
              href="/"
              className=" w-36 mb-2  relative cursor-pointer block text-center"
            >
              <Image src={logo} alt="algoralign logo" priority />
            </Link>
            <h2 className="text-4xl sm:text-6xl capitalize    font-bold mb-2 text-blue-950">
              {/* {userType.replace(/_/g, " ")} */}
              Signup
            </h2>
          </div>
          {/* <h2 className="text-2xl capitalize text-center  md:text-3xl  font-bold mb-2 text-blue-950">
            {userType.replace(/_/g, " ")} Signup
          </h2> */}

          {/* STEP 1 */}
          {step === 1 && (
            <form
              className="flex flex-wrap max-w-[600px] mx-auto  mb-24 mt-10"
              onSubmit={handleStep1}
            >
              <div className="w-full"></div>
              <div className="w-full md:w-1/2 p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="First Name"
                  value={firstName}
                  onInput={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Last Name"
                  onInput={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  value={emailAddress}
                  type="text"
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Email Address"
                  onInput={(e) => setEmailAddress(e.target.value)}
                />
              </div>

              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder=" Phone Number"
                  onInput={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder=" Password"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder=" Password"
                  onInput={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className={` bg-blue-600 text-white w-fit py-2 px-4 ml-2  rounded mt-5 ${
                  isLoading ? "animate-pulse cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Loading..." : "Sign Up"}
              </button>
            </form>
          )}
          {/* STEP 2 */}
          {step === 2 && (
            <div className=" max-w-[700px] mx-auto px-5 py-8 rounded mt-10">
              <h3 className="text-xl  font-semibold">
                👋 We&apos;re excited to have you on board!
              </h3>
              <h5 className="font-semibold mt-5 text-zinc-600">
                Next Steps: Get Verified 🛂
              </h5>
              <p className="text-zinc-500">
                To ensure a secure and compliant experience, we require all our
                users to complete a KYC verification process.
              </p>
              <h5 className="font-semibold mt-7 text-zinc-600">
                What You&apos;ll Need 📄
              </h5>
              <p className="text-zinc-500">
                Before proceeding, please have images of the following documents
                ready:
              </p>
              {/* show documents list depending on th euser subset (individual/org) */}
              <ol className="text-zinc-500 list-decimal	pl-7 md:pl-10">
                <li>
                  A picture of a government issued document with a passport and
                  date of birth clearly visible.
                </li>
                <li>
                  A picture of your Utility Bill (electricity bill, waste
                  management bill etc){" "}
                </li>
                {/* <li>Your Bank Verification Number </li> */}
              </ol>

              <h5 className="text-zinc-500 mt-6  font-semibold">
                Click &apos;Proceed&apos; to start your verification process.{" "}
              </h5>
              <div className="flex w-full items-center">
                {/* <button
                  onClick={() => setStep(3)}
                  className={` border border-blue-600 text-blue-600 w-fit py-2 px-4 ml-2  rounded mt-5 `}
                >
                  Back
                </button>{" "} */}
                <button
                  onClick={() => setStep(3)}
                  className={` bg-blue-600 text-white w-fit py-2 px-4 ml-4  rounded mt-5 `}
                >
                  Proceed
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form
              className="flex flex-wrap max-w-[600px] mx-auto  mb-24 mt-10"
              onSubmit={handleStep3}
            >
              {" "}
              {/* step 3&4 indicator/toggle */}
              <div className="flex w-full mb-4">
                <div className="w-1/2 p-2 cursor-pointer">
                  <p className="h-1 rounded-sm bg-blue-600  w-full"></p>
                  <p className="font-light text-sm text-blue-600">
                    1. Identity Verification
                  </p>
                </div>
                <div className="w-1/2 p-2 cursor-pointer">
                  <p className="h-1 rounded-sm bg-blue-200 w-full"></p>
                  <p className="font-light text-sm ">2. Bank Details</p>
                </div>
              </div>
              <div className="w-full  p-2">
                <section className="grid grid-cols-12 w-full gap-y-6 gap-x-3">
                  <div className="col-span-12 ">
                    <label className="w-full text-gray-500 text-sm font-bold mb-2 flex items-center">
                      1. Identification Document
                      {image1 && (
                        <>
                          {image1UploadState === "LOADING" ? (
                            <span className="text-xs px-2 ml-2 border rounded-full bg-blue-100 text-blue-600">
                              Uploading...
                            </span>
                          ) : image1UploadState === "UPLOADED" ? (
                            <span className="text-xs px-2 py-1  ml-2 border rounded-full bg-green-100 text-green-600">
                              Uploaded Successfully ✔
                            </span>
                          ) : image1UploadState === "FAILED" ? (
                            <span className="text-xs px-2 py-1  ml-2 border rounded-full bg-red-100 text-red-600">
                              Upload Failed
                            </span>
                          ) : null}
                        </>
                      )}
                    </label>
                    <p className="mb-2 text-gray-500 text-sm">
                      Upload any Identification image with a passport and date
                      of birth clearly visible.
                    </p>
                    <div className=" overflow-hidden  p-2 mt-3 relative border-2 cursor-pointer text-gray-500   border-dashed rounded ">
                      {!image1Preview ? (
                        <div className="h-24 flex items-center justify-center flex-col ">
                          {" "}
                          <FaUpload className="text-2xl mb-2" />
                          <p className=" text-sm">
                            Drag files here or <u>Click here </u> to upload
                          </p>
                          <input
                            type="file"
                            className="absolute inset-0 opacity-0  cursor-pointer"
                            onChange={(e) => handleImageChange(e, 1)}
                            accept="image/*"
                          />
                        </div>
                      ) : (
                        <div className="h-48">
                          <img
                            className=" w-full  absolute inset-0"
                            src={image1Preview}
                            alt={`Image Preview`}
                          />
                          <span
                            onClick={() => removeImage(1)}
                            className="absolute top-3 right-3 w-5 h-5 rounded-full bg-zinc-100 p-1 flex items-center justify-center"
                          >
                            <AiOutlineClose className="text-xl" />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
                <div className="col-span-12 mt-5">
                  <label className="w-full text-gray-500 text-sm font-bold mb-2 flex items-center">
                    2. Utility Bill
                    {image2 && (
                      <>
                        {image2UploadState === "LOADING" ? (
                          <span className="text-xs px-2 ml-2 border rounded-full bg-blue-100 text-blue-600">
                            Uploading...
                          </span>
                        ) : image2UploadState === "UPLOADED" ? (
                          <span className="text-xs px-2 py-1  ml-2 border rounded-full bg-green-100 text-green-600">
                            Uploaded Successfully ✔
                          </span>
                        ) : image2UploadState === "FAILED" ? (
                          <span className="text-xs px-2 py-1  ml-2 border rounded-full bg-red-100 text-red-600">
                            Upload Failed
                          </span>
                        ) : null}
                      </>
                    )}
                  </label>
                  <p className="mb-2 text-gray-500 text-sm">
                    Upload an image of your electricity bill, waste management
                    bill ETC
                  </p>
                  <div className=" overflow-hidden  p-2 mt-3 relative border-2 cursor-pointer text-gray-500   border-dashed rounded ">
                    {!image2Preview ? (
                      <div className="h-24 flex items-center justify-center flex-col ">
                        {" "}
                        <FaUpload className="text-2xl mb-2" />
                        <p className=" text-sm">
                          Drag files here or <u>Click here </u> to upload
                        </p>
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0  cursor-pointer"
                          onChange={(e) => handleImageChange(e, 2)}
                          accept="image/*"
                        />
                      </div>
                    ) : (
                      <div className="h-48">
                        <img
                          className=" w-full  absolute inset-0"
                          src={image2Preview}
                          alt={`Image Preview`}
                        />
                        <span
                          onClick={() => removeImage(2)}
                          className="absolute top-3 right-3 w-5 h-5 rounded-full bg-zinc-100 p-1 flex items-center justify-center"
                        >
                          <AiOutlineClose className="text-xl" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center">
                <button
                  onClick={() => setStep(2)}
                  className={` border border-blue-600 text-blue-600 w-fit py-2 px-4 ml-2  rounded mt-5 `}
                >
                  Back
                </button>{" "}
                <button
                  disabled={isLoading}
                  type="submit"
                  className={` bg-blue-600 text-white w-fit py-2 px-4 ml-4  rounded mt-5 ${
                    isLoading ? "animate-pulse cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Loading..." : "Next"}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <form
              className="flex flex-wrap max-w-[600px] mx-auto  mb-24 mt-10"
              onSubmit={handleStep4}
            >
              {/* step 3&4 indicator/toggle */}

              <div className="flex w-full mb-4">
                <div
                  className="w-1/2 p-2 cursor-pointer"
                  onClick={() => setStep(3)}
                >
                  <p className="h-1 rounded-sm bg-blue-600  w-full"></p>
                  <p className="font-light text-sm text-blue-600">
                    1. Identity Verification
                  </p>
                </div>
                <div className="w-1/2 p-2 cursor-pointer">
                  <p className="h-1 rounded-sm bg-blue-600 w-full"></p>
                  <p className="font-light text-sm text-blue-600">
                    2. Bank Details
                  </p>
                </div>
              </div>
              <div className="w-full p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Account Number
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Account Number"
                  onInput={(e) => setAccountNumber(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2  p-2">
                <label className="flex flex-wrAP text-gray-500 text-sm font-bold mb-2">
                  First Name{" "}
                </label>
                <input
                  type="text"
                  value={accountFirstName}
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Account First Name"
                  onInput={(e) => setAccountFirstName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <label className="flex flex-wrAP text-gray-500 text-sm font-bold mb-2">
                  Last Name{" "}
                </label>
                <input
                  type="text"
                  value={accountLastName}
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Account Last Name"
                  onInput={(e) => setAccountLastName(e.target.value)}
                />
              </div>
              <div className="w-full  p-2">
                <label className="flex flex-wrAP text-gray-500 text-sm font-bold mb-2">
                  Bvn
                </label>
                <input
                  type="text"
                  value={bvn}
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="BVN"
                  onInput={(e) => setBvn(e.target.value)}
                />
              </div>
              <div className="w-full  p-2 ">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Bank Name
                </label>

                <div className="">
                  {selectedBank ? (
                    <Listbox value={selectedBank} onChange={setSelectedBank}>
                      <div className="relative mt-1 border rounded">
                        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-3 pl-3 pr-10 text-left -md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                          <span className="block truncate text-gray-500">
                            {selectedBank.name}
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
                            {banks.map((bank, bankIdx) => (
                              <Listbox.Option
                                key={bankIdx}
                                className={({ active }) =>
                                  `relative cursor-pointer select-none py-2 px-4  ${
                                    active
                                      ? "bg-blue-100 text-blue-900"
                                      : "text-gray-500"
                                  }`
                                }
                                value={bank}
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
                                      {bank.name}
                                    </span>
                                    {/* {selectedMonthlyProcessingVolume ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <BiSolidChevronDown
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null} */}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  ) : (
                    <input
                      type="text"
                      // value={accountLastName}
                      className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                      placeholder="Select Bank"
                      disabled
                    />
                  )}
                </div>
              </div>

              <div className="w-full p-2">
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input
                      type="checkbox"
                      checked={confirm_account_check}
                      onChange={() =>
                        setconfirm_account_check(!confirm_account_check)
                      }
                      class="h-4 w-4  rounded border-gray-300 text-white border checked:bg-indigo-600"
                    />
                    <span class="ml-2 text-gray-700 font-light text-sm">
                      I confirm that this account provided will be used to
                      withdraw both capital and interest earnings.
                    </span>
                  </label>
                </div>
                <div class="space-y-4 ">
                  <label class="flex items-start">
                    <input
                      type="checkbox"
                      checked={cooperative_member_check}
                      onChange={() =>
                        setcooperative_member_check(!cooperative_member_check)
                      }
                      class="h-4 w-4  rounded border-gray-300 text-white border checked:bg-indigo-600"
                    />
                    <span class="ml-2 text-gray-700 font-light text-sm">
                      I confirm that by submitting this form I agree to become a
                      member Algoralign&apos;s (liquidity solution) cooperative
                    </span>
                  </label>
                </div>
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input
                      type="checkbox"
                      checked={tc_check}
                      onChange={() => settc_check(!tc_check)}
                      class="h-4 w-4  rounded border-gray-300 text-white border checked:bg-indigo-600"
                    />
                    <span class="ml-2 text-gray-700 font-light text-sm">
                      I have read and agree to the{" "}
                      <Link href="#" className="text-blue-600">
                        Terms and Conditions
                      </Link>
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex w-full items-center">
                <button
                  onClick={() => setStep(3)}
                  className={` border border-blue-600 text-blue-600 w-fit py-2 px-4 ml-2  rounded mt-5 `}
                >
                  Back
                </button>{" "}
                <button
                  disabled={isLoading}
                  type="submit"
                  className={` bg-blue-600 text-white w-fit py-2 px-4 ml-4  rounded mt-5 ${
                    isLoading ? "animate-pulse cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Loading..." : "Complete "}
                </button>
              </div>
            </form>
          )}
        </section>
      )}
    </main>
  );
}

export default Individuals;
