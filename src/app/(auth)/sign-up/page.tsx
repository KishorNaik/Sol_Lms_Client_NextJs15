"use client";

import { signUpSchema } from "@/app/(auth)/_core/validations";
import AuthForm from "@/app/(auth)/_core/components/AuthForm";

const SignUp = () => {
  return (
    <>
      <AuthForm
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
          email: "",
          password: "",
          fullName: "",
          universityId: 0,
          universityCard: "",
        }}
        onSubmit={(data) => {}}
      />
    </>
  );
};

export default SignUp;
