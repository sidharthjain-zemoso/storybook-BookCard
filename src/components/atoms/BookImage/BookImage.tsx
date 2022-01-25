import bookImage from "./BookImage.png";
import "./BookImage.css";

type BookImageProps = {};

const BookImage: React.FC<BookImageProps> = (props) => {
  return <img src={bookImage} alt="Book Card" />;
};

export default BookImage;
