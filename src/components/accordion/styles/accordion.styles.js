import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-bottom: 0.5rem solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4.375rem 2.8125rem;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 0.625rem;
  margin: auto;
  max-width: 670px;
  width: 100%;
  &:first-of-type {
    margin-top: 3rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 1.625rem;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8rem 1.2rem;
  align-items: center;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 1.5rem;

    @media (max-width: 600px) {
      width: 1rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  max-height: 1200px;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8rem 2.2rem;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.375rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;
