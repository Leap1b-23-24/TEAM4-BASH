"use client";

import { Card, Container } from "@mui/material";
import { CustomInput } from "../customs/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../providers/AuthProvider";
import { useRouter } from "next/navigation";

const data = ["Home", "Pages", "My Account"];

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passAgain: yup.string().required(),
});

export const UserSignUp = () => {
  const { signUp } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passAgain: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp(values.email, values.password, values.passAgain);
    },
  });

  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <Container sx={{ py: 6 }}>
          <p className="text-[24px] font-[800] text-[#101750]">Бүртгүүлэх</p>
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
        <Container
          sx={{
            py: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Card
            sx={{
              p: 2,
              width: 440,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              paddingY: 3,
              paddingX: 3,
              bgcolor: "#FFF",
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <p className="text-[30px] font-[800] text-[#000]">Бүртгүүлэх</p>
              <p className="text-[15px] font-[400] text-[#9096B2]">
                Доорх мэдээллийг бөглөнө үү
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <CustomInput
                type="text"
                placeholder="Имэйл хаяг"
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
                placeholder="Нууц үг"
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

              <CustomInput
                type="text"
                placeholder="Нууц үг давтах"
                name="passAgain"
                size="small"
                value={formik.values.passAgain}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.passAgain && Boolean(formik.errors.passAgain)
                }
                helperText={formik.touched.passAgain && formik.errors.passAgain}
              />

              <p className="text-[15px] text-[#9096B2] font-[400] text-center hover:font-[700] hover:text-[#101750] cursor-pointer">
                Нууц үгээ мартсан
              </p>
            </div>

            <button
              className="bg-[#FB2E86] py-[9px] text-white text-[17px] font-[700] rounded"
              type="button"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Бүртгүүлэх
            </button>

            <p
              className="text-[#9096B2] font-[400] text-[15px] flex justify-center hover:font-[700] hover:text-[#101750] cursor-pointer"
              onClick={() => {
                router.push("/home/auto/login");
              }}
            >
              Нэвтрэх хэсэг
            </p>
          </Card>
          <p
            className="text-[#9096B2] font-[400] text-[14px] flex justify-center hover:border-b border-[#9096B2] cursor-pointer hover:font-[700] hover:text-[#101750]"
            onClick={() => {
              router.push("/auto/login");
            }}
          >
            мерчант нэвтрэх
          </p>
        </Container>
      </div>
    </div>
  );
};
