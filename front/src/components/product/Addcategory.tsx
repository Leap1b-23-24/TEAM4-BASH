import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import * as yup from "yup";
import { useProduct } from "../providers/ProductProvider";

const validationSchema = yup.object({
  category: yup.string(),
});

type Props = {
  handleClose: Dispatch<SetStateAction<boolean>>;
};

export const CreateCategory = (props: Props) => {
  const { handleClose } = props;
  const { postCategory } = useProduct();

  const formik = useFormik({
    initialValues: {
      category: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await postCategory(values.category);
    },
  });

  return (
    <Stack
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Card sx={{ width: 587, borderRadius: 6 }}>
        <Stack>
          <Stack direction={"row"} gap={15} px={3} py={2}>
            <div className="py-1">
              <Image
                src={"/close.png"}
                alt=""
                width={32}
                height={20}
                onClick={() => {}}
              />
            </div>
            <Typography fontSize={24} fontWeight={700}>
              Create new category
            </Typography>
          </Stack>

          <Stack
            gap={3}
            p={3}
            borderTop={1}
            borderBottom={1}
            borderColor={"#E0E0E0"}
          >
            <Stack>
              <Typography fontWeight={500}>Category name</Typography>

              <TextField
                placeholder="placeholder"
                sx={{ bgcolor: "#F4F4F4" }}
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
              ></TextField>
            </Stack>
          </Stack>

          <Stack direction={"row"} gap={2} justifyContent={"end"} p={3}>
            <Typography fontSize={16} fontWeight={700} mt={0.7}>
              Clear
            </Typography>

            <Button
              sx={{ bgcolor: "#393939", color: "#FFF" }}
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Continue
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};
