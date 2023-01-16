import PropTypes from "prop-types";
import { Formik, Form, Field } from 'formik';

export const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };
    
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <p>Name: </p>
        <Field type="text" name="name" required></Field>
        <p>Number: </p>
        <Field type="tel" name="number" required></Field>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}