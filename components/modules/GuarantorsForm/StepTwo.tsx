import React, { FC } from "react";

import Logo from "@/components/common/Logo";
import ImageUpload from "./ImageUpload";
import SelectField from "@/components/ui/Input/SelectField/SelectField";
import TextField from "@/components/ui/Input/TextField/TextField";
import Button from "@/components/ui/Button/Button";
import { useFormik, Form, FormikProvider } from "formik";
import GuarantorsFormValidations from "@/validations/GuarantorsFormValidations";

const initalValues = {
  full_name: "",
  phone_number: "",
  email: "",
  relationship: "",
  address: "",
  city: "",
  state: "",
  occupation: "",
};

const StepTwo: FC = () => {
  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: GuarantorsFormValidations,
    onSubmit: (values) => {},
  });

  return (
    <div className="min-h-screen">
      <div className="flex justify-center py-4 pt-6">
        <Logo />
      </div>

      <div className="max-w-[400px] mx-auto">
        <ImageUpload />

        <FormikProvider value={formik}>
          <Form>
            <div className="mt-4 flex flex-col gap-6 pb-12">
              <TextField
                label="Full Name"
                required={true}
                placeholder="John Doe"
                {...formik.getFieldProps("full_name")}
                error={formik.touched.full_name ? formik.errors.full_name : ""}
              />
              <TextField
                label="Relationship with driver"
                required={true}
                placeholder="Mother"
                {...formik.getFieldProps("relationship")}
                error={
                  formik.touched.relationship ? formik.errors.relationship : ""
                }
              />
              <TextField
                label="Occupation"
                required={true}
                placeholder="Banker"
                {...formik.getFieldProps("occupation")}
                error={
                  formik.touched.occupation ? formik.errors.occupation : ""
                }
              />
              <TextField
                label="House Address"
                required={true}
                placeholder="House address here"
                {...formik.getFieldProps("address")}
                error={formik.touched.address ? formik.errors.address : ""}
              />

              <div className="flex justify-between gap-3">
                <SelectField
                  label="City"
                  placeholder="City here"
                  required={true}
                  {...formik.getFieldProps("city")}
                  error={formik.touched.city ? formik.errors.city : ""}
                />
                <SelectField
                  label="State"
                  required={true}
                  placeholder="State here"
                  {...formik.getFieldProps("state")}
                  error={formik.touched.state ? formik.errors.state : ""}
                />
              </div>

              <TextField
                label="Phone"
                required={true}
                placeholder="234 000 000 000"
                {...formik.getFieldProps("phone_number")}
                error={
                  formik.touched.phone_number ? formik.errors.phone_number : ""
                }
              />

              <Button title="Submit" size="large" className="" type="submit"/>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default StepTwo;
