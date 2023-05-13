import { InferType, addMethod, array, object, string, tuple } from 'yup';

export enum AddDataFormNames {
  Team1 = 'team1',
  Team2 = 'team2',
}

export const initialValues = {
  [AddDataFormNames.Team1]: ['', '', '', ''],
  [AddDataFormNames.Team2]: ['', '', '', ''],
};

export const validationSchema = object({
  [AddDataFormNames.Team1]: array(string()).min(1),
  [AddDataFormNames.Team2]: array(string()).min(1),
});

export type AddDataFormType = InferType<typeof validationSchema>;
