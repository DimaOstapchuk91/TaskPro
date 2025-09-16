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
    <section className=' flex justify-center items-center min-h-screen w-full  bg-[linear-gradient(180deg,#ffffff_30%,#BEDBB0_70%)]'>
      <div className='container w-full flex justify-center'>
        {id && forms[id] ? forms[id] : <Navigate to='*' replace />}
      </div>
    </section>
  );
};
export default AuthPage;
