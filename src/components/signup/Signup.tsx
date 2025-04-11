import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormRow from "./FormRow";

//Set the source from where user found the website
enum Source {
  GOOGLE = "google",
  LINKEDIN = "linkedIn",
  INDEED = "indeed",
  OTHER = "other",
}

//Set the type of the form input
type IFormInput = {
  firstName: string;
  lastName: string;
  source: Source;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Signup() {
  //useForm hook to manage the form state and validation
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<IFormInput>();

  //handle submit function
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <div className="signup-form">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow
            label={"First Name"}
            error={errors.firstName?.message}
            required
          >
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "This field is required.",
              })}
            />
          </FormRow>

          <FormRow
            label={"Last Name"}
            error={errors.lastName?.message}
            required
          >
            <input
              type="text"
              id="lastName"
              {...register("lastName", {
                required: "This field is required.",
              })}
            />
          </FormRow>

          <FormRow
            label={"How did you here about us?"}
            error={errors.source?.message}
            required
          >
            <select
              defaultValue={""}
              id="source"
              {...register("source", {
                required: "This field is required.",
                //Custom validation to check if the value is still set to the default value
                validate: (value: Source | string) => {
                  if (value === "") {
                    return "This field is required.";
                  }
                  return true;
                },
              })}
            >
              <option value="" disabled>
                Select your option
              </option>
              <option value={Source.GOOGLE}>Google</option>
              <option value={Source.LINKEDIN}>LinkedIn</option>
              <option value={Source.INDEED}>Indeed</option>
              <option value={Source.OTHER}>Other</option>
            </select>
          </FormRow>

          <FormRow label={"Email"} error={errors.email?.message} required>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "This field is required.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address.",
                },
              })}
            />
          </FormRow>

          <FormRow
            label={"Password (min 8 characters)"}
            error={errors.password?.message}
            required
          >
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "This field is required.",
                minLength: {
                  value: 8,
                  message: "Password needs a minimum of 8 characters",
                },
              })}
            />
          </FormRow>

          <FormRow
            label={"Repeat password"}
            error={errors.confirmPassword?.message}
            required
          >
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "This field is required.",
                validate: (value: string) =>
                  // Compare confirmPassword with password value from getValues of the current form state
                  value === getValues("password") || "Passwords do not match",
              })}
            />
          </FormRow>

          <button className="submit-button" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
