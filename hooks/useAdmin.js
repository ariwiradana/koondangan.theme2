import fetcher from "@/utils/fetcher";
import axios from "axios";
import { useState } from "react";
import useSWR from "swr";

const useAdmin = (user) => {
  const [imgType, setImgTyoe] = useState("cover");
  const [form, setForm] = useState({
    imgType: "cover",
    files: "",
  });
  const [deleteLoading, setDeleteLoading] = useState("");
  const [addLoading, setAddLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState("");
  const {
    data: images,
    mutate,
    isLoading,
  } = useSWR(`/api/image?user=${user}&type=${imgType}`, fetcher);

  const handleChange = (value, mode, id) => {
    if (mode == "add") {
      setForm({ ...form, [id]: value });
    } else {
      setImgTyoe(value);
    }
  };

  const handleToggleDialog = (event) => {
    setOpenDialog(!openDialog);
  };

  const handleDeleteCard = async (filename) => {
    setDeleteLoading(filename);
    try {
      const result = await axios.delete("/api/image", {
        params: {
          filename,
        },
      });
      console.log({ result });
      mutate();
    } catch (error) {
      console.log(error.message);
    } finally {
      setDeleteLoading("");
    }
  };

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    setAddLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", form.files[0]);
      formData.append("type", form.imgType);
      formData.append("user", process.env.NEXT_PUBLIC_USER);

      const response = await axios.post("/api/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      mutate();
      setOpenDialog(false);

      if ("message" in response.data) {
        alert(response?.data?.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error?.response?.data?.message);
    } finally {
      setAddLoading(false);
    }
  };

  const appData = {
    state: {
      imgType,
      deleteLoading,
      addLoading,
      openDialog,
      form,
      isLoading,
    },
    data: {
      images,
    },
    handler: {
      handleChange,
      handleDeleteCard,
      handleToggleDialog,
      handleSubmitAdd,
    },
  };

  return appData;
};

export default useAdmin;
