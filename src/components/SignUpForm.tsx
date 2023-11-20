"use client";

import { useSupabase } from "@/supabase/Client";
import { ChangeEvent, FormEvent, useState } from "react";

const SignUpForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const supabase = useSupabase();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
  };
  return (
    <>
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-center">Sign Up</h1>
      </div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-neutral-500 rounded-lg py-2 px-4"
            type="text"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block font-bold">
            Password
          </label>
          <input
            id="password"
            className="w-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-neutral-500 rounded-lg py-2 px-4"
            type="text"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-neutral-700 rounded-lg font-semibold text-white"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
