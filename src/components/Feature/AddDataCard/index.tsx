import { FC } from 'react';
import { Formik, Form } from 'formik';
import {
  AddDataFormType,
  initialValues,
  validationSchema,
} from './helpers/formik';
import { Button } from '@/components/base/Button';

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
        return (
          <Form className="w-full max-w-[888px] border border-secondary rounded text-white">
            <div className="p-4">
              <h2 className="text-2xl font-bold">Add data</h2>
            </div>
            <div className="w-full h-full">
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2">
                  {/* TODO character chooser */}
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
