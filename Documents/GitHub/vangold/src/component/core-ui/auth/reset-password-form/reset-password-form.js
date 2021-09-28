import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const ResetPasswordForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
});
const formOptions = { resolver: yupResolver(validationSchema) };

// get functions to build form with useForm() hook
const { register, handleSubmit, formState } = useForm(formOptions);
const { errors } = formState;

function onSubmit(data) {}
  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title">
        <h1>Reset your Password</h1>
        <p className="authResetPassword__P">Enter the registered email address to get a password reset link</p>
      </div>
      <div className="form__-control">
        <label htmlFor="Email">Email</label>
        <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <button className="submit__btn reset-btn">Submit</button>
    </form>
  );
};

export default ResetPasswordForm;
