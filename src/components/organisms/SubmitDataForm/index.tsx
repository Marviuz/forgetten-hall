import { Formik, Form, FieldArray } from 'formik';
import { FC, SyntheticEvent } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { IconButton } from '@/components/atoms/IconButton';
import { FormikSelect } from '@/components/atoms/Select/FormikSelect';
import { Text } from '@/components/atoms/Text';
import { FormikSelector } from '@/components/molecules/Selector/FormikSelector';
import { HALLS } from '@/constants/Halls';
import CHARACTERS from '@/constants/characters';
import {
  SubmitDataFormName,
  SubmitDataFormType,
  initialValues,
  validationSchema,
} from './helpers/formik';

export type SubmitDataFormProps = {
  onSubmit: (formData: SubmitDataFormType) => void;
  onClose: (evt: SyntheticEvent) => void;
};

export const SubmitDataForm: FC<SubmitDataFormProps> = ({
  onSubmit,
  onClose,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, touched, isValid }) => {
        const selected = [
          ...values[SubmitDataFormName.Team1],
          ...values[SubmitDataFormName.Team2],
        ].map((_) => _.value);

        const filteredOptions = CHARACTERS.map((val) => ({
          src: val.img,
          value: val.name,
          label: val.name,
          disabled: selected.includes(val.name),
        }));

        return (
          <Form>
            <Card className="w-full max-h-[calc(100vh-32px)] overflow-auto overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-secondary">
                <Text as="h2" className="text-2xl font-bold">
                  Submit your run
                </Text>

                <IconButton onClick={onClose}>
                  <AiOutlineClose />
                </IconButton>
              </div>
              <div className="w-full">
                <div className="p-4">
                  <div className="w-60">
                    <FormikSelect
                      name={SubmitDataFormName.Hall}
                      options={HALLS}
                    />
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex flex-col gap-2">
                    <Text as="h3" variant="h6">
                      Team 1
                    </Text>
                    <div className="flex justify-between gap-2">
                      <FieldArray
                        name={SubmitDataFormName.Team1}
                        render={(arrayHelper) =>
                          values[SubmitDataFormName.Team1].map((_, i) => (
                            <FormikSelector
                              label="Characters"
                              key={i}
                              name={`${SubmitDataFormName.Team1}.${i}`}
                              options={filteredOptions}
                            />
                          ))
                        }
                      />
                    </div>
                    <Text as="h3" variant="h6">
                      Team 1
                    </Text>
                    <div className="flex justify-between gap-2">
                      <FieldArray
                        name={SubmitDataFormName.Team2}
                        render={(arrayHelper) =>
                          values[SubmitDataFormName.Team2].map((_, i) => (
                            <FormikSelector
                              label="Characters"
                              key={i}
                              name={`${SubmitDataFormName.Team2}.${i}`}
                              options={filteredOptions}
                            />
                          ))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-end">
                  <Button type="submit" disabled={touched && !isValid}>
                    <Text className="text-current">Submit</Text>
                  </Button>
                </div>
              </div>
            </Card>
          </Form>
        );
      }}
    </Formik>
  );
};
