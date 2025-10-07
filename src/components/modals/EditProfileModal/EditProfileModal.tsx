import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { User } from '../../../redux/api/authApi';
import {
  EditUserValues,
  orderEditUserSchema,
} from '../../../utils/formValidation';
import sprite from '../../../assets/sprite.svg';
import { useState } from 'react';

interface EditModalProps {
  dataUser?: User;
  onClose: () => void;
}

const EditProfileModal = ({ dataUser, onClose }: EditModalProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(dataUser?.avatar_url || '');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderEditUserSchema),
    defaultValues: {
      name: dataUser?.name || '',
      email: dataUser?.email || '',
      password: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  console.log('dataUser', dataUser);

  const handleEditProfile = (data: EditUserValues): void => {
    const formData = new FormData();
    formData.append('name', data.name ?? '');
    formData.append('email', data.email ?? '');
    if (data.password) formData.append('password', data.password);
    if (selectedFile) formData.append('avatar', selectedFile);

    console.log('FormData', Object.fromEntries(formData.entries()));

    onClose();
  };
  return (
    <div className='w-full p-8 bg-header max-w-[335px]  rounded-lg md:max-w-[350px]'>
      <h2 className='text-text-theme w-full text-lg font-medium -tracking-[0.36px] mb-6'>
        Edit Profile
      </h2>
      <form onSubmit={handleSubmit(handleEditProfile)}>
        <ul className='mb-6'>
          <li className='mb-6 flex justify-center'>
            <label className='relative bg-bg-dark w-17 h-17 rounded-lg flex justify-center items-center hover:shadow-[0_0_6px_var(--color-brand)] transition-all duration-300 cursor-pointer'>
              {preview ? (
                <img
                  src={preview}
                  alt='avatar preview'
                  className='object-cover w-full h-full rounded-lg'
                />
              ) : (
                <svg
                  width='68'
                  height='68'
                  className='stroke-text-dark fill-text-dark'
                >
                  <use href={`${sprite}#icon-user`}></use>
                </svg>
              )}

              <input
                type='file'
                accept='image/*'
                className='hidden'
                onChange={handleFileChange}
              />

              <span className='absolute -bottom-1 bg-brand w-6 h-6 rounded-[4px] flex justify-center items-center'>
                <svg
                  width='8'
                  height='8'
                  className='stroke-bg-light fill-transparent'
                >
                  <use href={`${sprite}#icon-plus`}></use>
                </svg>
              </span>
            </label>
          </li>
          <li className='mb-3.5'>
            <label>
              <input
                className=' px-4.5 py-3.5 text-sm text-text-theme -tracking-[0.28px] border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                type='text'
                {...register('name')}
              />
            </label>
          </li>
          <li className='mb-3.5'>
            <label>
              <input
                className=' px-4.5 py-3.5 text-sm text-text-theme -tracking-[0.28px] border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                type='email'
                {...register('email')}
              />
            </label>
          </li>
          <li>
            <label className='relative block'>
              <input
                className=' px-4.5 py-3.5 text-sm text-text-theme -tracking-[0.28px] border border-brand/60 rounded-lg w-full outline-none hover:border-hover hover:shadow-[0_0_8px_var(--color-brand)] focus:border-hover focus:shadow-[0_0_8px_var(--color-brand)] transition-all duration-300'
                type={passwordVisible ? 'text' : 'password'}
                {...register('password')}
              />
              {errors.password && (
                <p className='absolute -top-[12px] right-0 text-error text-[10px] ml-3 font-medium leading-3 -tracking-[0.3px] opacity-40'>
                  {errors.password.message}
                </p>
              )}
              <button
                type='button'
                className='group absolute top-3.5 transition-all duration-300 right-4 cursor-pointer md:top-4 md:right-4 opacity-40 hover:opacity-100'
                tabIndex={-1}
                onMouseDown={e => e.preventDefault()}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <svg
                    width='18'
                    height='18'
                    className={`fill-transparent  md:w-5.5 md:h-5.5 ${
                      errors.password ? 'stroke-error' : 'stroke-label-green'
                    } `}
                  >
                    <use href={`${sprite}#icon-eye-off`}></use>
                  </svg>
                ) : (
                  <svg
                    width='18'
                    height='18'
                    className={`fill-transparent md:w-5.5 md:h-5.5 ${
                      errors.password ? 'stroke-error' : 'stroke-label-green'
                    } `}
                  >
                    <use href={`${sprite}#icon-eye`}></use>
                  </svg>
                )}
              </button>
            </label>
          </li>
        </ul>
        <button
          className='bg-brand !text-sm font-medium w-full rounded-lg p-3.5 text-text-dark hover:bg-hover'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};
export default EditProfileModal;
