interface FormFieldDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const FormFieldDescription: React.FC<FormFieldDescriptionProps> = ({
  className,
  children,
}) => <div className={`text-sm ${className}`}>{children}</div>;

export default FormFieldDescription;
