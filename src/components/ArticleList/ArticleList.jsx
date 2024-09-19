//src\components\ArticleList\ArticleList.jsx
function ArticlesList(items) {
  return (
    <ul>
      {items.map(user => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.createAt}</p>
        </li>
      ))}
    </ul>
  );
}
export default ArticlesList;
