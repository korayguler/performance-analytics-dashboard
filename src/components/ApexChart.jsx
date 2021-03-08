import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ApexChart = (props) => {
  useEffect(() => {
    SET_SERIES([
      {
        data: props.dataset,
      },
    ]);

    SET_OPTIONS({
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: props.title,
        align: 'center',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: props.dates,
      },
    });
  }, [props.dataset]);

  const [series, SET_SERIES] = useState([]);

  const [options, SET_OPTIONS] = useState({});

  return (
    <div id='chart'>
      <Chart options={options} series={series} type='line' height={320} />
    </div>
  );
};

export default ApexChart;
