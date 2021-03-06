import * as React from "react";

interface Props {
  children: React.ReactNode;
  label: React.ReactNode;
  fieldId: string;
}

export const FormField = ({ children, label, fieldId }: Props) => {
  return (
    <div id={`field-${fieldId}`} className="formField">
      <label htmlFor={fieldId}>{label}</label>
      {children}
    </div>
  );
};
