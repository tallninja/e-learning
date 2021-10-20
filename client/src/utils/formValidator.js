const formValidator = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Please provide a title";
  if (!values.subject) errors.subject = "Please select a subject";

  return errors;
};

export default formValidator;
