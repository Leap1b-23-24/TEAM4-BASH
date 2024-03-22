"use client";

import { FacebookOutlined, FavoriteBorder } from "@mui/icons-material";
import { Card, Container } from "@mui/material";
import { CustomInput } from "../customs/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../providers/AuthProvider";

const data = ["Home", "Pages", "My Account"];

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const UserLogin = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <Container sx={{ py: 10 }}>
          <p className="text-[36px] font-[800] text-[#101750]">Нэвтрэх</p>
          <div className="flex gap-2">
            {data.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-[16px] font-[500] hover:text-[#FB2E86] "
                >
                  {item}
                </p>
              );
            })}
          </div>
        </Container>
      </div>

      <div className="bg-white">
        <Container sx={{ py: 20, display: "flex", justifyContent: "center" }}>
          <Card
            sx={{
              p: 2,
              width: 500,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              padding: 6,
              bgcolor: "#FFF",
            }}
          >
            <div className="flex flex-col items-center">
              <p className="text-[32px] font-[800] text-[#000]">Login</p>
              <p className="text-[17px] font-[400] text-[#9096B2]">
                Please login using account detail bellow.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <CustomInput
                type="text"
                placeholder="Email Address"
                name="email"
                size="small"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <CustomInput
                type="text"
                placeholder="Password"
                name="password"
                size="small"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <p className="text-[17px] text-[#9096B2] font-[400]">
                Forgot your password?
              </p>
            </div>

            <button
              className="bg-[#FB2E86] py-[9px] text-white text-[17px] font-[700] rounded-md"
              type="button"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Sign In
            </button>

            <p className="text-[#9096B2] font-[400] text-[17px] flex justify-center">
              Don’t have an Account?Create account
            </p>
          </Card>
        </Container>
      </div>
    </div>
  );
};
