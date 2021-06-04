import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewActivityModal: () => void;
  onOpenNewCourseUnitModal: () => void;
}

export function Header({onOpenNewActivityModal, onOpenNewCourseUnitModal}: HeaderProps) {
  return (
    <Container> 

      <Content>
        <h1>My Activity Space</h1> 

        <div>
          <button 
            type="button"
            onClick={onOpenNewCourseUnitModal}
          >
            New curricular unit
          </button>
          <button 
            type="button"
            onClick={onOpenNewActivityModal}  
          >
            New Activity
          </button>
        </div>
      </Content>

    </Container>
  );
}