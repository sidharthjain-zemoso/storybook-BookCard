import moreIcon from "./more.png";

type MoreIconProps = {};

const MoreIcon: React.FC<MoreIconProps> = (props) => {
  return <img src={moreIcon} alt="more icon" />;
};

export default MoreIcon;
