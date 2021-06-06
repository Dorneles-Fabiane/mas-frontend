import { FiLogOut } from 'react-icons/fi';
import { Container, Content } from "./styles";
import { useAuth } from '../../hooks/Auth';

interface HeaderProps {
  onOpenNewActivityModal: () => void;
  onOpenNewCourseUnitModal: () => void;
}

export function Header({onOpenNewActivityModal, onOpenNewCourseUnitModal}: HeaderProps) {

  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

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
          <button
            type="button"
            onClick={handleSignOut}
          >
            <FiLogOut size={20} />
          </button>
        </div>
      </Content>

    </Container>
  );
}