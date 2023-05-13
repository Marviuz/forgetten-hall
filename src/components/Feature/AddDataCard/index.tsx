import { FC } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { ComboboxProps } from '../Combobox';
import {
  AddDataFormNames,
  AddDataFormType,
  initialValues,
  validationSchema,
} from './helpers/formik';
import { FormikCombobox } from '@/components/formControls/FormikComboBox';
import { Button } from '@/components/base/Button';

export type AddDataCardProps = {
  options: ComboboxProps['options'];
  onSubmit: (formData: AddDataFormType) => void;
};

export const AddDataCard: FC<AddDataCardProps> = ({
  options,
  onSubmit,
  ...props
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form className="w-full max-w-[600px] border border-secondary rounded text-white">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Add data</h2>
          </div>
          <div className="w-full h-full">
            <div className="p-4">
              <div className="grid grid-cols-4 gap-2">
                <FieldArray
                  name={AddDataFormNames.Team1}
                  render={(arrayHelpers) => (
                    <>
                      {values[AddDataFormNames.Team1].map((char, index) => (
                        <FormikCombobox
                          key={index}
                          placeholder={`Team 1 Character ${index + 1}`}
                          options={options}
                          name={`${AddDataFormNames.Team1}.${index}`}
                        />
                      ))}

                      {values[AddDataFormNames.Team2].map((char, index) => (
                        <FormikCombobox
                          key={index}
                          placeholder={`Team 2 Character ${index + 1}`}
                          options={options}
                          name={`${AddDataFormNames.Team2}.${index}`}
                        />
                      ))}
                    </>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
