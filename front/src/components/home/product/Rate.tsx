import { Button, Card, Rating, Stack } from "@mui/material";
import { CustomInputSt } from "../../auto/CustomInputSt";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../../providers/AuthProvider";
import { useProduct } from "../../providers/ProductProvider";
import { useEffect, useState } from "react";
import { api } from "@/src/common";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const validationSchema = yup.object({
  comment: yup.string().required(),
});

type AllUnelgeeProps = {
  productId?: string;
};

type User = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  userImage: string;
};

export type Comment = {
  _id: string;
  productId: string | undefined;
  userId: User;
  comment: string;
  createdAt: Date;
  star: number;
};

export const Unelgee = (props: AllUnelgeeProps) => {
  const [allComment, setAllComment] = useState<Comment[]>([]);
  const [star, setStar] = useState<number | null>(0);
  const [refresh, setRefresh] = useState(1);
  const { detail } = useProduct();
  const { user } = useAuth();
  const { productId } = props;

  const postComment = async (
    comment: string,
    productId: string,
    userId: string,
    star: number | null
  ) => {
    try {
      const { data } = await api.post(
        "/comment/rate",
        {
          comment,
          productId,
          userId,
          star,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message, {
        position: "top-center",
      });

      setRefresh(refresh + 1);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
          position: "top-center",
        });
      }
    }
  };

  const getAllComment = async (productId: string | undefined) => {
    try {
      const { data } = await api.post("/comment/all", { productId });

      setAllComment(data);
    } catch (err) {
      console.log(err);
    }
  };

  const starReview = async (
    star: number | null,
    productId: string | undefined
  ) => {
    try {
      await api.post(
        "/product/star",
        {
          star,
          productId,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getReview = async () => {
    try {
      const { data } = await api.get("/review/get", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setStar(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllComment(productId);
    getReview();
  }, [refresh]);

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (value) => {
      await postComment(
        value.comment,
        detail?._id || "",
        user?._id || "",
        star
      );
      await starReview(star, productId);
      await getAllComment(productId);
    },
  });

  // const productComment = allComment.filter(
  //   (item) => item.productId == productId
  // );

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[18px] text-[#1D3178] font-[800]">Үнэлгээ нэмэх</p>

      <Card>
        <div className="px-6 py-10 flex flex-col gap-8">
          <Stack
            spacing={1}
            sx={{ borderBottom: 1, pb: 2, borderColor: "#BFC6E0" }}
          >
            <Rating
              name="rating"
              value={star}
              onChange={(event, newValue) => {
                setStar(newValue);
              }}
            />
          </Stack>

          <CustomInputSt
            type="text"
            placeholder="Сэтгэгдэл бичих"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.comment && Boolean(formik.errors.comment)}
            helperText={formik.touched.comment && formik.errors.comment}
          />

          <div className="flex justify-end">
            <Button
              disableElevation
              disabled={!formik.values.comment || !star}
              onClick={() => {
                formik.handleSubmit();
              }}
              sx={{
                border: 1,
                px: 2,
                fontSize: 12,
                backgroundColor: "primary",
              }}
            >
              Үнэлэх
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex flex-col gap-4 py-10">
        <p className="text-[18px] font-[800] text-[#1D3178]">Нийт үнэлгээ:</p>

        <Card sx={{ p: 3 }}>
          {allComment.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4 py-4">
                <Stack>
                  <Rating name="rating" value={item.star} readOnly />
                </Stack>
                <p className="text-[18px] font-[800] text-[#1D3178]">
                  {item.userId.name}
                </p>
                <p className="text-[17px] text-[#9295AA] font-normal">
                  {item.comment}
                </p>
                <p className="border-dashed border-b-2 border-[#BFC6E0] w-full"></p>
              </div>
            );
          })}
        </Card>
      </div>
    </div>
  );
};
