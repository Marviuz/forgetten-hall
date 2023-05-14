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

export const validationSchema = object({
  [AddDataFormNames.Team1]: array(
    object({
      src: string(),
      value: string(),
      label: string(),
    })
  ).min(1),
  [AddDataFormNames.Team2]: array(
    object({
      src: string(),
      value: string(),
      label: string(),
    })
  ).min(1),
}).optional();

export type AddDataFormType = InferType<typeof validationSchema>;
