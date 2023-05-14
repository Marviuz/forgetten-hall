import { InferType, array, object, string } from 'yup';

export enum AddDataFormNames {
  Team1 = 'team1',
  Team2 = 'team2',
}

export const initialValues = {
  [AddDataFormNames.Team1]: [],
  [AddDataFormNames.Team2]: [],
};

export const validationSchema = object({
  [AddDataFormNames.Team1]: array(
    object({
      image: string(),
      label: string(),
      value: string(),
    })
  ).min(1),
  [AddDataFormNames.Team2]: array(
    object({
      image: string(),
      label: string(),
      value: string(),
    })
  ).min(1),
});

export type AddDataFormType = InferType<typeof validationSchema>;
