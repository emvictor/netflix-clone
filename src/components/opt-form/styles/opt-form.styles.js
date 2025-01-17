import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 1.25rem;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 28.125rem;
  width: 100%;
  border: 0;
  padding: 0.625rem;
  height: 4.375rem;
  box-sizing: border-box;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 4.375rem;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 2rem;
  font-size: 1.635rem;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 3.125rem;
    font-size: 1rem;
    margin-top: 1.25rem;
    font-weight: bold;
  }

  img {
    margin-left: 0.625rem;
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 1000px) {
      width: 1rem;
    }
  }
`;
