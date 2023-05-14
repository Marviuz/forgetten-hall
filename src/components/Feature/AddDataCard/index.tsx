import { FC } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import {
  AddDataFormNames,
  AddDataFormType,
  initialValues,
  validationSchema,
} from './helpers/formik';
import { Button } from '@/components/base/Button';
import { FormikSelector } from '@/components/formControls/FormikSelector';
import CHARACTERS from '@/constants/characters';

export type AddDataCardProps = {
  onSubmit: (formData: AddDataFormType) => void;
};

export const AddDataCard: FC<AddDataCardProps> = ({ onSubmit, ...props }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => {
        const selected = [
          ...values[AddDataFormNames.Team1],
          ...values[AddDataFormNames.Team2],
        ].map((_) => _.value);

        const filteredOptions = CHARACTERS.map((val) => ({
          src: val.img,
          value: val.name,
          label: val.name,
        })).filter((opt) => !selected.includes(opt.value));

        return (
          <Form className="text-white border rounded border-secondary">
            <div className="p-4">
              <h2 className="text-2xl font-bold">Add data</h2>
            </div>
            <div className="w-full h-full">
              <div className="p-4">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <FieldArray
                      name={AddDataFormNames.Team1}
                      render={(arrayHelper) => {
                        return (
                          <>
                            {values[AddDataFormNames.Team1].map((_, i) => (
                              <FormikSelector
                                key={i}
                                name={`${AddDataFormNames.Team1}.${i}`}
                                options={filteredOptions}
                              />
                            ))}
                          </>
                        );
                      }}
                    />
                  </div>
                  <div className="flex gap-2">
                    <FieldArray
                      name={AddDataFormNames.Team2}
                      render={(arrayHelper) => (
                        <>
                          {values[AddDataFormNames.Team2].map((_, i) => (
                            <FormikSelector
                              key={i}
                              name={`${AddDataFormNames.Team2}.${i}`}
                              options={filteredOptions}
                            />
                          ))}
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
