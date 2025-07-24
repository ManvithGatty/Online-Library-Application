export function renderStars(rating) {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < full; i++) {
    stars.push(<span key={`full-${i}`} className="star full">★</span>);
  }

  if (half) {
    stars.push(<span key="half" className="star half">½</span>);
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
  }

  return (
    <span className="star-rating">
      {stars} <small>({rating})</small>
    </span>
  );
}
