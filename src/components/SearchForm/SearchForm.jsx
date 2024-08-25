// // src/components/SearchForm.jsx
import { ErrorMessage, Field, Form, Formik } from 'formik';
// const SearchForm = ({ onSearch }) => {
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.target;
//     const topic = evt.target.topic.value;
//     if (form.elements.topic.value.trim() === '') {
//       alert('Please enter search term!');
//       return;
//     }
//     onSearch(topic);
//     form.reset();
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="topic" placeholder="Sercch" />
//       <button type="submit"></button>
//     </form>
//   );
// };

// export default SearchForm;

const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <Field type="text" name="query" placeholder="Serch" />
        <ErrorMessage name="query" componrnt="div" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
