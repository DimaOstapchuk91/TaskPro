import { Navigate, useParams } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';

const AuthPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const forms: Record<string, React.ReactElement> = {
    login: <LoginForm />,
    register: <RegisterForm />,
  };

  return (
    <div>
      <div className='w-full max-w-md p-6  rounded-lg shadow-lg'>
        {id && forms[id] ? forms[id] : <Navigate to='*' replace />}
      </div>
    </div>
  );
};
export default AuthPage;
