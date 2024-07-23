import {
  ChartWrapper,
  CardWrapper,
} from './dashboarElements';

import { Container } from '../../utils/GlobalStyle/lextaCore.jsx'

import {
  Grid,
  GridItem,
} from '../../utils/GlobalStyle/lextaCore'

import LineChart from '../../components/LineChart.js';
import BarChart from '../../components/BarChart/index.jsx';
import Card from '../../components/Card';

function Dashboard() {
  const cardContent = [
    {
      title: 'Total Revenue',
      total: 478340000,
      monthlyRevenueDifference: 0.02,
    },
    {
      title: 'Total Pendaftaran',
      total: 412,
      monthlyRevenueDifference: 2,
    },
    {
      title: 'Total Cabang',
      total: 2,
      monthlyRevenueDifference: 0,
    },
    {
      title: 'Total Agen',
      total: 354,
      monthlyRevenueDifference: 5,
    },
  ]


  return (
    <Container>
      <Grid>
        <GridItem>
          <CardWrapper>
            {cardContent.map((card, i) => (
              <Card key={i} data={card}/>
            ))}
          </CardWrapper>
        </GridItem>
      </Grid>
      <Grid size={12}>
        <GridItem>
          <ChartWrapper style={{ marginTop: 30, marginBottom: 30 }}>
            <LineChart data={[]}/>
          </ChartWrapper>
        </GridItem>
      </Grid>
      <Grid size={6}>
        <GridItem>
          <ChartWrapper
            style={{
              height: '500px',
              width: '500px',
            }}
          >
            Grafik Penjualan Produk
            <BarChart data={[]}/>
            sdfsdfsd
          </ChartWrapper>
        </GridItem>
        <GridItem>
        </GridItem>
      </Grid>
    </Container>
  );
}

Dashboard.propTypes = {
}

export default Dashboard;
