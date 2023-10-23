import React from "react";
import { Input, Select } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";

const ReactHookSelectForm = ({ name, control, defaultValue, children }) => {
  return (
    <div>
      <form>
        <Controller
          as={<Select>{children}</Select>}
          name={name}
          control={control}
          defaultValue={defaultValue}
        />
      </form>
    </div>
  );
};

export default ReactHookSelectForm;
