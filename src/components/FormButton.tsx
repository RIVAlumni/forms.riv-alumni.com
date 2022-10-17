import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

interface FormButtonComponentProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  design?: 'solid' | 'transparent';
  className?: string;
  children: React.ReactNode;
}

const styles = {
  solid: `
    px-7 py-3
    inline-flex items-center
    text-sm text-white font-medium rounded-lg bg-purple-700
    focus:outline-none hover:bg-purple-800 focus:ring-4 focus:ring-purple-300`,
  transparent: `
    px-2 py-3
    text-sm text-purple-700 font-medium
    underline underline-offset-4 rounded-lg`,
};

const FormButtonComponent: React.FC<FormButtonComponentProps> = ({
  design = 'solid',
  className,
  children,
  ...props
}) => (
  <button
    {...props}
    className={`${styles[design]} ${className}`}>
    {children}
  </button>
);

export default FormButtonComponent;
