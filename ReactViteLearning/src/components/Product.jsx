// eslint-disable-next-line react/prop-types
export default function Product({ title, url, price }) {
  console.log(title, url, price);
  return (
    <>
      <img src={url} style={{ width: "183px", height: "183px" }} />
      <h2>{title}</h2>
      <p>Từ {price}</p>
    </>
  );
}
