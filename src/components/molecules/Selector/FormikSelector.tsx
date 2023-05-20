import { useField } from 'formik';
import { FC } from 'react';
import { Selector, SelectorProps } from '.';

export type FormikSelectorProps = Omit<SelectorProps, 'onChange'> & {
  onChange?: SelectorProps['onChange'];
};

export const FormikSelector: FC<FormikSelectorProps> = ({
  name,
  onChange: _,
  ...props
}) => {
  const [{ onChange, ...field }, meta, helper] = useField(name);

  return <Selector {...field} onChange={helper.setValue} {...props} />;
};
