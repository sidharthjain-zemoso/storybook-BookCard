type BookHeadingProps = {
  heading: string;
};

const BookHeading: React.FC<BookHeadingProps> = (props) => {
  return <h2>{props.heading}</h2>;
};

export default BookHeading;
