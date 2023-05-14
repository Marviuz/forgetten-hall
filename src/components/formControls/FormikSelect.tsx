import { useField } from 'formik';
import { FC } from 'react';
import { Select, SelectProps } from '../base/Select';

export type FormikSelectProps = SelectProps & {};

export const FormikSelect: FC<FormikSelectProps> = ({ name, ...props }) => {
  const [{ onChange, ...field }, meta, helpers] = useField(name);

  return (
    <Select {...field} onChange={(val) => helpers.setValue(val)} {...props} />
  );
};
