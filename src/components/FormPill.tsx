import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

interface FormPillComponentProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const FormPillComponent: React.FC<FormPillComponentProps> = ({
  className,
  children,
}) => (
  <button
    type='button'
    className={`
      px-2.5 py-1 rounded-full
      text-xs text-white text-center font-thin bg-blue-700 hover:bg-blue-800
      focus:outline-none focus:ring-4 focus:ring-blue-300
      ${className}
    `}>
    {children}
  </button>
);

export default FormPillComponent;
