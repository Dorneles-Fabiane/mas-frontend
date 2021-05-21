import { GoFile, GoNote, GoGraph } from 'react-icons/go';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Curricular Units</p>

          <GoFile size={40} />

          <strong>
            25
          </strong>
        </header>
      </div>
      <div>
        <header>
          <p>Activities</p>

          <GoNote size={40} />

          <strong>
            80
          </strong>
        </header>
      </div>
      <div className="highlight-background">
        <header>
          <p>Overall Average</p>
        </header>
        <GoGraph size={40} />
        <strong>
          9.4
        </strong>
      </div>
    </Container>
  );
}