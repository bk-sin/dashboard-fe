import { type ReactNode } from "react";
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
import { Checkbox } from "../ui/checkbox";

type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "checkbox";

interface ControlledFormFieldProps<TFieldValues extends FieldValues>
  extends Omit<InputProps, "type"> {
  name: Path<TFieldValues>;
  label: ReactNode;
  type?: FieldType;
}

export const ControlledFormField = <TFieldValues extends FieldValues>({
  name,
  label,
  type = "text",
  ...props
}: ControlledFormFieldProps<TFieldValues>) => {
  const { control } = useFormContext<TFieldValues>();

  if (type === "checkbox") {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={props.disabled}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>{label}</FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    );
  }

  const renderInput = (
    field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>,
  ) => {
    switch (type) {
      case "password":
        return <PasswordInput {...props} {...field} />;
      default:
        return <Input type={type} {...props} {...field} />;
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label as string}</FormLabel>
          <FormControl>{renderInput(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
