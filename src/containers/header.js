import { Header } from "components";

export default function HeaderContainer({ children, ...props }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={`/images/icons/logo.svg`} alt={`Netflix`} />
        <Header.Button>Sign In</Header.Button>
      </Header.Frame>
      {children}
    </Header>
  );
}
