import FormPageComponent from '../../components/FormPage';
import FormTitleComponent from '../../components/FormTitle';
import FormStepperComponent from '../../components/FormStepper';

import LandingPage, { LandingPageSchema } from './LandingPage';
import PersonalDetails, { PersonalDetailsSchema } from './PersonalDetails';
import EmergencyDetails, { EmergencyDetailsSchema } from './EmergencyDetails';
import VisitationDetails from './VisitationDetails';

import useState from './state';

const schemas = [
  LandingPageSchema,
  PersonalDetailsSchema,
  EmergencyDetailsSchema,
];

const Form20230901: React.FC = () => {
  const onSubmit = (data: unknown) => console.log(data);

  const defaultValues = useState((state) => state.form);
  const resetState = useState((state) => state.resetState);
  const saveState = useState((state) => state.saveState);

  return (
    <FormPageComponent>
      <FormTitleComponent>
        Teachers' Day Visitations Registration
      </FormTitleComponent>

      <FormStepperComponent
        schemas={schemas}
        reValidateMode='onBlur'
        defaultValues={defaultValues}
        onReset={resetState}
        onStep={saveState}
        onSubmit={onSubmit}>
        <LandingPage />
        <PersonalDetails />
        <EmergencyDetails />
        <VisitationDetails />
      </FormStepperComponent>
    </FormPageComponent>
  );
};

export default Form20230901;
