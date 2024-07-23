import { Container } from '../../utils/GlobalStyle/lextaCore.jsx';
import Schedule from '../../components/TimeSchedule/index.jsx';
import { GlobalStyle } from '../../utils'

function TravelSchedule() {
  return (
    <Container>
      <GlobalStyle/>
      <Schedule/>
    </Container>
  )
}

export default TravelSchedule
