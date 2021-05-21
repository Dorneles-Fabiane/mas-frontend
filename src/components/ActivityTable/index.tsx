import { Container } from './styles';

export function ActivityTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Curricular Unit</th>
            <th>Activity</th>
            <th>Evaluation</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Web Programing</td>
            <td>Frontend development</td>
            <td>9.5</td>
            <td>21/05/2021</td>
          </tr>
          <tr>
            <td>Web Programing</td>
            <td>Authentication Implementation</td>
            <td>10</td>
            <td>03/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}