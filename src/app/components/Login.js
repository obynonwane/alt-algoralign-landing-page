"use client";

import { useState } from "react";
// import logo from "../ima";
import { toast } from "react-toastify";
import * as yup from "yup";
import axios from "axios";
import Link from "next/link";
import { saveToLocalStorage, getFromLocalStorage } from "../../utility";
function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("@Password2020");
  const [emailAddress, setEmailAddress] = useState(
    "chibuikennaji306@gmail.com"
    // "chibuikennaji306@gmail.com"
    // "rrr306@gmail.com"
  );
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const otpSchema = yup.object().shape({
    otp: yup.string().required("Otp is required"),
  });

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

  const handleOtp = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }
    setIsLoading(true);

    try {
      const formData = {
        otp,
      };

      // If validation passes, continue with your form submission logic, move to step 2
      await otpSchema.validate(formData, { abortEarly: false });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/verify-login-token`,
        {
          email: emailAddress,
          password,
          token: otp,
        }
      );
      // console.log(response.data);

      if (response.data.error) {
        return toast.error("Reload and try again!", toastOptions);
      }
      if (!response.data.data.user.is_approved) {
        // navigate("/unverified");
        location.replace("/unverified");
        return;
      }

      const user = {
        isAuthenticated: true,
        // preferences: {
        //   newUser: FistTimeUser === "yes",
        // },
        userData: response.data.data,
      };
      console.log({ user });
      const token = saveToLocalStorage("_iddm_al__uu", user);
      // sessionStorage.setItem("aaa", user);
      const user_type = response.data.data.user.user_type;
      const user_sub_type = response.data.data.user.user_sub_type;
      // console.log(process.env.NEXT_PUBLIC_POS_CLIENT_URL + `?t=${token}`);

      if (user_type === "liquidity_provider") {
        if (user_sub_type === "individual") {
          // console.log(user_type);
          // console.log(user);
          // location.replace(process.env.NEXT_PUBLIC_POS_CLIENT_URL)
          location.replace(
            process.env.NEXT_PUBLIC_INVESTIFY_URL +
              `loading?t=${encodeURIComponent(token)}`
          );
        }
        if (user_sub_type === "organisation") {
          location.replace(
            process.env.NEXT_PUBLIC_INVESTIFY_URL +
              `loading?t=${encodeURIComponent(token)}`
          );
        }
      }
      if (user_type === "client") {
        if (user_sub_type === "remittance") {
          // console.log(user_type);
          // location.replace(process.env.NEXT_PUBLIC_POS_CLIENT_URL)
        }
        // console.log(encodeURIComponent(token));
        if (user_sub_type === "pos") {
          window.open(
            process.env.NEXT_PUBLIC_POS_CLIENT_URL +
              `loading?t=${encodeURIComponent(token)}`,
            "_blank"
          );
          // location.replace(
          //   process.env.NEXT_PUBLIC_POS_CLIENT_URL + `loading?t=${token}`
          // );
        }
      }
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
        // toast.error(errors.response.data.message[0], toastOptions);
        toast.error("Check Otp and try again", toastOptions);
      }
    }
  };

  const loginSchema = yup.object().shape({
    emailAddress: yup
      .string()
      .email("Invalid email format")
      .required("Email Address is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }
    setIsLoading(true);

    try {
      const formData = {
        emailAddress,
        password,
      };
      // If validation passes, continue with your form submission logic, move to step 2
      await loginSchema.validate(formData, { abortEarly: false });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/signin`,
        {
          email: emailAddress,
          password,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${user.access_token}`,
        //   },
        // }
        // save bank info
      );
      // console.log(response.data);
      if (response.data.status_code !== 200) {
        setIsLoading(false);

        return;
      }
      setStep(2);
      setIsLoading(false);

      // toast.success("Valida", toastOptions);
    } catch (errors) {
      //   console.log(errors.response.data.message);

      if (yup.ValidationError.isError(errors)) {
        const validationErrors = {};

        const error = errors.inner[0];
        validationErrors[error.path] = error.message;

        // Display the first error
        toast.error(error.message, toastOptions);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);

      toast.error("Check Credentials and try again", toastOptions);
    }
  };
  //   const handleRetry = () => {
  //     handleOtp();
  //   };

  return (
    <section className="min-h-screen fixed inset-0 w-full bg-gradient-to-r bg-gray-100 pt-24 p-5">
      {/* <img
        className="absolute inset-0 z-10 w-full h-full object-cover opacity-[0.6] "
        src="/posbg.png"
      /> */}
      <Link
        href="/"
        className=" z-20 mx-auto w-36 md:w-44 relative cursor-pointer block mb-5"
      >
        <img
          src="/algoralign_liquidity_solution_logo.svg"
          alt="algoralign logo"
        />
      </Link>
      <div className="max-w-[400px] z-20 border mx-auto bg-white p-5 rounded ">
        {step === 1 && (
          <form className="flex flex-wrap w-full " onSubmit={handleLogin}>
            {/* <button type="button" onClick={handleabcd}>
              dsds
            </button> */}

            {/* <h3 className="block  text-center text-blue-900 text-xl mb-5  font-medium  max-w-xs mx-auto">
              Login{" "}
            </h3> */}

            <div className="w-full z-20 mt-3 ">
              <label className="block  text-gray-500 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                value={emailAddress}
                type="email"
                className="bg-white appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                placeholder="Email Address"
                onInput={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div className="w-full z-20 pt-3">
              <label className="block  text-gray-500 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                placeholder=" Password"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className={`z-20 bg-blue-600 text-white w-full font-medium py-3 rounded mt-5 mb-2 ${
                isLoading ? "animate-pulse cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>

            <div className="mt-4 text-blue-600 flex justify-center text-sm underline w-full">
              <Link className="text-center" href="/forgot-password">
                Forgot Password?
              </Link>
            </div>
          </form>
        )}

        {step === 2 && (
          <>
            <form onSubmit={handleOtp} className=" relative">
              <h3 className="font-medium text-xl">Enter Otp</h3>
              <p className="font-light">
                An OTP has been sent to you email address, kindly enter it below
                to proceed with the login process
              </p>
              {/* <span
          className="absolute top-2 right-4 text-grey-200 font-medium "
          onClick={() => setIsOpen(false)}
        >
          X
        </span> */}
              <input
                value={otp}
                type="text"
                className=" appearance-none text-center font-semibold border rounded w-full py-4 text-lg mt-4 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                placeholder="32456"
                onInput={(e) => setOtp(e.target.value)}
              />{" "}
              <button
                disabled={isLoading}
                type="submit"
                className={` bg-blue-600 text-white w-full font-medium py-3 rounded mt-3 ${
                  isLoading ? "animate-pulse cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Loading..." : "Verify Otp"}
              </button>
              {/* <div
                onClick={()=>handleOtp('retry')}
                className="cursor-pointer mt-4 text-blue-600 flex justify-center text-sm underline w-full"
              >
                Resend Code
              </div> */}
            </form>
          </>
        )}
      </div>
      {/*  */}
    </section>
  );
}

export default Login;
