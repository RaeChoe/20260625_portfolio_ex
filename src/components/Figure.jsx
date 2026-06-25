import { useParams } from "react-router";

function Figure({ data }) {
  return (
    <figure>
      <img src={data.url} alt="img-1" />
      <figcaption>{data.desc}</figcaption>
    </figure>
  );
}

export default Figure;
