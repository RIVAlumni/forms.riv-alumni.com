import z from 'zod';

import FormTextComponent from '../../components/FormText';
import FormCardComponent from '../../components/FormCard';
import FormLabelComponent from '../../components/FormLabel';
import FormCheckboxComponent from '../../components/FormCheckbox';
import FormFieldDescription from '../../components/FormFieldDescription';

import { TEACHERS } from '../../constants';

const VisitationDetails: React.FC = () => (
  <div className='flex flex-col gap-4'>
    <FormTextComponent title='❗️ DISCLAIMER ❗️'>
      <p>
        This section is a survey to help the school better plan for visiting
        students on Teachers' Day. The teachers you hope to visit might not be
        available on the day itself.
      </p>
    </FormTextComponent>

    <FormCardComponent>
      <FormLabelComponent
        required
        htmlFor='Teachers'
        className='mb-2 block text-gray-900'>
        Which teacher(s) are you hoping to visit?
      </FormLabelComponent>

      <FormFieldDescription className='mb-2 text-gray-500 flex flex-col'>
        <p>
          Multiple choices! You can select as many teachers as you would like to
          visit. However, nothing is guaranteed here.
        </p>
        &nbsp;
        <span className='italic'>
          Do note that this is the current list of staff at Rivervale Primary
          School - if the teacher you are hoping to visit is not listed here, it
          likely means that they are no longer at the school.
        </span>
      </FormFieldDescription>

      <div className='mt-2 w-full inline-flex flex-col gap-2'>
        {TEACHERS.map((name) => (
          <FormCheckboxComponent
            key={name}
            id={name}
            name='Teachers'
            label={name}
            errorHidden
          />
        ))}
      </div>
    </FormCardComponent>
  </div>
);

export default VisitationDetails;
