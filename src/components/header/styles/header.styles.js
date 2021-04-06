import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : `../images/misc/home-bg.jpg`});
`;

export const Container = styled.div`
  display: flex;
  margin: 0 3.5rem;
  height: 4rem;
  padding: 1.125rem 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 1.875rem;
  }
`;

export const Logo = styled.img`
  height: 2rem;
  width: 6.75rem;
  margin-right: 2.5rem;

  @media (min-width: 1449px) {
    height: 2.8125rem;
    width: 10.4375rem;
  }
`;

export const Button = styled.button`
  display: block;
  background-color: #e50914;
  width: 5.25rem;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 0.9375rem;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background-color: #f40612;
  }
`;
