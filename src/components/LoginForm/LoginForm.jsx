// Форма
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styled from '@emotion/styled';
import * as yup from 'yup';

/* Створення форми звичайним методом */

// export const LoginForm = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     // const formElements = e.target.elements;
//     const { login, password } = e.target.elements;
//     // console.log(e.target.elements.login.value);
//     console.log(login.value, password.value);
//   };
//   return (
//     <>
//       <h2>Formik</h2>

/* <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="login">
          Login
          <input type="text" name="login" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Submit</button>
      </form> */

//     </>
//   );
// };

// =================================/* За допомогою formik */=========================
const initialValues = {
  login: '',
  password: '',
};

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const Input = styled(Field)`
  color: tomato;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };
  return (
    <>
      <h2>FORMIK</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="login">
            Login
            <Input type="text" name="login" />
            <ErrorMessage name="login" />
          </label>
          <label htmlFor="password">
            Password
            <Input type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
