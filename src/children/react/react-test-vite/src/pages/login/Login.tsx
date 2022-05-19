import {
  Box,
  Image,
  Stack,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { useAppDispatch } from "../../store/hooks";
import { getStaticFilePath } from "../../utils";
import { validate } from "schema-utils";
import * as Yup from "yup";

export default function Login() {
  const SignupSchema = Yup.object().shape({
    username: Yup.string().required("required"),
    password: Yup.string().required("required"),
    age: Yup.string().max(150, "Too max!!!"),
    email: Yup.string().email("请输入正确的email!").required("required"),
  });
  const handleSubmit = async ({ values, actions }: any) => {
    console.log(values, "values");
    try {
      const baseurl = `http://localhost:3000`;
      const options: RequestInit = {
        method: "post",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(values),
      };
      // const params = new URLSearchParams();
      // Object.entries(values).forEach(([key, value], index) => {
      //   params.append(key, (value as string).toString());
      // });
      const res = await fetch(baseurl + `/user/login`, options);
      console.log(res, "response");
    } catch (error) {
      console.error(error);
    }
    actions.setSubmitting(false);
  };
  return (
    <Box
      w="100%"
      h="100vh"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      boxSizing="border-box"
      flexWrap={"nowrap"}
      flexDirection="column"
      color="gray.900"
      bgImg={getStaticFilePath("img", "27", "jpg")}
      bgSize="cover"
    >
      <Text fontSize={30} fontWeight={800}>
        This is the Box Login
      </Text>
      <Box>
        <VStack spacing={4} align="stretch">
          <Formik
            initialValues={{
              username: "",
              password: "",
              age: "",
              email: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => handleSubmit({ values, actions })}
          >
            {(props) => (
              <Form>
                <Field name="username">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input
                        {...field}
                        id="username"
                        placeholder="username"
                      ></Input>
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...field}
                        id="password"
                        placeholder="password"
                      ></Input>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="age">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel htmlFor="age">Age</FormLabel>
                      <Input {...field} id="age" placeContent="age"></Input>
                    </FormControl>
                  )}
                </Field>

                <Field name="email" type="email">
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input {...field} id="email" placeholder="email"></Input>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </VStack>
      </Box>
    </Box>
  );
}
