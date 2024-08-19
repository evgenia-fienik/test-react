import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import css from './FeedbackForm.module.css'

const initialValues = { username: " ", email: "", message:"" };

const FeedbackForm = () => {

  const nameFielId = useId();
  const imailFielId = useId();
  const msgFieldId = useId();

  const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameFielId}>Username</label>
        <Field className={css.field}type="text" name="username" id={nameFielId}></Field>
        <label htmlFor={imailFielId}>Email</label>
        <Field type="email" name="email" id={imailFielId}></Field>
        <label htmlFor={msgFieldId}>Message</label>
        <Field as="textarea" name="message" id={msgFieldId}></Field>
        <button type='submit'>Submit</button>
        </Form>
    </Formik>
  );
};
export default FeedbackForm;