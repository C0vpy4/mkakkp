import React from "react";
import { Text } from "./components/Text";
import { Form } from "./components/Form";

export const FormSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-y-10 md:gap-x-20 px-4 py-8 md:p-12">
      <Text />
      <Form />
    </div>
  );
};
