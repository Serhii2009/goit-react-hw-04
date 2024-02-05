export const ImageCard = (imgSrc, imgAlt, imgModal) => {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} data-src={imgModal} />
    </div>
  );
};
