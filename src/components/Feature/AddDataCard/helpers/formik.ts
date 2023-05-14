import { InferType, array, object, string } from 'yup';

export enum AddDataFormNames {
  Team1 = 'team1',
  Team2 = 'team2',
}

const initialValue = {
  src: '',
  value: '',
  label: '',
};

export const initialValues = {
  [AddDataFormNames.Team1]: [
    initialValue,
    initialValue,
    initialValue,
    initialValue,
  ],
  [AddDataFormNames.Team2]: [
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
  [AddDataFormNames.Team1]: valueSchema,
  [AddDataFormNames.Team2]: valueSchema,
});

export type AddDataFormType = InferType<typeof validationSchema>;
