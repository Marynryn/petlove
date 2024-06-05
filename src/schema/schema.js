import * as yup from "yup";

export const authSchema = yup.object({
  name: yup
    .string()
    .required(" Name is required")
    .min(2, "Name must be at least 8 characters")

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
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email()
    .required("Email is required")
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters"),
});
export const profileSchema = yup.object().shape({
  name: yup.string().nullable(true).default(""),
  email: yup
    .string()
    .nullable()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  avatar: yup
    .string()
    .nullable(true)
    .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/, {
      message: "Invalid image URL",
      excludeEmptyString: true,
    }),
  phone: yup
    .string()
    .nullable(true)
    .matches(/^\+38\d{10}$/, {
      message: "Invalid phone number format",
      excludeEmptyString: true,
    }),
});
