import ClockIcon from "../../atoms/ClockIcon/ClockIcon";
import MoreIcon from "../../atoms/MoreIcon/MoreIcon";
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
      <h2>{bookHeading}</h2>
      <p>{authorName}</p>
      <div className="read-time">
        <ClockIcon /> <span>{minuteRead}-minute read</span>
      </div>
      <div className="more-icon-wrapper">
        <MoreIcon />
      </div>
    </div>
  );
};

export default BookDetails;
