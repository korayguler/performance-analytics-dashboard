/* eslint-disable */
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
      markers: {
        size: 0,
      },
      dataLabels: {
        enabled: false,
      },

      tooltip: {
        enabled: false,
      },
      marker: {
        show: false,
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
          colors: ['#f3f3f3'],
        },
      },
      xaxis: {
        categories: props.dates,
      },
    });
  }, [props]);

  const [series, SET_SERIES] = useState([]);

  const [options, SET_OPTIONS] = useState({});

  return (
    <div id='chart'>
      <Chart options={options} series={series} type='line' height={320} />
    </div>
  );
};

export default ApexChart;
