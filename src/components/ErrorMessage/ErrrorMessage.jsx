import { Toaster, toast } from 'react-hot-toast';

const ErrorMessage = () => {
  console.log('error');
  const notify = () => toast('Here is your toast.');
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default ErrorMessage;
