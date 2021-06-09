import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container> 

      <Content>
        <h1>My Activity Space</h1> 

        <div>
          <button type="button">
            New curricular unit
          </button>
          <button type="button">
            New Activity
          </button>
        </div>
      </Content>

    </Container>
  );
}