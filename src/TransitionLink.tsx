import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

export const TransitionLink = (props: LinkProps) => {
  const { children, onClick, ...rest } = props;
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // @ts-ignore
    if (document.startViewTransition) {
      // @ts-ignore
      document.startViewTransition();
    }
    onClick?.(event);
  };

  return (
    <Link {...rest} onClick={handleClick}>
      {children}
    </Link>
  );
};
