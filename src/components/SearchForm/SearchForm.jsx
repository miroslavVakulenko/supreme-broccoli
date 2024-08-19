// src/components/SearchForm.jsx

const SearchForm = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const topic = evt.target.topic.value;
    if (form.elements.topic.value.trim() === '') {
      alert('Please enter search term!');
      return;
    } 
    onSearch(topic);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Sercch" />
      <button type="submit"></button>
    </form>
  );
};

export default SearchForm;
