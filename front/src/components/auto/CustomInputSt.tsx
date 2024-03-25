import { TextField, TextFieldProps } from "@mui/material";

type Standart = {} & TextFieldProps;

export const CustomInputSt = (props: Standart) => {
  const { type = "text", ...rest } = props;

  return (
    <TextField variant="standard" {...rest} className="w-full">
      {props.children}
    </TextField>
  );
};
