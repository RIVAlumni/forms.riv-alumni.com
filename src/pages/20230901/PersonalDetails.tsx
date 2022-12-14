import z from 'zod';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import FormTextComponent from '../../components/FormText';
import FormPillComponent from '../../components/FormPill';
import FormCardComponent from '../../components/FormCard';
import FormLabelComponent from '../../components/FormLabel';
import FormInputComponent from '../../components/FormInput';
import FormRadioComponent from '../../components/FormRadio';
import FormSelectComponent from '../../components/FormSelect';
import FormFieldDescription from '../../components/FormFieldDescription';
import FormDialogComponent from '../../components/FormDialog';

import { GRAD_CLASSES, GRAD_YEARS } from '../../constants';

const PersonalDetailsSchema = z.object({
  'Full Name': z
    .string()
    .trim()
    .min(1, 'This is a required field.')
    .max(30, 'Is your name really that long?')
    .regex(/^[A-Z\s,()]+$/),
  'Partial NRIC': z
    .string()
    .trim()
    .min(1, 'This is a required field.')
    .max(4, 'Invalid NRIC. Please refer to the example given above.')
    .regex(/\d{3}[XWUTRQPNMLKJZIHGFEDCBA]/),
  'Email Address': z
    .string()
    .trim()
    .min(1, 'This is a required field.')
    .email('Invalid email.'),
  'Gender': z
    .string({
      invalid_type_error: 'This is a required field.',
    })
    .trim()
    .regex(/^Male$|^Female$/, 'This is a required field.'),
  'Graduating Class': z
    .string()
    .trim()
    .min(1, 'This is a required field.')
    .max(16, 'Invalid class.'),
  'Graduating Year': z
    .number({
      invalid_type_error: 'This is a required field.',
    })
    .int()
    .min(1999, 'Invalid year.')
    .max(new Date().getFullYear(), 'Invalid year.'),
  'Current School / Institution': z
    .string()
    .trim()
    .min(1, 'This is a required field.'),
  'Contact Number': z
    .string()
    .trim()
    .min(1, 'This is a required field.')
    .regex(/[689]\d{7}/),
  'Home Number': z.union([
    z.literal(''),
    z
      .string()
      .trim()
      .regex(/^[689]\d{7}$/, 'Invalid format.'),
  ]),
});

const PersonalDetails: React.FC = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const [isFullNameExampleOpen, setIsFullNameExampleOpen] = useState(false);
  const [isNricExampleOpen, setIsNricExampleOpen] = useState(false);

  return (
    <div className='flex flex-col gap-4'>
      <FormTextComponent title='Personal Details'>
        <p>
          Enter your personal details so that we can properly identify you! :)
        </p>
      </FormTextComponent>

      <FormCardComponent>
        <FormLabelComponent
          required
          htmlFor='Full Name'
          className='mb-2 block text-gray-900'>
          Full Name <span className='italic'>(as on NRIC)</span>
        </FormLabelComponent>

        <FormFieldDescription className='mb-2 block italic text-gray-500'>
          <p>
            Note: Please type letter-by-letter exactly as shown in your
            NRIC/Student Pass. Failure to do so will result in processing
            delays.
          </p>
        </FormFieldDescription>

        <FormPillComponent onClick={() => setIsFullNameExampleOpen(true)}>
          See specimen
        </FormPillComponent>

        <FormDialogComponent
          isOpen={isFullNameExampleOpen}
          setIsOpen={setIsFullNameExampleOpen}>
          <img
            className='rounded-lg'
            alt='EZ-Link Specimen | Credits: NUS'
            src='https://firebasestorage.googleapis.com/v0/b/rivalumniops-forms.appspot.com/o/examples%2FEZLinkFullNameExample.png?alt=media'
          />

          <p className='text-sm text-gray-500'>
            Shown in the specimen above, &nbsp;
            <span className='italic underline underline-offset-2'>
              GEORGE TAN
            </span>
            &nbsp; is the full name of the student. In this case, you will enter
            exactly &nbsp;
            <span className='italic underline underline-offset-2'>
              GEORGE TAN
            </span>
            &nbsp; in the field.
          </p>
        </FormDialogComponent>

        <FormInputComponent
          type='text'
          name='Full Name'
          registerOptions={{
            setValueAs: (value: string) => value.toUpperCase(),
          }}
        />
      </FormCardComponent>

      <FormCardComponent>
        <FormLabelComponent
          required
          htmlFor='Partial NRIC'
          className='mb-2 block text-gray-900'>
          Last 3 digits and alphabet of NRIC
        </FormLabelComponent>

        <FormFieldDescription className='mb-2 block italic text-gray-500'>
          Example: 123A
        </FormFieldDescription>

        <FormPillComponent onClick={() => setIsNricExampleOpen(true)}>
          See specimen
        </FormPillComponent>

        <FormDialogComponent
          isOpen={isNricExampleOpen}
          setIsOpen={setIsNricExampleOpen}>
          <img
            className='rounded-lg'
            alt='EZ-Link Specimen | Credits: NUS'
            src='https://firebasestorage.googleapis.com/v0/b/rivalumniops-forms.appspot.com/o/examples%2FEZLinkLast3Digits%26AlphabetExample.png?alt=media'
          />

          <p className='text-sm text-gray-500'>
            Shown in the specimen above, &nbsp;
            <span className='italic underline underline-offset-2'>
              S1234567B
            </span>
            &nbsp; is the full NRIC of the student. In this case, you will enter
            only the last 4 alphanumerical characters &nbsp;
            <span className='italic underline underline-offset-2'>567B</span>
            &nbsp; into the field.
          </p>
        </FormDialogComponent>

        <FormInputComponent
          type='text'
          name='Partial NRIC'
          registerOptions={{
            setValueAs: (value: string) => value.toUpperCase(),
          }}
        />
      </FormCardComponent>

      <FormCardComponent>
        <FormLabelComponent
          required
          htmlFor='Email Address'
          className='mb-2 block text-gray-900'>
          Email Address
        </FormLabelComponent>

        <FormFieldDescription className='mb-2 block italic text-gray-500'>
          Example: winnie.pooh@gmail.com
        </FormFieldDescription>

        <FormInputComponent
          type='email'
          name='Email Address'
          registerOptions={{
            setValueAs: (value: string) => value.toLowerCase(),
          }}
        />
      </FormCardComponent>

      <FormCardComponent>
        <FormLabelComponent
          required
          htmlFor='Gender'
          className='mb-2 block text-gray-900'>
          Gender
        </FormLabelComponent>

        <div className='w-full mt-2 inline-flex flex-col gap-2'>
          <div className='flex flex-row items-center'>
            <FormRadioComponent
              id='Male'
              name='Gender'
              label='Male'
              errorHidden
            />
          </div>

          <div className='flex flex-row items-center'>
            <FormRadioComponent
              id='Female'
              name='Gender'
              label='Female'
              errorHidden
            />
          </div>
        </div>

        {errors['Gender'] && (
          <p className='mt-1 text-sm text-red-600 font-medium'>
            {errors['Gender']?.message?.toString()}
          </p>
        )}
      </FormCardComponent>

      <FormCardComponent>
        <FormLabelComponent
          required
          htmlFor='Graduating Class'
          className='mb-2 block text-gray-900'>
          Graduating Class
        </FormLabelComponent>

        <FormSelectComponent
          name='Graduating Class'
          options={['Choose...'].concat(GRAD_CLASSES)}
        />
      </FormCardComponent>

      <FormCardComponent>
        <FormLabelComponent
          required
          htmlFor='Graduating Year'
          className='mb-2 block text-gray-900'>
          Graduating Year
        </FormLabelComponent>

        <FormSelectComponent
          name='Graduating Year'
          options={['Choose...'].concat(GRAD_YEARS)}
          registerOptions={{ valueAsNumber: true }}
        />
      </FormCardComponent>

      <FormCardComponent>
        <FormLabelComponent
          required
          htmlFor='Current School / Institution'
          className='mb-2 block text-gray-900'>
          Current School / Institution
        </FormLabelComponent>

        <FormInputComponent
          type='text'
          name='Current School / Institution'
        />
      </FormCardComponent>

      <FormCardComponent>
        <FormLabelComponent
          htmlFor='Contact Number'
          required
          className='mb-2 block text-gray-900'>
          Contact Number
        </FormLabelComponent>

        <FormFieldDescription className='mb-2 block italic text-gray-500'>
          Example: 91234567.
        </FormFieldDescription>

        <FormInputComponent
          type='tel'
          name='Contact Number'
        />
      </FormCardComponent>

      <FormCardComponent>
        <FormLabelComponent
          htmlFor='Home Number'
          className='mb-2 block text-gray-900'>
          Home Number
        </FormLabelComponent>

        <FormFieldDescription className='mb-2 block italic text-gray-500'>
          Example: 61234567.
        </FormFieldDescription>

        <FormInputComponent
          type='tel'
          name='Home Number'
        />
      </FormCardComponent>
    </div>
  );
};

export default PersonalDetails;
export { PersonalDetailsSchema };
