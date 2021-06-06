function BookListItem({ item }) {
  return (
    <div className={`card note-list-item bg-primary`}>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.author}</p>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
}
export default BookListItem;
