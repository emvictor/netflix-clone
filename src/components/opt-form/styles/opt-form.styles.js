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

export const Text = styled.p``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 2rem;
  font-size: 1.635rem;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 0.625rem;
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 1000px) {
      width: 1rem;
    }
  }
`;
