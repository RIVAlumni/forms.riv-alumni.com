import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';

interface FormSelectComponentProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: string;
  options: string[];
  registerOptions?: RegisterOptions;
}

const FormSelectComponent: React.FC<FormSelectComponentProps> = ({
  id,
  name,
  options,
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
      <select
        {...props}
        {...register(name, registerOptions)}
        id={id ?? name}
        defaultValue={options[0]}
        className={`
          px-0 py-1 mt-2
          block w-full bg-transparent
          border-0 border-b-2 outline-none focus:ring-0
          ${isErrored(
            'border-red-200 focus:border-red-600 focus-visible:border-red-600',
            'border-gray-200 focus:border-gray-600 focus-visible:border-gray-600'
          )}
        `}>
        {options.map((value, index) => (
          <option
            key={value}
            disabled={index === 0}
            value={index !== 0 ? value : ''}>
            {value}
          </option>
        ))}
      </select>
      {isErrored(
        <p className='mt-1 text-sm text-red-600 font-medium'>
          {errors[name]?.message?.toString()}
        </p>
      )}
    </>
  );
};

export default FormSelectComponent;
