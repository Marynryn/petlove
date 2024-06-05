import axios from "axios";

export const uploadFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mqypjnxr");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dikdzvcu8/image/upload",
      formData
    );

    if (response.status === 200) {
      const imageUrl = response.data.secure_url;
      console.log("Image URL:", imageUrl);
      return imageUrl;
    } else {
      console.error("Failed to upload image:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }
};
