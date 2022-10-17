import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';

interface FormInputComponentProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  registerOptions?: RegisterOptions;
}

const FormInputComponent: React.FC<FormInputComponentProps> = ({
  id,
  name,
  placeholder,
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
        placeholder={placeholder ?? 'Your answer'}
        className={`
          px-0 py-1 mt-2
          block w-full text-gray-900 bg-transparent
          border-0 border-b-2 outline-none focus:ring-0
          ${isErrored(
            'border-red-200 focus:border-red-600',
            'border-gray-200 focus:border-gray-600'
          )}
        `}
      />
      {isErrored(
        <p className='mt-1 text-sm text-red-600 font-medium'>
          {errors[name]?.message?.toString()}
        </p>
      )}
    </>
  );
};

export default FormInputComponent;
