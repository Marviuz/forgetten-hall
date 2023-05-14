import { type InferType, array, object, string } from 'yup';
import { HALLS } from '@/constants/Halls';

export enum SubmitDataFormName {
  Hall = 'hall',
  Team1 = 'team1',
  Team2 = 'team2',
}

const initialValue = {
  src: '',
  value: '',
  label: '',
};

export const initialValues = {
  [SubmitDataFormName.Hall]: HALLS[0],
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
  [SubmitDataFormName.Hall]: object({
    image: string(),
    label: string(),
    value: string(),
  }),
  [SubmitDataFormName.Team1]: valueSchema,
  [SubmitDataFormName.Team2]: valueSchema,
});

export type SubmitDataFormType = InferType<typeof validationSchema>;
