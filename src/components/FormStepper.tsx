import { useState, Children, ReactElement } from 'react';
import { useForm, FormProvider, UseFormProps } from 'react-hook-form';

import { ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import FormButtonComponent from './FormButton';

interface FormStepperComponentProps extends Omit<UseFormProps, 'resolver'> {
  schemas: ZodType<any, any, any>[];
  onReset: () => void;
  onStep: (data: unknown) => void;
  onSubmit: (data: unknown) => void;
  children: React.ReactNode;
}

const FormStepperComponent: React.FC<FormStepperComponentProps> = ({
  schemas,
  onReset,
  onStep,
  onSubmit,
  children,
  ...props
}) => {
  const [step, setStep] = useState(0);
  const resolver = zodResolver(schemas[step], {}, { rawValues: true });
  const methods = useForm({ resolver, ...props });

  const childrenArray = Children.toArray(children) as ReactElement[];
  const currentChild = childrenArray[step];

  const isLastChild = () => step === childrenArray.length - 1;

  const _onReset = () => {
    onReset();
    window.location.reload();
  };

  const _onSubmit = (data: unknown) => {
    onStep(data);

    if (!isLastChild()) {
      setStep((step) => step + 1);
      return window.scroll(0, 0);
    }
    return onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className='flex flex-col gap-4'
        onReset={_onReset}
        onSubmit={methods.handleSubmit(_onSubmit)}>
        {currentChild}

        <div className='flex justify-between'>
          <FormButtonComponent
            type='reset'
            design='transparent'>
            Clear Form
          </FormButtonComponent>

          <div className='flex flex-row gap-4'>
            {step > 0 && (
              <FormButtonComponent
                type='button'
                onClick={() => setStep((step) => step - 1)}>
                Back
              </FormButtonComponent>
            )}

            <FormButtonComponent type='submit'>
              {isLastChild() ? 'Submit' : 'Next'}
            </FormButtonComponent>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormStepperComponent;
