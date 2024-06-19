"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const params = useSearchParams();
  // get signup code param from url
  const hash = params.get("hash");
  // const navigate = useNavigate();
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

  const loginSchema = yup.object().shape({
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

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }
    setIsLoading(true);

    try {
      const formData = {
        password,
        confirmPassword,
      };
      // If validation passes, continue with your form submission logic, move to step 2
      await loginSchema.validate(formData, { abortEarly: false });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/change-password`,
        {
          password,
          confirm_password: confirmPassword,
          hash,
        }
      );

      // console.log(response.data);
      // console.log(response.data.data);
      setIsLoading(false);

      toast.success("Success! Log in with your new password.", toastOptions);
      setStep(2);
      const user_type = response.data.data.user_type;
      const user_sub_type = response.data.data.user_sub_type;

      if (user_type === "liquidity_provider") {
        if (user_sub_type === "individual") {
          // console.log(user_type);
          // location.replace(process.env.NEXT_PUBLIC_POS_CLIENT_URL)
          location.replace(process.env.NEXT_PUBLIC_INVESTIFY_URL);
        }
        if (user_sub_type === "organisation") {
          // location.replace(process.env.NEXT_PUBLIC_POS_CLIENT_URL);
        }
      }
      if (user_type === "client") {
        if (user_sub_type === "individual") {
          // console.log(user_type);
          // location.replace(process.env.NEXT_PUBLIC_POS_CLIENT_URL)
        }
        if (user_sub_type === "pos") {
          location.replace(process.env.NEXT_PUBLIC_POS_CLIENT_URL);
        }
      }
      //   setStep(2);

      // navigate("/login");
    } catch (errors) {
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
      if (errors.response.data.message === "reset link is expired") {
        toast.error(errors.response.data.message, toastOptions);
      } else {
        toast.error("Please reload and try again", toastOptions);
      }
      // console.log(errors.response.data.message);
    }
  };

  return (
    <main className="fixed inset-0 min-h-screen w-full bg-gradient-to-r bg-gray-100 pt-24 p-5">
      {/* <img
        className="absolute inset-0 z-10 w-full h-full object-cover opacity-[0.6] "
        src="/posbg.png"
      /> */}
      <Link
        href="/"
        className=" z-20 mx-auto w-32 md:w-40 relative cursor-pointer block mb-5"
      >
        <img
          src="/algoralign_liquidity_solution_logo.svg"
          alt="algoralign logo"
        />{" "}
      </Link>
      <div className="max-w-[400px] z-20 border mx-auto bg-white p-5 rounded ">
        {step === 1 && (
          <form className="flex flex-wrap w-full " onSubmit={handleLogin}>
            <div className="mt-3  flex justify-center text-center text-sm  w-full">
              Enter your new password. After confirming, you will be asked to
              log in again.
            </div>

            <div className="w-full z-20  py-2">
              <label className="block  text-gray-500 text-sm font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                value={password}
                className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                placeholder=" New Password"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full  py-2">
              <label className="block  text-gray-500 text-sm font-medium mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                className=" appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                placeholder="New Password"
                onInput={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className={`z-20 bg-blue-600 text-white w-full font-medium py-3 rounded mt-5 mb-2 ${
                isLoading ? "animate-pulse cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Loading..." : " Reset Password"}
            </button>

            <div className="mt-5  flex justify-center text-sm  w-full">
              <Link className="text-center" href="/login">
                Never mind!{" "}
                <span className="underline ">Take me back to login</span>
              </Link>
            </div>
          </form>
        )}

        {step === 2 && (
          <>
            <div className="text-center ">
              <FaCircleCheck className="text-[80px] text-blue-600 mx-auto mt-3" />
              <h3 className=" mt-3 block  text-center text-blue-900 text-xl font-medium mb-1 max-w-xs mx-auto">
                Successful
              </h3>
              <p className="text-sm mt-2">Password Reset Successfully.</p>

              <div className="mt-5 text-blue-600 flex justify-center text-sm underline w-full">
                <Link className="text-center" href="/login">
                  Go back to login screen
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      {/*  */}
    </main>
  );
}

export default ResetPassword;
