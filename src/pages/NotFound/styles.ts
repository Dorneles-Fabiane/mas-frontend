import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`

background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  h2 {
    margin-bottom: 30px;
    font-size: 2.5rem;
    font-weight: bold;
    color: #305F79
  }
`;

export const Background = styled.div`
  flex: 1;
  background: #3CB371 url('//image.freepik.com/free-vector/404-error-page-found_41910-364.jpg') no-repeat center;
  background-size: cover;
`;