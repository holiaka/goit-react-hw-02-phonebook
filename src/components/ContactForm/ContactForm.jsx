import PropTypes from 'prop-types';
import { Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { ErrorText, SubmitForm, Input, InputName} from './ContactForms';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(10, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = ({ onSubmit }) => {
  
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <SubmitForm>
        <InputName>Name: </InputName>
        <Input type="text" name="name" required></Input>
        <FormError name="name" />
        <InputName>Number: </InputName>
        <Input type="tel" name="number" placeholder="Enter phone number" required></Input>
        <FormError name="number" />
        <button type="submit">Add contact</button>
      </SubmitForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
