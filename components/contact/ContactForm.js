import { toast } from 'react-toastify';
import UseInput from '../../hooks/use-input';
import { sendContactForm } from '../../lib/api';
import classes from './ContactForm.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = UseInput(isNotEmpty);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = UseInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = UseInput(isEmail);

  let formIsValid = false;

  if (enteredNameIsValid && enteredMessageIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    const values = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };
    try {
      await sendContactForm(values);
      toast.success('Email sent successfully');
    } catch (error) {
      toast.error(error.message);
    }

    nameReset();
    messageReset();
    emailReset();
  };

  const nameInputClasses = nameInputHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const messageInputClasses = messageInputHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const emailInputClasses = emailInputHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={classes.controlGroup}>
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className={classes.errorText}>Please enter a first name.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className={classes.errorText}>
              Please enter a valid e-mail address.
            </p>
          )}
        </div>
        <div className={`${messageInputClasses} ${classes.message}`}>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            value={enteredMessage}
            onChange={messageChangedHandler}
            onBlur={messageBlurHandler}
          />
          {messageInputHasError && (
            <p className={classes.errorText}>Please enter a message.</p>
          )}
        </div>
        <div className={classes.formActions}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
