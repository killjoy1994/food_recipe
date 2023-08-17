import { toast } from "react-toastify";

export const notify = (status, message) => {
  if (status == "success") {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
