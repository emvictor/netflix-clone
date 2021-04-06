import Link from "next/link";
import { Background, Container, Logo } from "./styles/header.styles";

export default function Header({ bg = true, children, ...props }) {
  return bg ? <Background {...props}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ children, ...props }) {
  return (
    <Link href="/">
      <Logo {...props} />
    </Link>
  );
};
