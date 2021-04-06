import { Header } from "../components";

export default function HeaderContainer({ children, ...props }) {
  return (
    <Header>
      <Header.Frame>
        <p>batatatata</p>
        <Header.Logo />
      </Header.Frame>
    </Header>
  );
}
