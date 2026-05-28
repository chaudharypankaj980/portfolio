const CertificateCard = ({ image, title }) => {
  return (
    <article className="cert-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </article>
  );
};

export default CertificateCard;
