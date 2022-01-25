import AccessTimeIcon from "@mui/icons-material/AccessTime";

type ClockIconProps = {};

const ClockIcon: React.FC<ClockIconProps> = ({ ...rest }: ClockIconProps) => {
  return (
    <div>
      <AccessTimeIcon />
    </div>
  );
};

export default ClockIcon;
