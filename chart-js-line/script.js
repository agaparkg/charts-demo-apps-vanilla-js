const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First dataset',
      // fill: true,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45, 20, 15, 35, 50, 40, 10],
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {},
};
const myChart = new Chart(document.getElementById('myChart'), config);
