import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ onClick, pictures }) => {
  return (
    <ul onClick={onClick}>
      {pictures.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageCard
            key={id}
            imgSrc={webformatURL}
            alt={tags}
            imgModal={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
