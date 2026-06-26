function Figure({ data }) {
  return (
    <figure className="card flex-column gap-3 p-3">
      <img className="card-text" src={data.url} alt={data.desc} />
      <figcaption className="card-text">{data.desc}</figcaption>
    </figure>
  );
}

export default Figure;
