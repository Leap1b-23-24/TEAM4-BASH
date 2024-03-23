"use client";

import { Container } from "@mui/material";
import { CustomInput } from "../customs/CustomInput";
import { useAuth } from "../providers/AuthProvider";
import { useFormik } from "formik";
import * as yup from "yup";

const data = [
  "Хувцас",
  "Камер, хэрэгсэл",
  "Ухаалаг утас, таблет",
  "Чихэвч",
  "Гэр ахуйн бараа",
];
const label = ["Бидний тухай", "Холбоо барих", "Түгээмэл асуулт хариулт"];

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passAgain: yup.string().required(),
});

export const AdminHomeFooter = () => {
  const { signUp } = useAuth();

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
    <div className="py-24 bg-[#EEEFFB]">
      <Container
        sx={{
          display: "flex",
          gap: 24,
        }}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[38px] font-[800]">eCommerce</p>

          <div className="">
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
            <button className="bg-[#FB2E86] py-[8px] px-3 rounded text-[16px] font-[500] text-[#EEEFFB]">
              Бүртгүүлэх
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-normal text-[#8A8FB9]">Хаяг</p>
            <p className="text-[16px] font-normal text-[#8A8FB9]">
              Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
              Гурван гол - 401 тоот
            </p>
          </div>
        </div>
        <div className="flex gap-24">
          <div className="flex flex-col gap-7">
            <p className="text-[22px] font-[800]">Ангилал</p>
            <div className="flex flex-col gap-4  whitespace-nowrap">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="text-[16px] font-normal text-[#8A8FB9]"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <p className="text-[22px] font-[800]">Бусад</p>
            <div className="flex flex-col gap-4">
              {label.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="text-[16px] font-normal text-[#8A8FB9] whitespace-nowrap"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
