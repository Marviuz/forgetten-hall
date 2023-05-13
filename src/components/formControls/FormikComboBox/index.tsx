import { ComponentProps, FC } from 'react';
import { Combobox } from '../../Feature/Combobox';
import { useField } from 'formik';

export type FormikComboboxProps = ComponentProps<typeof Combobox> & {
  name: string;
};

export const FormikCombobox: FC<FormikComboboxProps> = ({ name, ...props }) => {
  const [{ onChange, ...field }, meta, helpers] = useField(name);

  const handleChange = (str: string) => {
    helpers.setValue(str);
  };

  return <Combobox {...field} onChange={handleChange} {...props}></Combobox>;
};
