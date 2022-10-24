interface FormCardComponentProps {
  className?: string;
  children: React.ReactNode;
}

const FormCardComponent: React.FC<FormCardComponentProps> = ({
  className,
  children,
}) => <div className={`p-6 bg-white rounded-lg ${className}`}>{children}</div>;

export default FormCardComponent;
