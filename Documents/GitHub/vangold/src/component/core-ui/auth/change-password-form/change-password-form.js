import React from "react";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


const ChangePasswordForm = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
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
        <p className="authResetPassword__P">Create a new password for your account. It must be at least 8 characters long.</p>
      </div>
      <div className="form-input__container">
      <div className="form__-control">
          <label htmlFor="Password">Password</label>
          <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form__-control">
          <label htmlFor="Confirm Password">Confirm Password</label>
          <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.confirmPassword && "Passwords don't match!"}</div>
        </div>
      </div>
      <button className="submit__btn reset-btn">Reset Password</button>
    </form>

  );
};

export default ChangePasswordForm;
