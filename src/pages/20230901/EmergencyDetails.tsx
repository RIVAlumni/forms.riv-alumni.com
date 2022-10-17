import z from 'zod';

import FormTextComponent from '../../components/FormText';
import FormCardComponent from '../../components/FormCard';
import FormLabelComponent from '../../components/FormLabel';
import FormInputComponent from '../../components/FormInput';
import FormFieldDescription from '../../components/FormFieldDescription';

const EmergencyDetailsSchema = z.object({
  'Name of Next-of-Kin': z
    .string()
    .trim()
    .min(1, 'This is a required field.')
    .max(30, 'Is your name really that long?')
    .regex(/[\w\s,]+/),
  'Relationship with Next-of-Kin': z
    .string()
    .trim()
    .min(1, 'This is a required field.'),
  'Emergency Contact Number of Next-of-Kin': z
    .string()
    .trim()
    .min(1, 'This is a required field.')
    .regex(/[689]\d{7}/),
});

const EmergencyDetails: React.FC = () => (
  <div className='flex flex-col gap-4'>
    <FormTextComponent title='Emergency Contact Details'>
      <p>Nothing should happen! But better safe than sorry :)</p>
    </FormTextComponent>

    <FormCardComponent>
      <FormLabelComponent
        required
        htmlFor='Name of Next-of-Kin'
        className='mb-2 block text-gray-900'>
        Name of Next-of-Kin
      </FormLabelComponent>

      <FormInputComponent
        type='text'
        name='Name of Next-of-Kin'
        registerOptions={{ setValueAs: (value: string) => value.toUpperCase() }}
      />
    </FormCardComponent>

    <FormCardComponent>
      <FormLabelComponent
        required
        htmlFor='Relationship with Next-of-Kin'
        className='mb-2 block text-gray-900'>
        Relationship with Next-of-Kin
      </FormLabelComponent>

      <FormFieldDescription className='mb-2 block italic text-gray-500'>
        Example: Father/Mother/Brother/Sister/Caregiver
      </FormFieldDescription>

      <FormInputComponent
        type='text'
        name='Relationship with Next-of-Kin'
      />
    </FormCardComponent>

    <FormCardComponent>
      <FormLabelComponent
        required
        htmlFor='Emergency Contact Number of Next-of-Kin'
        className='mb-2 block text-gray-900'>
        Emergency Contact Number of Next-of-Kin
      </FormLabelComponent>

      <FormFieldDescription className='mb-2 block italic text-gray-500'>
        Example: 91234567
      </FormFieldDescription>

      <FormInputComponent
        type='tel'
        name='Emergency Contact Number of Next-of-Kin'
      />
    </FormCardComponent>
  </div>
);

export default EmergencyDetails;
export { EmergencyDetailsSchema };
