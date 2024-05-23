import * as yup from "yup";

export const authSchema = yup.object({
  name: yup
    .string()
    .required(" Name is required")
    .min(2, "Name must be at least 8 characters")
    .max(15, "Name must be no more than 50 characters")
    .matches(
      /^[a-zA-Zа-яА-Я0-9\s]*$/,
      "Name can only contain letters, numbers, and spaces"
    ),
  email: yup
    .string()
    .trim()
    .email()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[\]{}|;:',.<>?/~`]+$/,
      "Invalid password format"
    )
    .min(6, "Password must be at least 8 characters")
    .max(64, "Password must be no more than 64 characters")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[\]{}|;:',.<>?/~`]+$/,
      "Invalid password format"
    )
    .min(6, "Password must be at least 8 characters")
    .max(64, "Password must be no more than 64 characters")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),
});
