import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

interface FormLabelComponentProps
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormLabelComponent: React.FC<FormLabelComponentProps> = ({
  htmlFor,
  required,
  children,
  ...props
}) => (
  <label
    {...props}
    htmlFor={htmlFor}>
    {children} &nbsp;
    {required && <span className='font-bold text-red-600'>*</span>}
  </label>
);

export default FormLabelComponent;
