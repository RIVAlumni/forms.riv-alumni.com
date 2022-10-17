import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';

interface FormRadioComponentProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
  errorHidden?: boolean;
  registerOptions?: RegisterOptions;
}

const FormRadioComponent: React.FC<FormRadioComponentProps> = ({
  id,
  name,
  label,
  required,
  errorHidden,
  registerOptions,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isErrored = <T,>(yes: T, no?: T) => (errors[name] ? yes : no);

  return (
    <>
      <input
        {...props}
        {...register(name, registerOptions)}
        id={id ?? name}
        type='radio'
        value={label}
        className='w-5 h-5 mr-2 border-2 border-gray-300 rounded-full focus:ring-2 focus:ring-blue-300'
      />
      <label
        htmlFor={id ?? name}
        className='ml-2'>
        {label} &nbsp;
        {required && <span className='font-bold text-red-600'>*</span>}
        {!errorHidden &&
          isErrored(
            <p className='mt-1 text-sm text-red-600 font-medium'>
              {errors[name]?.message?.toString()}
            </p>
          )}
      </label>
    </>
  );
};

export default FormRadioComponent;
