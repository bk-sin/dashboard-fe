import {
  useFormContext,
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input, PasswordInput } from "../ui/input";
import type { InputProps } from "../ui/input";

type FieldType = "text" | "email" | "password" | "number";

interface ControlledFormFieldProps<TFieldValues extends FieldValues>
  extends InputProps {
  name: Path<TFieldValues>;
  label: string;
  type?: FieldType;
}

export const ControlledFormField = <TFieldValues extends FieldValues>({
  name,
  label,
  type = "text",
  ...inputProps
}: ControlledFormFieldProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();

  const renderInput = (
    field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>,
  ) => {
    switch (type) {
      case "password":
        return <PasswordInput {...inputProps} {...field} />;
      default:
        return <Input type={type} {...inputProps} {...field} />;
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderInput(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
