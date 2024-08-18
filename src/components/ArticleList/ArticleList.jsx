function ArticlesList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
export default ArticlesList;
