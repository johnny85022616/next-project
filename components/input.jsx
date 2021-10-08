import TextField from "@mui/material/TextField";

export default function Input({onChange , value , error , label}) {
  let placeholder = `Please Enter ${label}`
  return (  
      <TextField
        label={label}
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={onChange}
        value={value || ""}
        placeholder={placeholder}
        error={!!error}
        helperText={error ? error.message : null}
      />
  )
}
