interface FormPageComponentProps {
  children: React.ReactNode;
}

const FormPageComponent: React.FC<FormPageComponentProps> = ({ children }) => (
  <section
    className={`
      p-4 w-full max-w-2xl
      flex flex-col gap-4 mx-auto
    `}>
    {children}

    <div className='text-sm text-center text-slate-500'>
      Never submit passwords through RIVA Forms. &nbsp;
      <a
        href='//instagram.com/riv.alumni'
        className='underline underline-offset-4'>
        Report Problem
      </a>
    </div>
  </section>
);

export default FormPageComponent;
