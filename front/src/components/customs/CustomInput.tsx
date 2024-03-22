import { TextField, TextFieldProps } from "@mui/material";

type CustomInputProps = {} & TextFieldProps;

export const CustomInput = (props: CustomInputProps) => {
  const { type = "text", size, ...rest } = props;

  return (
    <TextField
      {...rest}
      sx={{
        background: size === "small" ? "#FFF" : "#F7F7F8",
        width: "full",
      }}
      inputProps={{
        style: {
          padding: "10px",
        },
      }}
    >
      {props.children}
    </TextField>
  );
};
