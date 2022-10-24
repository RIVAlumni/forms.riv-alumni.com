import { ReactNode, SetStateAction } from 'react';
import { Dialog } from '@headlessui/react';

interface FormDialogComponentProps {
  isOpen: boolean;
  setIsOpen: (status: SetStateAction<boolean>) => void;
  children?: ReactNode;
}

const FormDialogComponent: React.FC<FormDialogComponentProps> = ({
  isOpen,
  setIsOpen,
  children,
}) => (
  <Dialog
    className='relative z-10'
    open={isOpen}
    onClose={() => setIsOpen(false)}>
    <div className='fixed inset-0 bg-black/30' />

    <div className='fixed inset-0 overflow-y-auto'>
      <div className='flex min-h-full items-center justify-center'>
        <Dialog.Panel className='flex flex-col gap-4 p-6 w-full max-w-md text-left align-middle rounded-2xl overflow-hidden bg-white shadow-xl transition-all'>
          {children}

          <button
            type='button'
            // TODO: Check on classname
            className='w-fit inline-flex justify-center rounded-lg bg-blue-100 px-5 py-2.5 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
            onClick={() => setIsOpen(false)}>
            Got it, thanks!
          </button>
        </Dialog.Panel>
      </div>
    </div>
  </Dialog>
);

export default FormDialogComponent;
