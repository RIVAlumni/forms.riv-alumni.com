import FormCardComponent from './FormCard';

interface FormTitleComponentProps {
  children: React.ReactNode;
}

const FormTitleComponent: React.FC<FormTitleComponentProps> = ({
  children,
}) => (
  <FormCardComponent className='flex flex-col gap-5'>
    <h1 className='text-4xl font-medium font-pacifico leading-snug'>
      {children}
    </h1>

    <hr className='bg-gray-200 border-0 h-px' />

    <span className='text-red-600'>* Required</span>
  </FormCardComponent>
);

export default FormTitleComponent;
