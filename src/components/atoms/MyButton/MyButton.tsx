import "./MyButton.css";

// type MyButtonProps = {
//   variant: string;
//   children: JSX.Element;
// };

// const MyButton = (props: MyButtonProps) => {
//   const { variant = "primary", children, ...rest } = props;
//   return (
//     <div>
//       <button className={`button ${variant}`} {...rest}>
//         {children}
//       </button>
//     </div>
//   );
// };

// export default MyButton;

import React from "react";

type Props = {
  variant: string;
  children: JSX.Element;
};

function MyButton({ variant, children, ...rest }: Props) {
  return (
    <div>
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default MyButton;
