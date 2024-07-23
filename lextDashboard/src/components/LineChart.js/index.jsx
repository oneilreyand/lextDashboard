import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Mendaftarkan komponen-komponen yang diperlukan
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: 'My First dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 11, 48, 20, 39, 46, 77, 59],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'My Second dataset',
        data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },

      // {
      //   label: 'My Second dataset',
      //   data: [11, 48, 20, 39, 46, 77, 59, 28, 48, 40, 19, 86, 27],
      //   fill: false,
      //   backgroundColor: 'rgba(153, 102, 255, 0.2)',
      //   borderColor: 'rgba(200, 102, 255, 1)',
      // },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>LEX Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
