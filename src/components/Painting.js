import defaultImage from '../components/default-img.jpg';
export default function Painting({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не відомо',
  price,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор:
        <a href={profileUrl}>{author}</a>
      </p>
      <p>Ціна: {price} кредитів</p>
      <p>Доступність:закінчується, або є в наявності</p>
      <button type="button">Додати в кошик</button>
    </div>
  );
}
