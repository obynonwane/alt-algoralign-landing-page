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
import { PiCaretLeftBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { saveToLocalStorage, getFromLocalStorage } from "../../utility";
import axios from "axios";
import logo from "../../images/algoralign_liquidity_solution_logo.svg";

function Pos({ userType, signupCode, userSubType }) {
  const router = useRouter();
  const user = getFromLocalStorage("_iddm_ls_lp_uu");

  const banks = [{ value: "UBA" }, { value: "OPAY" }, { value: "Access Bank" }];
  const numberOfActivePOSTerminals = [
    // Less than 500, 500-4999 5k-20k, 20k-100k and 100kand above
    { value: "Less than 500" },
    { value: "500 - 4,999" },
    { value: "5,000 - 20,000" },
    { value: "20,000 - 100,000" },
    { value: "Above 100,000" },
  ];
  const dailyProcessingVolumes = [
    { value: "Under $20,000" },
    { value: "$20,000 - $100,000" },
    { value: "$100,000 - $1,000,000" },
    { value: "Above $1,000,000" },
  ];
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
  const [selected_dailyProcessingVolumes, set_selected_dailyProcessingVolumes] =
    useState(dailyProcessingVolumes[0]);
  const [
    selected_numberOfActivePOSTerminals,
    set_selected_numberOfActivePOSTerminals,
  ] = useState(numberOfActivePOSTerminals[0]);

  //   STEP 1 FIELDS
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [employees, setEmployees] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [business_registration_number, setBusinessRegistrationNumber] =
    useState("");
  const [tax_identification_number, setTaxIdentificationNumber] = useState("");
  /*
*****
STEP 3 FIELDS
 ******
*/
  const [bvn, setBvn] = useState("");
  const [files, setFiles] = useState([]);
  const [image1, setImage1] = useState(null);

  const [image1UploadState, setImage1UploadState] = useState(null);
  // can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
  const [image1Preview, setImage1Preview] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image2UploadState, setImage2UploadState] = useState(null);
  // can be null (nothing is being uploaded), LOADING (image is being uploaded), UPLOADED (image upload successful), FAILED (image upload failed)
  const [image2Preview, setImage2Preview] = useState(null);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  /*
*****
 STEP 4 FIELDS
 ******
*/
  const [selectedBank, setSelectedBank] = useState(banks[0]);
  const [cooperative_member_check, setcooperative_member_check] =
    useState(false);
  const [confirm_account_check, setconfirm_account_check] = useState(false);
  const [tc_check, settc_check] = useState(false);
  const [aml_check, set_aml_check] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");

  //   HANDLE IMAGE UPLOADS

  const handleImageChange = (event, type) => {
    if (!tax_identification_number || tax_identification_number.length < 10) {
      toast.error("Kindly enter Tax Identification Number", toastOptions);
    }

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
      formData.append("name", "cac_cert_doc");
      formData.append("tin", tax_identification_number);

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
      formData.append("name", "banking_licence_doc");
      formData.append("tin", tax_identification_number);

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

  const step1schema = yup.object().shape({
    name: yup.string().required(" Company Name is required"),
    address: yup.string().required("Company Address is required"),
    country: yup
      .string()
      .required("Country Your Company Is Registered is required"),
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
  const step3schema = yup.object().shape({
    tax_identification_number: yup
      .string()
      .matches(/^\d{10}$/, "Tax Identification Number must be 10 digits")
      .required("Tax Identification Number is Required"),
  });

  const handleStep4 = async (e) => {
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

    // if (!cooperative_member_check || !aml_check) {
    //   toast.error("Kindly check required fields", toastOptions);
    //   setIsLoading(false);

    //   return;
    // }
    // if (!tc_check) {
    //   toast.error("Kindly agree to terms and conditions", toastOptions);
    //   setIsLoading(false);

    //   return;
    // }

    // init loading state

    setIsShowSentSuccessfullyMessage(true);
    setIsLoading(false);
  };
  const handleStep1 = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    // init loading state
    setIsLoading(true);
    const formData = {
      name,
      address,
      country,
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
      console.log("Form is valid:", formData);
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
  const step2schema = yup.array().of(
    yup.object().shape({
      fullname: yup.string().required("Fullname is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
    })
  );

  const handleStep2 = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      await step2schema.validate(formFields, { abortEarly: false });

      // {
      //   first_name: "fcsdfdsf",
      //   last_name: "ffsdf",
      //   password: "hfjhdfjcs",
      //   confirm_password: "hfjhdfjcs",
      //   phone: "+563524434579859509",
      //   no_of_employee: 5,
      //   user_type: "client",
      //   user_sub_type: "pos",
      //   reg_id: "d31190ae-6357-4d90-82f4-42b758efd6cd",
      //   company: "GG ltd",
      //   address: "No 35 band",
      //   country: "Nigeria",
      //   state: "lagos",
      //   city: "surulere",
      //   website: "dd@yahoo.com",
      //   directors: [
      //     { fullname: "obinna johnson", email: "biostechnologyng@gmail.com" },
      //     { fullname: "magnus johnson", email: "mag@yahoo.com" },
      //   ],
      // }
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/client-signup-pos`,
        {
          first_name: firstName,
          last_name: lastName,
          password: password,
          confirm_password: confirmPassword,
          phone: phoneNumber,
          no_of_employee: 5,
          // no_of_active_pos_terminals: selected_numberOfActivePOSTerminals.value,
          user_type: "client",
          user_sub_type: "pos",
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
      console.log(response.data);
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
            className="mb-10 px-8 text-white hover:opacity-75 bg-blue-600 py-3 rounded"
          >
            LOGIN
          </a> */}
        </section>
      ) : (
        <section className="mb-42">
          {/* {userTypeSubset} */}
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
              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  No. of active p.o.s terminals
                </label>
                <div className="">
                  <Listbox
                    value={selected_numberOfActivePOSTerminals}
                    onChange={set_selected_numberOfActivePOSTerminals}
                  >
                    <div className="relative mt-1 border rounded">
                      <Listbox.Button className="cursor-pointer relative w-full  rounded-lg bg-white py-3 pl-3 pr-10 text-left -md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">
                          {selected_numberOfActivePOSTerminals.value}
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
                          {numberOfActivePOSTerminals.map((eco, idx) => (
                            <Listbox.Option
                              key={idx}
                              className={({ active }) =>
                                `relative cursor-pointer select-none p-2  ${
                                  eco.value ===
                                  selected_numberOfActivePOSTerminals.value
                                    ? "bg-blue-100 text-blue-900"
                                    : "text-gray-900"
                                }   ${
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
              </div>{" "}
              <div className="w-full  p-2">
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
              <div className="w-full  p-2">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Phone Number{" "}
                </label>
                <input
                  type="text"
                  className=" appearance-none border rounded w-full py-3 - px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onInput={(e) => setPhoneNumber(e.target.value)}
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
                      className="appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline "
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
                      className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
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
                className="text-blue-500 font-semibold my-3"
                onClick={handleAddField}
              >
                + Add Director
              </button>

              <div className="w-full bg-zinc-100 py-3 px-2 text-gray-700 font-medium text-sm">
                By signing up, you confirm that you have read and agree to our{" "}
                <Link href="#" className="text-blue-600">
                  Terms and Conditions
                </Link>
              </div>
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
          {/* STEP 2 */}
          {step === 3 && (
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
                {/* Before proceeding, please have images of the following documents */}
                Before proceeding, please have the following ready:
              </p>
              {/* show documents list depending on th euser subset (individual/org) */}
              <ol className="text-zinc-500 list-decimal	pl-7 md:pl-10">
                <li>Your companys Tax Identification Number (TIN)</li>
                <li>
                  A picture of your Corporate Affairs Commission (CAC)
                  Certificate.
                </li>
                <li>
                  A picture of your Agent banking license or any other
                  identification license you can provide
                </li>
              </ol>

              <h5 className="text-zinc-500 mt-6  font-semibold">
                Click the button below to start your verification process.{" "}
              </h5>

              <div className="flex w-full items-center">
                <button
                  onClick={() => setStep(4)}
                  className={` bg-blue-600 text-white w-fit py-2 px-4   rounded mt-5 `}
                >
                  Let&apos; Begin
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
              <div className="w-full p-2 mb-4">
                <label className="block text-gray-500 text-sm font-bold mb-2">
                  Tax Identification Number
                </label>
                <input
                  type="text"
                  className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                  placeholder="Tax Identification Number"
                  value={tax_identification_number}
                  onInput={(e) => setTaxIdentificationNumber(e.target.value)}
                />
              </div>
              <h5 className="font-semibold mb-3 text-zinc-600">
                Kindly upload an image of the following documents:
              </h5>
              <section className="grid grid-cols-12 w-full gap-y-6 gap-x-3">
                <div className="col-span-12 ">
                  <label className="w-full text-gray-500 text-sm font-bold mb-2 flex items-center">
                    1. Corporate Affairs Commission (CAC) Certificate.
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
                    Upload an image ofyour Corporate Affairs Commission (CAC)
                    Certificate.
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
                        {/* <button
                          type="button"
                          className="text-sm underline"
                          onClick={() => setImage1(null)}
                        >
                          Remove
                        </button> */}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-span-12 ">
                  <label className="block text-gray-500 text-sm font-bold mb-2">
                    2. Operating License
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
                    Upload an image of your Agent banking license certificate or
                    any other identification license you can provide
                  </p>
                  <div className=" overflow-hidden  p-2 mt-3 relative border-2 cursor-pointer text-gray-500   border-dashed rounded ">
                    {!image2Preview ? (
                      <div className=" h-24 flex items-center justify-center flex-col">
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
                        {/* <button
                          type="button"
                          className="text-sm underline"
                          onClick={() => setImage1(null)}
                        >
                          Remove
                        </button> */}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              <div className="flex w-full items-center mt-3">
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

export default Pos;
