import { FC } from 'react';
import { Select, SelectProps } from '../base/Select';
import { useField } from 'formik';

export type FormikSelectProps = SelectProps & {};

export const FormikSelect: FC<FormikSelectProps> = ({ name, ...props }) => {
  const [{ onChange, ...field }, meta, helpers] = useField(name);

  return (
    <Select {...field} onChange={(val) => helpers.setValue(val)} {...props} />
  );
};
