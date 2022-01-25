import BookImage from "../../atoms/BookImage/BookImage";
import "./ImageDetails.css";

type ImageDetailsProps = {};

const ImageDetails: React.FC<ImageDetailsProps> = (props) => {
  return (
    <div className="image-wrapper">
      <BookImage />
    </div>
  );
};

export default ImageDetails;
