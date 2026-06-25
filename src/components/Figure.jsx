import { useParams } from "react-router";

function Figure({ data }) {
  return (
    <figure className="card flex-column gap-3 p-3">
      <img className="card-text" src={data.url} alt="img-1" />
      <figcaption className="card-text">{data.desc}</figcaption>
    </figure>
  );
}

export default Figure;
