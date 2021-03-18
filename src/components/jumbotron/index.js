import { Inner, Container } from "./styles/jumbotron.styles";

export default function Jumbotron({ children, direction = "row", ...props }) {
  return (
    <Inner direction={direction}>
      <p>batata</p>
      <p>Jumbotron</p>
    </Inner>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};
