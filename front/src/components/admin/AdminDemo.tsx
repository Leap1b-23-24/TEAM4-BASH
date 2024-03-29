"use client";

import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { AdminScroll } from "./AdminScroll";
import { useProduct } from "../providers/ProductProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../providers/AuthProvider";
import { redirect, useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  address: yup.string().required(),
  info: yup.string().required(),
  city: yup.string().required(),
});

export const AdminDemo = () => {
  const { postAddress, toCart, setToCart } = useProduct();
  const { user } = useAuth();

  const router = useRouter();
  const sum = toCart.reduce((currentValue, total) => {
    return currentValue + Number(total.sel.mainPrice * total.count);
  }, 0);

  const ids = toCart.map((item) => {
    item.sel._id, item.count;
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      info: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await postAddress({
        deliveryAdd: values,
        toCart,
        sumPaid: sum,
        createdAt: new Date(),
        status: "shine",
      });
      setToCart([]);
    },
  });

  if (!user) {
    redirect("/home");
    return <div>No user</div>;
  }

  return (
    <div className="w-[full] h-[full] bg-[white]">
      <div className="bg-[#F6F5FF] py-8">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="w-[full] ">
            <div className="flex flex-row gap-1">
              <p className="text-base">Home</p>
              <p className=" text-base text-[#FB2E86]">. Order Complete</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[white] w-full py-14">
        <Container>
          <div className="w-full h-[full] flex flex-col gap-8">
            <p className="text-[24px] text-[#1D3178] font-[800]">Hekto Demo</p>
            <p className="text-[12px] text-[#1D3178] font-normal">
              Cart/ Information/ Shipping/ Payment
            </p>
            <div className="flex flex-row gap-8 w-full">
              <div className="flex flex-col gap-20 w-[70%] h-full py-24 rounded px-10 justify-center bg-[#F8F8FD]">
                <div className="flex flex-col w-[full] gap-4">
                  <p className="text-[#1D3178] text-[18px] font-bold font-[800]">
                    Contact Information
                  </p>

                  <div className="flex flex-col w-[full] gap-6">
                    <TextField
                      id="standard"
                      label="Email or mobile phone number"
                      variant="standard"
                      sx={{
                        width: "full",
                        color: "#F8F8FD",
                      }}
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Keep me up to date on news and excluive offers"
                      sx={{ color: "#8A91AB", font: "12px" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[full] gap-4">
                  <p className="text-[#1D3178] text-[18px] font-bold font-bold">
                    Shipping address
                  </p>
                  <div className="flex flex-col w-[full] gap-6">
                    <div className="flex flex-row  w-[full] gap-5">
                      <TextField
                        id="standard"
                        label="First name"
                        variant="standard"
                        sx={{ width: "50%", color: "#F8F8FD" }}
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                      />
                      <TextField
                        id="standard"
                        label="Last name"
                        variant="standard"
                        sx={{ width: "50%", color: "#F8F8FD" }}
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                      />
                    </div>

                    <div className="flex flex-row gap-8">
                      <TextField
                        id="standard"
                        label="Address"
                        variant="standard"
                        sx={{ width: "full", color: "#F8F8FD" }}
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.address &&
                          Boolean(formik.errors.address)
                        }
                        helperText={
                          formik.touched.address && formik.errors.address
                        }
                      />
                      <TextField
                        id="standard"
                        label="City"
                        variant="standard"
                        sx={{ width: "full", color: "#F8F8FD" }}
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.city && Boolean(formik.errors.city)
                        }
                        helperText={formik.touched.city && formik.errors.city}
                      />
                    </div>

                    <TextField
                      id="standard"
                      label="Addition Info"
                      variant="standard"
                      sx={{ width: "full", color: "#F8F8FD" }}
                      name="info"
                      value={formik.values.info}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.info && Boolean(formik.errors.info)}
                      helperText={formik.touched.info && formik.errors.info}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-start w-[30%]">
                  <Button
                    onClick={() => {
                      formik.handleSubmit();
                    }}
                    disableElevation
                    disabled={
                      !formik.values.email ||
                      !formik.values.firstName ||
                      !formik.values.lastName ||
                      !formik.values.address ||
                      !formik.values.city ||
                      !formik.values.info
                    }
                    sx={{ border: 1 }}
                  >
                    Continue Shipping
                  </Button>
                </div>
              </div>

              <div className="flex flex-col w-[40%] gap-10">
                <div className="w-[full] flex flex-col overflow-scroll relative overflow-hidden gap-5	">
                  {toCart.map((item, index) => {
                    return (
                      <AdminScroll
                        key={index}
                        id={item.sel._id}
                        image={item.sel.productImage[0]}
                        label={item.sel.productName}
                        color={item.sel.color[0]}
                        price={item.sel.mainPrice * item.count}
                      />
                    );
                  })}
                </div>

                <div className="w-[full] p-6 bg-[#F4F4FC] justify-center gap-5 rounded">
                  <div className="border-b-[2px] text-[#151875] flex flex-row py-2">
                    <p className="text-[18px] text-[#1D3178] w-[70%] px-2">
                      Төлөх дүн:
                    </p>

                    <p className="text-[20px] font-bold text-[#151875] w-[20%] px-1 whitespace-nowrap">
                      {Intl.NumberFormat().format(sum)}₮
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
