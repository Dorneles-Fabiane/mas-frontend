import { ActivityTable } from "../../components/ActivityTable";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import { Container } from "../Dashboard/styles";

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Summary />
        <ActivityTable />
      </Container>
    </>
  );
}