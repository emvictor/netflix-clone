import { Background, Container, Logo, Button } from "./styles/header.styles";
import Link from "next/link";

export default function Header({ bg = true, children, ...props }) {
  return bg ? <Background {...props}>{children}</Background> : { children };
}

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ children, ...props }) {
  return (
    <Link href={`/`}>
      <Logo {...props} />
    </Link>
  );
};

Header.Button = function HeaderButton({ children, ...props }) {
  return (
    <Link href={`/browse`}>
      <Button {...props}>{children}</Button>
    </Link>
  );
};
