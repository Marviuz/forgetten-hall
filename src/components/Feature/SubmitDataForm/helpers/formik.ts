import { InferType, array, object, string } from 'yup';

export enum SubmitDataFormName {
  Team1 = 'team1',
  Team2 = 'team2',
}

const initialValue = {
  src: '',
  value: '',
  label: '',
};

export const initialValues = {
  [SubmitDataFormName.Team1]: [
    initialValue,
    initialValue,
    initialValue,
    initialValue,
  ],
  [SubmitDataFormName.Team2]: [
    initialValue,
    initialValue,
    initialValue,
    initialValue,
  ],
};

const valueSchema = array(
  object({
    src: string(),
    value: string(),
    label: string(),
  })
).test(
  'at-least-one-required',
  '${path} must have at least one non-empty field',
  (obj) => obj?.some((val) => val.value)
);

export const validationSchema = object({
  [SubmitDataFormName.Team1]: valueSchema,
  [SubmitDataFormName.Team2]: valueSchema,
});

export type SubmitDataFormType = InferType<typeof validationSchema>;
