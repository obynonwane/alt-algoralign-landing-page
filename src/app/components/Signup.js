"use client";
import { useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";
import Individuals from "./Individuals";
import Orgs from "./Orgs";
import Pos from "./Pos";
import Remmitance from "./Remmitance";
function Signup() {
  const router = useRouter();
  const params = useSearchParams();
  // get signup code param from url
  const signupCode = params.get("reg_id");
  // get user_type  param from url
  //   user types include [clients, liquidity_provider]
  const userType = params.get("user_type");
  const userSubType = params.get("user_sub_type");
  //   user type substs if for the the subset of each user group
  // it includes pos/remiitance or individual/org
  // http://localhost:3000/signup?reg_id=23445&user_type=liquidity_provider&user_sub_type=organizations
  // http://localhost:3000/signup?reg_id=23445&user_type=liquidity_provider&user_sub_type=individuals

  // http://localhost:3000/signup?reg_id=23445&user_type=clients&user_sub_type=pos
  // http://localhost:3000/signup?reg_id=23445&user_type=clients&user_sub_type=remmitance

  //   redirect to homepae if signup code isnt present
  if (!signupCode || !userType) {
    router.push("/");
  }

  // if (userType === "liquidity_provider") {
  if (userType === "liquidity_provider") {
    return userSubType === "individual" ? (
      <>
        <div className=""></div>
        {/* // http://localhost:3000/signup?reg_id=23445&user_type=liquidity_provider&user_sub_type=individuals */}
        <Individuals
          userType={userType}
          signupCode={signupCode}
          userSubType={userSubType}
        />
      </>
    ) : (
      // http://localhost:3000/signup?reg_id=23445&user_type=liquidity_provider&user_sub_type=organizations
      <Orgs
        userType={userType}
        signupCode={signupCode}
        userSubType={userSubType}
      />
    );
  }
  if (userType === "clients") {
    return userSubType === "pos" ? (
      <>
        <div id="top" className=""></div>
        {/* http://localhost:3001/signup?reg_id=23445&user_type=clients&user_sub_type=pos */}
        <Pos
          userType={userType}
          signupCode={signupCode}
          userSubType={userSubType}
        />
      </>
    ) : (
      // http://localhost:3001/signup?reg_id=23445&user_type=clients&user_sub_type=remmitance
      <Remmitance
        userType={userType}
        signupCode={signupCode}
        userSubType={userSubType}
      />
    );
  }

  return (
    <section className=" text-center min-h-[50vh] mt-20">
      <p className="text-5xl">🚫</p>
      <h3 className="font-medium text-2xl">Unauthorized</h3>
    </section>
  );
}

export default Signup;
