"use client";

import { useFormik } from "formik";
import { useAuth } from "../providers/AuthProvider";
import * as yup from "yup";
import { CustomInput } from "../customs/CustomInput";
import { useRouter } from "next/navigation";
const validationSchema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
});

export const SignUp = () => {
  const { signUp } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp(values.email, values.name, values.password);
    },
  });

  return (
    <div className="w-full h-screen bg-white px-14 py-10 gap-10 flex flex-col">
      <div className="flex gap-1 justify-start">
        <img src="/pinecone.png" className="object-cover" />
      </div>
      <div className="flex h-[90%] justify-center items-center">
        <div className="flex flex-col border border-[#ECEDF0] px-6 py-8 gap-10 rounded-xl">
          <p className="text-[32px] font-bold flex justify-center">
            Бүртгүүлэх
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-normal">Таны нэр</p>
              <CustomInput
                type="text"
                placeholder="Нэр"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-normal">Таны имэйл</p>
              <CustomInput
                type="text"
                placeholder="Имэйл"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-normal">Таны нууц үг</p>
              <CustomInput
                type="password"
                placeholder="Нууц үг"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>

            <button
              type="submit"
              className="text-[18px] font-normal bg-black text-white py-4 rounded-lg"
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Дараах
            </button>
            <div className="py-6 border-y-2 border-[#ECEDF0] flex flex-col items-center gap-4 mt-2">
              <div className="flex gap-2 px-[88px] py-4 rounded-lg bg-[#F7F7F8] cursor-pointer">
                <img src="/google.png" className="object-cover" />
                <p className="text-[16px] font-normal">Google-ээр нэвтрэх</p>
              </div>

              <div className="flex gap-2 px-[78px] py-4 rounded-lg bg-[#F7F7F8] cursor-pointer">
                <img src="/micro.png" className="object-cover" />
                <p className="text-[16px] font-normal">Microsoft-оор нэвтрэх</p>
              </div>

              <div className="flex gap-2 px-[92px] py-4 rounded-lg bg-[#F7F7F8] cursor-pointer">
                <img src="/apple.png" className="object-cover" />
                <p className="text-[16px] font-normal">Apple-аар нэвтрэх</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <p className="text-[14px] text-[#525252] hover:font-semibold hover:border-b-2 border-black">
              Бүртгэлтэй юу?
            </p>
            <p
              className="text-[14px] text-[#525252] hover:font-semibold hover:border-b-2 border-black"
              onClick={() => {
                router.push("/auto/login");
              }}
            >
              Нэвтрэх
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
