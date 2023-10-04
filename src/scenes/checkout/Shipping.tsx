
import React from 'react'
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
// import AddressForm from "./AddressForm";

const Shipping = () => {
  return (
    <Box m="30px auto">
    {/* BILLING FORM */}
    <Box>
      <Typography sx={{ mb: "15px" }} fontSize="18px">
        Billing Information
      </Typography>
      <AddressForm
        type="billingAddress"
        values={values.billingAddress}
        touched={touched}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </Box>
  )
}

export default Shipping