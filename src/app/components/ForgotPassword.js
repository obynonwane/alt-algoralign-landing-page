"use client";

import { useState } from "react";
// import logo from "../ima";
import { toast } from "react-toastify";
import * as yup from "yup";
import axios from "axios";
import Link from "next/link";

function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [step, setStep] = useState(1);

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
    emailAddress: yup
      .string()
      .email("Invalid email format")
      .required("Email Address is required"),
    // password: yup
    //   .string()
    //   .min(6, "Password must be at least 6 characters")
    //   .required("Password is required"),
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
      };
      // If validation passes, continue with your form submission logic, move to step 2
      await loginSchema.validate(formData, { abortEarly: false });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}auth/forgot-password`,
        {
          email: emailAddress,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${user.access_token}`,
        //   },
        // }
        // save bank info
      );
      // console.log(response.data);
      setStep(2);
      setIsLoading(false);

      // toast.success("Valida", toastOptions);
    } catch (errors) {
      console.log(errors);

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

      toast.error("Please reload and try again", toastOptions);
    }
  };

  return (
    <section className="min-h-screen fixed inset-0 w-full bg-gradient-to-r bg-gray-100 pt-24 p-5">
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
            <h3 className="block  text-center text-blue-900 text-lg  font-medium mb-1 max-w-xs mx-auto">
              Reset your password
            </h3>
            <p className="text-center text-sm mb-4">
              To reset your password, enter the email address you use to log in.
            </p>{" "}
            <div className="w-full z-20 ">
              {/* <label className="block  text-gray-500 text-sm font-medium mb-2">
              Email Address
            </label> */}
              <input
                value={emailAddress}
                type="email"
                className="bg-white appearance-none border rounded w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:-outline"
                placeholder="Email Address"
                onInput={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            {/* <div className="w-full z-20  p-2">
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
          </div> */}
            <button
              disabled={isLoading}
              type="submit"
              className={`z-20 bg-blue-600 text-white w-full font-medium py-3 rounded mt-5 mb-2 ${
                isLoading ? "animate-pulse cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Loading..." : "Get Reset Link"}
            </button>
            <div className="mt-3 text-blue-600 flex justify-center text-sm underline w-full">
              <Link className="text-center" href="/login">
                Go back to login screen
              </Link>
            </div>
          </form>
        )}

        {step === 2 && (
          <>
            <div className="text-center">
              <h3 className="block  text-center text-blue-900 text-lg  font-medium mb-1 max-w-xs mx-auto">
                Check your email
              </h3>
              <svg
                width="292"
                height="143"
                viewBox="0 0 292 143"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="my-3 mx-auto"
              >
                <g clipPath="url(#clip0_1408_49)">
                  <path
                    d="M72 51C74 51 75 49 76 47L80 43L84 41L86 38L87 35C87 33 87 30 89 28L91 24L89 20L85 18H80L72 15L66 16C63 17 62 20 61 23L58 31L55 41L57 46C60 52 66 51 67 51H72Z"
                    fill="#E7655B"
                  />
                  <path
                    d="M0.99999 99L1.99999 91C1.99999 89 3.99999 89 4.99999 89L12 92L8.99999 99L4.99999 97L2.99999 100C1.99999 101 -1.00136e-05 100 0.99999 99Z"
                    fill="#A97148"
                  />
                  <path
                    d="M0.99999 99C-1.00136e-05 100 1.99999 101 2.99999 100L4.99999 97V96C4.99999 94 4.99999 91 6.99999 90L4.99999 89C3.99999 89 1.99999 89 1.99999 91L0.99999 99Z"
                    fill="#BDBEBD"
                  />
                  <path
                    d="M119 58C107 64 93 64 80 64C81 62 83 59 83 56C95 57 106 55 117 53L121 50L123 49L126 50V51L125 54L123 57H122V59H120L119 58ZM35 74C41 73 47 71 52 68L63 61L57 55C35 72 30 70 27 70L24 73L26 76L30 75L33 76V77L34 76L35 74ZM70 48C71 52 65 52 68 55C71 57 75 56 75 55C75 53 73 51 75 50L70 48Z"
                    fill="#A97148"
                  />
                  <path d="M79 66C83 63 84 58 85 54L76 53" fill="white" />
                  <path
                    d="M74 81C60 83 52 75 52 75C56 72 61 66 61 61L56 54L62 53H67L76 54C79 62 80 64 79 67L74 75V81Z"
                    fill="white"
                  />
                  <path
                    d="M52 75C52 75 41 83 35 97L12 92L9 99C12 101 28 109 43 111C50 107 55 102 58 97C58 97 57 103 63 114L61 131L69 132C79 112 78 90 73 79"
                    fill="#4282EC"
                  />
                  <path
                    d="M63 88C59 98 50 107 43 111"
                    stroke="#2772F0"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M37 67L36 68L35 69L37 73L38 74H39"
                    stroke="#F8DB62"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M79 23L77 25L66 31L62 36C62 43 67 49 74 50C79 51 83 48 84 43L85 38C86 32 83 27 79 23ZM70 142H61L59 140L61 131L69 132L67 138H68L71 140C72 141 71 142 70 142Z"
                    fill="#A97148"
                  />
                  <path
                    d="M70 142C71 142 72 141 71 140L68 138H60L59 140L61 142H70Z"
                    fill="#BDBEBD"
                  />
                  <path
                    d="M134 60.0001C134 60.0001 172 76.0001 184 54.0001C188 47.0001 186 36.0001 181 34.0001C171 31.0001 168 65.0001 189 63.0001C199 62.0001 212 59.0001 229 41.0001"
                    stroke="#231F20"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M226 15L251 57C253 59 256 59 257 57L292 1L228 10C226 10 224 13 226 15Z"
                    fill="#7E9CF1"
                  />
                  <path
                    d="M292 1L228 10C226 10 224 13 226 15L228 18L292 1Z"
                    fill="white"
                  />
                  <path
                    d="M267 7L241 12C240.735 12 240.48 11.8946 240.293 11.7071C240.105 11.5196 240 11.2652 240 11C240 10.7348 240.105 10.4804 240.293 10.2929C240.48 10.1054 240.735 10 241 10L267 6H268L267 7Z"
                    fill="#E2E6E7"
                  />
                  <path
                    d="M283 7L235 32V47L242 43L239 37L283 7Z"
                    fill="#587CCB"
                  />
                  <path d="M244 27L240 20L253 16L256 21" fill="white" />
                  <path
                    d="M256 16L268 11M258 18L264 15M249 36L259 27M250 38L260 29M255 45L264 34M256 47L265 36M258 49L263 42M251 40L258 33"
                    stroke="#587CCB"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M229 13.0001C228.934 13.1314 228.843 13.2485 228.733 13.3447C228.622 13.4409 228.493 13.5143 228.354 13.5608C228.214 13.6072 228.067 13.6257 227.921 13.6153C227.774 13.6049 227.631 13.5658 227.5 13.5001C227.369 13.4345 227.252 13.3436 227.155 13.2327C227.059 13.1217 226.986 12.993 226.939 12.8537C226.893 12.7144 226.874 12.5673 226.885 12.4209C226.895 12.2744 226.934 12.1314 227 12.0001C227.133 11.7349 227.365 11.5332 227.646 11.4395C227.928 11.3457 228.235 11.3675 228.5 11.5001C228.765 11.6327 228.967 11.8653 229.061 12.1466C229.154 12.4279 229.133 12.7349 229 13.0001Z"
                    fill="#E7655B"
                  />
                  <path
                    d="M232 12C232 12.2652 231.895 12.5196 231.707 12.7071C231.52 12.8946 231.265 13 231 13C230.735 13 230.48 12.8946 230.293 12.7071C230.105 12.5196 230 12.2652 230 12C230 11.7348 230.105 11.4804 230.293 11.2929C230.48 11.1054 230.735 11 231 11C231.265 11 231.52 11.1054 231.707 11.2929C231.895 11.4804 232 11.7348 232 12Z"
                    fill="#F8DE70"
                  />
                  <path
                    d="M235 12.0001C234.934 12.1314 234.843 12.2485 234.733 12.3447C234.622 12.4409 234.493 12.5143 234.354 12.5608C234.214 12.6072 234.067 12.6257 233.921 12.6153C233.774 12.6049 233.631 12.5658 233.5 12.5001C233.369 12.4345 233.252 12.3436 233.155 12.2327C233.059 12.1217 232.986 11.993 232.939 11.8537C232.893 11.7144 232.874 11.5673 232.885 11.4209C232.895 11.2744 232.934 11.1314 233 11.0001C233.133 10.7349 233.365 10.5332 233.646 10.4395C233.928 10.3457 234.235 10.3675 234.5 10.5001C234.765 10.6327 234.967 10.8653 235.061 11.1466C235.154 11.4279 235.133 11.7349 235 12.0001Z"
                    fill="#4282EC"
                  />
                  <path
                    d="M238 11H237H236L237 12"
                    stroke="#BDBEBD"
                    strokeWidth="0.6"
                  />
                  <path d="M263 25L270 34L277 21L273 17L263 25Z" fill="white" />
                  <path d="M235 47L239 37L242 42L235 47Z" fill="#587CCB" />
                  <path d="M292 1L228 10" stroke="#AEAEAE" strokeWidth="0.6" />
                  <path
                    d="M235 46L239 37L245 33"
                    stroke="#376498"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M68 54L69 56L72 55L75 57L76 55"
                    stroke="#C0BEBF"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M72 55V59L71 61C71 64 69 70 67 72L66 77M78 59C80 63 80 65 79 67L74 75"
                    stroke="#C0BEBF"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M47 79C49 80 52 80 54 78L56 76M72 80L73 82L74 83"
                    stroke="#2772F0"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M4 97L5 98M4 98V99M68 139L69 137M69 139L70 138"
                    stroke="#A9A9A9"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M61 131L69 132M61 129L69 131M12 92L9 99M14 92L12 98"
                    stroke="#2772F0"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M66 46.0001C63 43.0001 70 41.0001 71 39.0001C73 35.0001 72 29.0001 76 27.0001L83 25.0001L78 21.0001L61 35.0001L63 46.0001H66ZM1 37.0001V40.0001C6 50.0001 18 59.0001 23 45.0001C32 20.0001 38 44.0001 47 27.0001C51 19.0001 55 19.0001 65 26.0001L67 24.0001C62 19.0001 56 15.0001 49 14.0001C37 10.0001 49 29.0001 34 24.0001C7 16.0001 16 40.0001 5 38.0001C4 38.0001 2 36.0001 1 37.0001Z"
                    fill="#E7655B"
                  />
                  <path d="M35 142H82" stroke="#676867" strokeWidth="0.6" />
                </g>
                <defs>
                  <clipPath id="clip0_1408_49">
                    <rect width="292" height="143" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-sm">
                Check your <span className="font-medium">{emailAddress}</span>{" "}
                inbox for instructions from us on how to reset your password.
              </p>

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
    </section>
  );
}

export default ForgotPassword;
