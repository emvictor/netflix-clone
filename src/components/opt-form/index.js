import {
  Container,
  Input,
  Button,
  Text,
  Break,
} from "./styles/opt-form.styles";
import Link from "next/link";

export default function OptForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...props }) {
  return <Input {...props} />;
};

OptForm.Button = function OptFormButton({ children, ...props }) {
  return (
    <Link href="/browse">
      <Button {...props}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
      </Button>
    </Link>
  );
};

OptForm.Text = function OptFormText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...props }) {
  return <Break {...props} />;
};
