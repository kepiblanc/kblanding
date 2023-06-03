import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import Logo from "@/components/common/Logo";
import ImageUpload from "./ImageUpload";
import SelectField from "@/components/ui/Input/SelectField/SelectField";
import TextField from "@/components/ui/Input/TextField/TextField";
import Button from "@/components/ui/Button/Button";
import { useFormik, Form, FormikProvider } from "formik";
import GuarantorsFormValidations from "@/validations/GuarantorsFormValidations";
import Container from "@/components/common/Container";
import { useSubmitGuarantorsFormMutation } from "@/api-services/guarantors";
import { verifyIsDigit } from "@/utils";
import { motion } from "framer-motion";

const initalValues: Record<string, string> = {
  full_name: "",
  phone_number: "",
  email: "",
  relationship: "",
  address: "",
  city: "",
  state: "",
  occupation: "",
};

interface Props {
  handleNextStep: () => void;
}

const StepTwo: FC<Props> = ({ handleNextStep }) => {
  const [image, setImage] = useState<File | null>(null);

  const router = useRouter();
  const { id } = router.query;

  const formik = useFormik({
    initialValues: initalValues,
    validationSchema: GuarantorsFormValidations,
    onSubmit: (values) => {
      const form = new FormData();
      if (!image) {
        toast.error("Please upload an image");
      } else {
        form.append("image", image);

        for (const key in values) {
          form.append(key, values[key]);
        }
        submitForm({ body: form, id: String(id) });
      }
    },
  });

  const [submitForm, { isLoading, isSuccess, isError, error }] =
    useSubmitGuarantorsFormMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Form Submitted Successfully");
      handleNextStep();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      if ("data" in error) {
        const { message }: any = error.data;
        toast.error(message);
      }
    }
  }, [error]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.4 },
      }}
      viewport={{ once: true }}
    >
      <Container>
        <div className="min-h-screen px-3">
          <div className="flex justify-center py-4 pt-6">
            <Logo />
          </div>

          <div className="max-w-[400px] mx-auto">
            <ImageUpload image={image} setImage={setImage} />

            <FormikProvider value={formik}>
              <Form>
                <div className="mt-4 flex flex-col gap-6 pb-12">
                  <TextField
                    label="Full Name"
                    required={true}
                    placeholder="John Doe"
                    {...formik.getFieldProps("full_name")}
                    error={
                      formik.touched.full_name ? formik.errors.full_name : ""
                    }
                  />
                  <TextField
                    label="Relationship with driver"
                    required={true}
                    placeholder="Mother"
                    {...formik.getFieldProps("relationship")}
                    error={
                      formik.touched.relationship
                        ? formik.errors.relationship
                        : ""
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
                      options={[{ label: "Lagos", value: "Lagos" }]}
                      required={true}
                      {...formik.getFieldProps("city")}
                      error={formik.touched.city ? formik.errors.city : ""}
                    />
                    <SelectField
                      options={[{ label: "lagos", value: "lagos" }]}
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
                      formik.touched.phone_number
                        ? formik.errors.phone_number
                        : ""
                    }
                    onChange={(e) => {
                      if (verifyIsDigit(e.target.value)) {
                        formik.setFieldValue("phone_number", e.target.value);
                      }
                    }}
                  />

                  <TextField
                    label="Email"
                    required={true}
                    placeholder="Email here"
                    {...formik.getFieldProps("email")}
                    error={formik.touched.email ? formik.errors.email : ""}
                  />

                  <Button
                    title="Submit"
                    size="large"
                    className=""
                    type="submit"
                    loading={isLoading}
                    disabled={!id || isLoading}
                  />
                </div>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default StepTwo;
