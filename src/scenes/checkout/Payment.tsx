import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
export interface PaymentType {
    values : any, touched, errors, handleBlur, handleChange }
}

const Payment = ({ values, touched, errors, handleBlur, handleChange } : any) => {
  return (
    <Box m="30px 0">
      <Typography sx={{ mb: "15px" }} fontSize="18px">
        Contact Info
      </Typography>
      <TextField
        fullWidth
        type="text"
        label="Email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name="email"
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.email}
        sx={{ gridColumn: "span 4", marginBottom: "15px" }}
      />
    </Box>
  );
};

export default Payment;
