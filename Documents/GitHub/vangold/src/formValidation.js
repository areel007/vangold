export default function validate(values) {
    let errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password does not match';
    }else {
      errors.confirmPassword = 'Password match';
    }
    if (!values.checkboxAgree) {
      errors.checkboxAgree = 'Accept T&C';
    }
    return errors;
  };