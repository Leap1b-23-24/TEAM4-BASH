"use client";

import { Button, Container, Stack, TextField } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type ImageUrlProps = {
  imageUrl: string[];
  setImageUrl: Dispatch<SetStateAction<string[]>>;
};

export const Upload = (props: ImageUrlProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { setImageUrl } = props;

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/df9skkucm/upload?upload_preset=pmvvak8o",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        setImageUrl((prev) => [...prev, data.secure_url]);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };

  useEffect(() => {
    handleImageUpload();
  }, [selectedFile]);

  return (
    <Stack py={2} gap={3} direction={"row"} justifyContent={"space-between"}>
      <Stack gap={3} width={"80px"}>
        <TextField
          type="file"
          onChange={handleImageChange}
          variant="outlined"
        />
      </Stack>
    </Stack>
  );
};
