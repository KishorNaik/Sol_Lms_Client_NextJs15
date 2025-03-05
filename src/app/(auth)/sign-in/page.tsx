"use client";

import AuthForm from "@/app/(auth)/_core/components/AuthForm";
import { signInSchema } from "@/app/(auth)/_core/validations";
import { z } from "zod";

const SignIn = () => {
  return (
    <>
      <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
          email: "",
          password: "",
        }}
        onSubmit={() => {}}
      />
    </>
  );
};

export default SignIn;
