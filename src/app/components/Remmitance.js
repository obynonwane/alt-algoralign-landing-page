/* eslint-disable @next/next/no-img-element */
"use client";
// http://localhost:3000/signup?signup_code=23445&user_type=capital_partners&user_type_subset=orgs
import Link from "next/link";
import Image from "next/image";
import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BiSolidChevronDown } from "react-icons/bi";
import { toast } from "react-toastify";
import * as yup from "yup";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { PiCaretLeftBold } from "react-icons/pi";
import { saveToLocalStorage, getFromLocalStorage } from "../../utility";
import axios from "axios";
import logo from "../../images/algoralign_liquidity_solution_logo.svg";

function Remmitance({ userType, signupCode, userTypeSubset }) {
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
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /*
*****
STEP 3 FIELDS
 ******
*/

  const [image1, setImage1] = useState(null);

  const [image1UploadState, setImage1UploadState] = useState(null);
  // can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image2UploadState, setImage2UploadState] = useState(null);
  // can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
  const [image2Preview, setImage2Preview] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  /*
*****
 STEP 4 FIELDS
 ******
*/
  const [cooperative_member_check, setcooperative_member_check] =
    useState(false);
  const [amc_check, setamc_check] = useState(false);
  const [tc_check, settc_check] = useState(false);

  const step1schema = yup.object().shape({
    firstName: yup.string().required(" First Name is required"),
    lastName: yup.string().required(" Last Name is required"),
    name: yup.string().required(" Company Name is required"),
    website: yup.string(),
    address: yup.string().required("address is required"),
    country: yup.string().required("country is required"),
    phone: yup.string().required("Phone Number is required"),
    state: yup.string().required("state is required"),
    city: yup.string().required("city is required"),
    emailAddress: yup
      .string()
      .email("Invalid email format")
      .required("Email Address is required"),
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

  const handleStep4 = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }
    // check if a images have been uploaded
    if (!image1) {
      toast.error("Kindly upload the neccessary documents", toastOptions);
      return;
    }
    // confirm images have been uploaded
    if (image1UploadState !== "UPLOADED") {
      toast.error("Kindly upload the neccessary documents", toastOptions);
      return;
    }

    if (!cooperative_member_check || !amc_check) {
      toast.error("Kindly check required fields", toastOptions);
      return;
    }
    if (!tc_check) {
      toast.error("Kindly agree to terms and conditions", toastOptions);
      return;
    }

    // init loading state

    // setIsLoading(true);

    setIsShowSentSuccessfullyMessage(true);
    sessionStorage.removeItem("_iddm_ls_lp_uu");
    // setIsLoading(false);
  };

  //   HANDLE IMAGE UPLOADS

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
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
      formData.append("name", "pssp_licence_doc");

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
  };

  const removeImage = (index) => {
    // if (index === 1) {
    setImage1(null);
    setImage1Preview(null);
    // } else {
    //   setImage2(null);
    //   setImage2Preview(null);
    // }
  };

  /*
DUNAMIC FORM LOGIC
*/
  const [formFields, setFormFields] = useState([{ fullname: "", email: "" }]);

  const handleAddField = () => {
    setFormFields([...formFields, { fullname: "", email: "" }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };
  //   STEP 4 LOGIC
  const step4schema = yup.array().of(
    yup.object().shape({
      fullname: yup.string().required("Name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
    })
  );
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
      name,
      website,
      address,
      country,
      phone,
      state,
      city,
      emailAddress,
      password,
      confirmPassword,
    };
    try {
      await step1schema.validate(formData, { abortEarly: false });
      // If validation passes, continue with your form submission logic, move to step 2
      setStep(2);
      // console.log("Form is valid:", formData);
    } catch (errors) {
      // If validation fails, handle the errors
      const validationErrors = {};
      //   console.log(errors.inner);

      if (errors.inner.length > 0) {
        const error = errors.inner[0];
        validationErrors[error.path] = error.message;

        // Display the first error
        toast.error(error.message, toastOptions);
      }
    }

    setIsLoading(false);
  };

  const handleStep2 = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      await step4schema.validate(formFields, { abortEarly: false });
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/client-signup-remittance`,
        {
          first_name: firstName,
          last_name: lastName,
          password: password,
          // confirm_password:hfjhdfjcs,
          phone,
          user_type: "client",
          user_sub_type: "remittance",
          reg_id: signupCode,
          company: name,
          address,
          country,
          state,
          city,
          website,
          directors: formFields,
        }
      );
      // console.log(response.data);
      // console.log(response.data);
      // !sample response
      //   {
      //     "error": false,
      //     "message": "Account creation successful",
      // "data": {
      //     "access_token": "v2.local.gAUUriAD-1psZYv8Z_qOkPjsFHG9v-TxL6pI2Ggqf-iguZgk_uIhPK8wTLhZR_r_3UzmQQVfVgafwPl3ykNwplXu-ueWbkUmdHMjs9f6-5qT089YGQb7LuUC_DaWihco2p3w6qmQCh2cGdFyU49IHf2N_y_S2-CO69xuwcJz0DJj5N5jel5ywQeYdoZw-j2cmjD0QqEe7lUfB3y_uv_XWipJBWzl07TvbdQnUVnpn1h0DT6ySvwVyGU1qBfv84XGN7Z8SRcZPZpZ1x7Ub2CudrTFJyU1.bnVsbA",
      //     "data": {
      //         "created_at": "2023-11-12T21:24:02.690957Z",
      //         "email": "chibuikennaji306@gmail.com",
      //         "first_name": "Chibuike",
      //         "id": 12,
      //         "last_name": "Nnaji",
      //         "phone": "",
      //         "updated_at": "2023-11-12T21:24:02.690957Z"
      //     }
      // }
      // }
      // save user info to session storage
      saveToLocalStorage("_iddm_ls_lp_uu", response.data.data);

      // If validation passes, continue with your form submission logic, move to step 2
      setIsLoading(false);
      setStep(3);
      // setIsStep4Complete(true);

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
        // console.log("errors", errors.response.data);
        setIsLoading(false);
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
  };
  useEffect(() => {
    router.push("#top");
  }, [router, step, isShowSentSuccessfullyMessage]);

  return (
    <main className="mt-20 max-w-[1100px] mx-auto">
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
            className="mb-10 px-8 text-white hover:opacity-75 bg-blue-600 py-3 - rounded"
          >
            LOGIN
          </a> */}
        </section>
      ) : (
        <section className="mb-42">
          {/* {userTypeSubset} */}
          {/* <h2 className="text-2xl capitalize text-center  md:text-3xl  font-bold  text-blue-950">
            {userType.replace(/_/g, " ")} Signup {step >= 3 && "(KYC)"}
          </h2> */}
          <div className="max-w-[600px] mx-auto ">
            <Link
              href="/"
              className=" w-28 mb-2  relative cursor-pointer block"
            >
              <Image src={logo} alt="algoralign logo" priority />
            </Link>
            <h2 className="text-2xl capitalize   md:text-3xl  font-bold mb-2 text-blue-950">
              {userType.replace(/_/g, " ")} Signup {step > 2 && "(KYC)"}
            </h2>
          </div>
          {/* STEP 1 */}
          {step === 1 && (
            <form
              className="flex flex-wrap max-w-[600px] mx-auto  mb-24 mt-10"
              onSubmit={handleStep1}
            >
              <div className=" md:w-1/2 w-full p-2">
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
              <div className=" md:w-1/2 w-full p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Last Name"
                  value={lastName}
                  onInput={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="w-full p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={name}
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Company Name"
                  onInput={(e) => setName(e.target.value)}
                />
              </div>

              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Website
                </label>
                <input
                  type="text"
                  value={website}
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Website"
                  onInput={(e) => setWebsite(e.target.value)}
                />
              </div>

              {/* <div className="w-full md:w-1/2 p-2 ">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Daily Processing Volume
                </label>
                <div className="">
                  <Listbox
                    value={selected_dailyProcessingVolumes}
                    onChange={set_selected_dailyProcessingVolumes}
                  >
                    <div className="relative mt-1 border rounded z-10">
                      <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-3 - pl-3 pr-10 text-left -md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {selected_dailyProcessingVolumes.value}
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
                          {dailyProcessingVolumes.map((eco, idx) => (
                            <Listbox.Option
                              key={idx}
                              className={({ active }) =>
                                `relative cursor-pointer select-none p-2  ${
                                  active
                                    ? "bg-blue-100 text-blue-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={eco}
                            >
                              {({ item }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      item ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {eco.value}
                                  </span>
                                  {item ? (
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
              </div> */}

              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Country Your Company Is Registered
                </label>
                <input
                  type="text"
                  value={country}
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder=" Country Your Company Is Registered"
                  onInput={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Address{" "}
                </label>
                <input
                  type="text"
                  value={address}
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder=" Address"
                  onInput={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/2 p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  State
                </label>
                <input
                  type="text"
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="State"
                  onInput={(e) => setState(e.target.value)}
                  value={state}
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  City
                </label>
                <input
                  type="text"
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="City"
                  onInput={(e) => setCity(e.target.value)}
                  value={city}
                />
              </div>
              <div className="w-full md:w-1/2  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Corporate Email Address
                </label>
                <input
                  type="text"
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Email Address"
                  value={emailAddress}
                  onInput={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div className="md:w-1/2 w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Phone Number"
                  onInput={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder=" Password"
                  value={password}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder=" Password"
                  value={confirmPassword}
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
                {isLoading ? "Loading..." : "Next"}
              </button>
            </form>
          )}
          {/* STEP 2 */}
          {/* add directors information */}
          {step === 2 && (
            <form
              onSubmit={handleStep2}
              className="flex flex-wrap max-w-[600px] mx-auto  mb-24 mt-10"
            >
              <div className="w-full">
                <h3 className="font-semibold">Company Director Information</h3>
                <p className="mb-4">
                  We need some information about your company and its directors.
                  This information helps us ensure the legitimacy of your
                  business and allows you to use our services effectively.
                </p>
              </div>
              {formFields.map((field, index) => (
                <div
                  key={index}
                  className="w-full bg-zinc-100 px-3 py-5 rounded my-3 md:justify-around flex flex-wrap "
                >
                  <div className="md:w-[45%] w-full ">
                    <label className="block text-gray-500 text-sm font-bold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name={`name${index}`}
                      placeholder="Name"
                      className="appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline "
                      value={field.fullname}
                      onChange={(e) => {
                        const updatedFields = [...formFields];
                        updatedFields[index].fullname = e.target.value;
                        setFormFields(updatedFields);
                      }}
                    />
                  </div>
                  <div className="md:w-[45%] w-full md:mt-0 mt-3 ">
                    <label className="block text-gray-500 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name={`email${index}`}
                      placeholder="Email"
                      className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                      value={field.email}
                      onChange={(e) => {
                        const updatedFields = [...formFields];
                        updatedFields[index].email = e.target.value;
                        setFormFields(updatedFields);
                      }}
                    />
                  </div>
                  {index !== 0 && (
                    <button
                      type="button"
                      title="Remove"
                      className="text-red-400 md:mt-0 mt-3 "
                      onClick={() => handleRemoveField(index)}
                    >
                      <span className="hidden md:block">X</span>
                      <span className="md:hidden block">Remove</span>
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="text-blue-500 font-semibold my-3 w-fit ml-auto  text-right"
                onClick={handleAddField}
              >
                + Add Director
              </button>

              <div className="flex w-full items-center">
                <button
                  onClick={() => setStep(1)}
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
                  {isLoading ? "Loading..." : "Sign Up"}
                </button>
              </div>
            </form>
          )}
          {/* STEP 3 */}
          {step === 3 && (
            <div className=" max-w-[700px] mx-auto px-5 py-8 rounded mt-10">
              <h3 className="text-xl  font-semibold">
                👋 We&apos;re excited to have you on board!
              </h3>
              <h5 className="font-semibold mt-2 text-zinc-600">
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
                {/* Before proceeding, <u>please have image(s) of at least one</u>{" "} */}
                Before proceeding, please have an image of<u> one</u> of the
                following documents ready:
              </p>
              {/* show documents list depending on th euser subset (individual/org) */}
              <ul className="text-zinc-500 list-disc	pl-3 md:pl-10">
                <li>
                  A picture of your International Money Transfer Operators
                  (IMTO) License.
                </li>
                <li>A picture of your companies Banking license.</li>
                <li>
                  A picture of your companies Payment Solution Service Provider
                  (PSSP) License
                </li>
              </ul>

              <h5 className="text-zinc-500 mt-6  font-semibold">
                Click &apos;Proceed&apos; to start your verification process.{" "}
              </h5>
              <div className="flex w-full items-center">
                {/* <button
                  onClick={() => setStep(1)}
                  className={` border border-blue-600 text-blue-600 w-fit py-2 px-4 ml-2  rounded mt-5 `}
                >
                   Back
                </button>{" "} */}
                <button
                  onClick={() => setStep(4)}
                  className={` bg-blue-600 text-white w-fit py-2 px-4   rounded mt-5 `}
                >
                  Proceed{" "}
                </button>
              </div>
            </div>
          )}
          {/* STEP 4 */}
          {step === 4 && (
            <form
              className="flex flex-wrap max-w-[600px] mx-auto  mb-24 mt-10"
              onSubmit={handleStep4}
            >
              <div className="w-full  p-2">
                <h5 className="font-semibold mb-3 text-zinc-600">
                  Kindly upload an image of <u> one</u> of the following
                  documents:
                </h5>
                <ul className="text-zinc-500 list-disc	pl-4 md:pl-6">
                  <li>
                    Your International Money Transfer Operators (IMTO) License.
                  </li>
                  <li>Your Banking license.</li>
                  <li>Your Payment Solution Service Provider (PSSP) License</li>
                </ul>
                {/* <>
                  <label className="block text-gray-500 text-sm font-bold mb-2">
                    Payment Solution Service Provider (PSSP) License
                  </label>
                  <p className="mb-2 text-gray-500 text-sm">
                    Upload an image of your Payment Solution Service Provider
                    (PSSP) License
                  </p>
                  <label className="block text-gray-500 text-sm font-bold mb-2">
                    Banking license
                  </label>
                  <p className="mb-2 text-gray-500 text-sm">
                    Upload an image of your Banking license
                  </p>
                  <label className="block text-gray-500 text-sm font-bold mb-2">
                    IMTO License.
                  </label>
                  <p className="mb-2 text-gray-500 text-sm">
                    A picture of your International Money Transfer Operators
                    (IMTO) License.{" "}
                  </p>
                </> */}
                {image1 && (
                  <>
                    {image1UploadState === "LOADING" ? (
                      <span className="mt-5 block text-xs px-2 ml-2 py-1 rounded-full bg-blue-100 text-blue-600">
                        Uploading...
                      </span>
                    ) : image1UploadState === "UPLOADED" ? (
                      <span className="mt-5 block text-xs  px-2 py-2  ml-2  rounded-full bg-green-100 text-green-600">
                        Uploaded Successfully ✔
                      </span>
                    ) : image1UploadState === "FAILED" ? (
                      <span className="mt-5 block text-xs px-2 py-2  ml-2  rounded-full bg-red-100 text-red-600">
                        Upload Failed
                      </span>
                    ) : null}
                  </>
                )}
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
                        // onChange={(e) => handleImageChange(e, 1)}
                        onChange={(e) => handleImageChange(e)}
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

              <div className="w-full p-5 bg-zinc-100 rounded my-2">
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
                      member of Algoralign&apos;s (liquidity solution)
                      cooperative
                    </span>
                  </label>
                </div>
                <div class="space-y-4">
                  <label class="flex items-start">
                    <input
                      type="checkbox"
                      checked={amc_check}
                      onChange={() => setamc_check(!amc_check)}
                      class="h-4 w-4  rounded border-gray-300 text-white border checked:bg-indigo-600"
                    />
                    <span class="ml-2 text-gray-700 font-light text-sm">
                      I confirm that my company complies with Anti-Money
                      Laundering (AML){" "}
                      <a
                        target="_blank"
                        href="https://www.cbn.gov.ng/out/2014/fprd/aml%20act%202013.pdf"
                        className="text-blue-600"
                      >
                        Anti-Money Laundering (AML)
                      </a>{" "}
                      regulations.
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
                      <Link href="/terms-of-service" className="text-blue-600">
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
                  className={` bg-blue-600 text-white w-fit py-2 px-4 ml-2  rounded mt-5 ${
                    isLoading ? "animate-pulse cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Loading..." : "Complete"}
                </button>
              </div>
            </form>
          )}
        </section>
      )}
    </main>
  );
}

export default Remmitance;
