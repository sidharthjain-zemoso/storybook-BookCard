import BookDetails from "../../molecules/BookDetails/BookDetails";
import ImageDetails from "../../molecules/ImageDetails/ImageDetails";
import "./BookCard.css";

type BookCardProps = {};

const BookCard: React.FC<BookCardProps> = (props) => {
  return (
    <div className="book-card">
      <ImageDetails />
      <BookDetails
        bookHeading="Beyond Entrepreneurship"
        authorName="Jim Collins & Bill Lazier"
        minuteRead={13}
        variant="none"
      />
    </div>
  );
};

export default BookCard;
