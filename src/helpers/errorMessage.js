export const errorMessages = {
  signin: {
    400: "Bad request (invalid request body)",
    "Request failed with status code 401": "Email or password invalid",
    404: "Service not found",

    500: "Server error",
  },
  signup: {
    400: "Bad request (invalid request body)",
    404: "Service not found",
    409: "Such email already exists",
    500: "Server error",
  },
  logout: {
    "Request failed with status code 401": "Unauthorized",
  },
};
