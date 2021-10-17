import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const ResetPasswordForm = () => {
 
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
        });

      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      };
  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
    <div className="form__title">
        <h1>Reset your Password</h1>
        <p className="authResetPassword__P">
          Enter the registered email address to get a password reset link
        </p>
      </div>
      <div className="form__-control">
        <label htmlFor="Email">Email</label>
        <input name="email" type="email" {...register('email')}
                error={errors.email ? true : false} required />
                <span className="errors">{errors.email?.message}</span>
      </div>
      <button className="submit__btn reset-btn" onClick={handleSubmit(onSubmit)}>Submit</button>
    </form>
  );
};

export default ResetPasswordForm;
