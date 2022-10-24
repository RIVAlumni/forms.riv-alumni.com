import FormCard from './FormCard';

interface FormTextComponentProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const FormTextComponent: React.FC<FormTextComponentProps> = ({
  title,
  children,
  className,
}) => (
  <FormCard className={`flex flex-col ${className}`}>
    <h6 className='font-bold'>{title}</h6>
    {children}
  </FormCard>
);

export default FormTextComponent;
