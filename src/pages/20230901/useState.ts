import create from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  form: {
    'PDPA': string;
    'Teachers': string;
    'Full Name': string;
    'Partial NRIC': string;
    'Email Address': string;
    'Gender': string;
    'Graduating Class': string;
    'Graduating Year': string;
    'Current School / Institution': string;
    'Contact Number': string;
    'Home Number': string;
    'Name of Next-of-Kin': string;
    'Relationship with Next-of-Kin': string;
    'Emergency Contact Number of Next-of-Kin': string;
  };
  saveState: (data: any) => void;
  resetState: () => void;
}

const defaultValues: Pick<State, 'form'> = {
  form: {
    'PDPA': '',
    'Teachers': '',
    'Full Name': '',
    'Partial NRIC': '',
    'Email Address': '',
    'Gender': '',
    'Graduating Class': '',
    'Graduating Year': '',
    'Current School / Institution': '',
    'Contact Number': '',
    'Home Number': '',
    'Name of Next-of-Kin': '',
    'Relationship with Next-of-Kin': '',
    'Emergency Contact Number of Next-of-Kin': '',
  },
};

const useState = create<State>()(
  persist(
    (set) => ({
      ...defaultValues,
      saveState: (data) => set((state) => ({ ...state, form: { ...data } })),
      resetState: () => set((state) => ({ ...state, ...defaultValues })),
    }),
    { name: '20230901' }
  )
);

export default useState;
