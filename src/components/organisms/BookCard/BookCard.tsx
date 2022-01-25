import BookDetails from "../../molecules/BookDetails/BookDetails";
import BookImage from "../../atoms/BookImage/BookImage";
import "./BookCard.css";

type BookCardProps = {};

const BookCard: React.FC<BookCardProps> = (props) => {
  return (
    <div className="book-card">
      <BookImage />
      <BookDetails
        bookHeading="Beyond Entrepreneurship"
        authorName="Jim Collins & Bill Lazier"
        minuteRead={13}
        variant="none"
      />
      <div className="rectangle"></div>
    </div>
  );
};

export default BookCard;
