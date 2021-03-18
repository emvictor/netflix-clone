import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 4.375rem 3.5rem;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 4.375rem 1.875rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 1rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  font-size: 0.8125rem;
  color: #757575;
  margin-bottom: 2.5rem;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
