import type { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

export const TransitionLink = (props: LinkProps) => {
  const { children, onClick, ...rest } = props;
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (document.startViewTransition) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.startViewTransition(() => onClick?.(event));
    } else {
      onClick?.(event);
    }
  };

  return (
    <Link {...rest} onClick={handleClick}>
      {children}
    </Link>
  );
};
