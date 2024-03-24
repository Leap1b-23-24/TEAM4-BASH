import { Button, Card, TextField } from "@mui/material";
import { DetailHead } from "./DetailHead";
import { CustomInputSt } from "../../auto/CustomInputSt";
import { useData } from "../../providers/DataProvider";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  // star1: yup.string().required(),
  // star2: yup.string().required(),
  // star3: yup.string().required(),
  // star4: yup.string().required(),
  // star5: yup.string().required(),
  comment: yup.string().required(),
});

export const Unelgee = () => {
  const { postReview } = useData();

  const formik = useFormik({
    initialValues: {
      // star1: "",
      // star2: "",
      // star3: "",
      // star4: "",
      // star5: "",
      comment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      postReview(
        // value.star1,
        // value.star2,
        // value.star3,
        // value.star4,
        // value.star5,
        value.comment
      );
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
              {/* <button
                type="submit"
                className="bg-[#FB2E86] py-2 px-5 rounded text-white text-[14px]"
                onClick={() => {
                  formik.handleSubmit();
                }}
              >
                Үнэлэх
              </button> */}

              <Button
                onClick={() => {
                  formik.handleSubmit();
                  // alert();
                }}
                sx={{ border: 2 }}
                disabled={!formik.values.comment}
                disableElevation
              >
                Үнэлэх
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
