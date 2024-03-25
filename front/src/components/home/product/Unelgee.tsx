import { Button, Card, TextField } from "@mui/material";
import { DetailHead } from "./DetailHead";
import { CustomInputSt } from "../../auto/CustomInputSt";
import { useData } from "../../providers/DataProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../../providers/AuthProvider";
import { useProduct } from "../../providers/ProductProvider";

const validationSchema = yup.object({
  comment: yup.string().required(),
});

export const Unelgee = () => {
  const { postComment } = useData();
  const { detail } = useProduct();
  const { user } = useAuth();
  console.log(user);

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      postComment(value.comment, detail?._id || "", user?._id || "");
    },
  });

  return (
    <div className="flex flex-col gap-14 ">
      <DetailHead />

      <div className="flex flex-col gap-4">
        <p className="text-[18px] text-[#1D3178] font-[800]">Үнэлгээ нэмэх</p>

        <Card>
          <div className="px-6 py-10 flex flex-col gap-8">
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
              <button
                type="submit"
                className="bg-[#FB2E86] py-2 px-5 rounded text-white text-[14px]"
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Үнэлэх
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
