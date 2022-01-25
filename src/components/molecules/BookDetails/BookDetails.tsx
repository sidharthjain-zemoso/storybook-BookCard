import BookHeading from "../../atoms/BookHeading/BookHeading";
import ClockIcon from "../../atoms/ClockIcon/ClockIcon";
import "./BookDetails.css";

type BookDetailsProps = {
  bookHeading: string;
  authorName: string;
  minuteRead: number;
  variant: string;
};

const BookDetails: React.FC<BookDetailsProps> = ({
  bookHeading,
  authorName,
  minuteRead,
  variant,
  ...rest
}: BookDetailsProps) => {
  return (
    <div className={`details-wrapper ${variant}`} {...rest}>
      <BookHeading heading={bookHeading} />
      <p>{authorName}</p>
      <div className="read-time">
        <ClockIcon /> <span>{minuteRead}-minute read</span>
      </div>
    </div>
  );
};

export default BookDetails;
