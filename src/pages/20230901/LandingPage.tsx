import z from 'zod';

import FormCardComponent from '../../components/FormCard';
import FormRadioComponent from '../../components/FormRadio';
import FormTextComponent from '../../components/FormText';

const LandingPageSchema = z.object({
  PDPA: z
    .string({ invalid_type_error: 'You must acknowledge the details above.' })
    .trim()
    .regex(
      /^I have read and acknowledged the details above.$/,
      'You must acknowledge the details above.'
    ),
});

const LandingPage: React.FC = () => (
  <div className='flex flex-col gap-4'>
    <FormTextComponent title='📆 Visitation Details ✍🏻'>
      <p>
        <span className='font-bold'>Visitation Date:</span> 1 September 2023
      </p>
      <p>
        <span className='font-bold'>Visitation Time:</span> 11.00 am to 12.30 pm
      </p>
      <p>
        <span className='font-bold'>Visitation Venue:</span> RIVPS Canteen ONLY
      </p>
    </FormTextComponent>

    <FormTextComponent title='📝 Things To Take Note ❗️'>
      <ol className='list-decimal list-outside mx-5 mb-2'>
        <li>
          Please register yourself with the reception at the guardhouse upon
          arrival.
        </li>
        <li>
          You may be asked to present your NRIC or Student Pass (EZ-Link Card)
          at the school gate as part of the registration (please remember to
          bring it along!).
        </li>
        <li>
          You will be escorted to the canteen by the teacher you are visiting.
        </li>
        <li>
          Due to safety considerations, all meetings will only take place in the
          canteen.
        </li>
        <li>
          After your visitation, please sign-out by returning your identity
          sticker back to the receptionist.
        </li>
      </ol>

      <p>Thank you and enjoy your reunion with your teachers!</p>
    </FormTextComponent>

    <FormTextComponent title='Personal Data Protection Disclaimer'>
      <p>
        I declare that the personal information I have provided on this form has
        been surrendered to Rivervale Primary School (RIVPS) and Rivervale
        Primary School Alumni Association (RIVA) voluntarily, for the sole
        purpose of the stated event and membership tracking. I understand that
        the information may or may not be held by RIVPS or RIVA after the
        conclusion of the event.
      </p>
      &nbsp;
      <p>
        I understand that the information I have provided will not be used for
        any other occasion other than for the purpose of the event, and will not
        be circulated beyond RIVPS and RIVA having further consent sought from
        me.
      </p>
    </FormTextComponent>

    <FormCardComponent>
      <div className='flex items-center'>
        <FormRadioComponent
          name='PDPA'
          label='I have read and acknowledged the details above.'
          required={true}
        />
      </div>
    </FormCardComponent>
  </div>
);

export default LandingPage;
export { LandingPageSchema };
