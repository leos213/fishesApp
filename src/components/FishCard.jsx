function FishCard({ name, region, scientificName, illustrationPhoto, info }) {
  return (
    <div className="fish-card">
      <img
        src={illustrationPhoto.src}
        alt={illustrationPhoto.alt}
        title={illustrationPhoto.title}
      />
      <h2>{name}</h2>
      <p>Region: {region}</p>
      <p>Scientific Name: {scientificName}</p>
      <p>Info: {info}</p>
    </div>
  );
}

export default FishCard;
