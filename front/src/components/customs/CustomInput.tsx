// type CustomInputProps = {
//   placeholder: string;
//   type: string;
// };

// export const CustomInput = (props: CustomInputProps) => {
//   const { placeholder, type = "text", ...rest } = props;

//   return (
//     <div>
//       <input
//         placeholder={placeholder}
//         type="text"
//         {...rest}
//         className="w-full bg-[#F7F7F8] rounded-lg py-2 pl-3 border-2"
//       />
//     </div>
//   );
// };

import { Stack, TextField, TextFieldProps } from "@mui/material";

type CustomInputProps = {} & TextFieldProps;

export const CustomInput = (props: CustomInputProps) => {
  const { type = "text", size, ...rest } = props;

  return (
    <TextField
      {...rest}
      sx={{
        background: "#F7F7F8",
        width: "full",
      }}
      inputProps={{
        style: {
          padding: "10px",
        },
      }}
    />
  );
};
