const ctx = document.getElementById('myChart');
const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const data = [12, 19, 3, 5, 2.5, 3];

const myChart = new Chart(ctx, {
  type: 'bar', // 'doughnot', 'bar', 'pie'
  data: {
    labels,
    datasets: [
      {
        data,
        hoverBackgroundColor: [
          'rgba(228, 85, 132, 0.8)',
          'rgba(107, 214, 227, 0.8)',
          'rgba(227, 216, 95, 0.8)',
          'rgba(95, 227, 142, 0.8)',
          'rgba(161, 124, 235, 0.8)',
          'rgba(255, 184, 124, 0.8)',
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// const fetchData = async () => {
//   const res = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
//   const data = await res.json();
//   console.log(data);
//   const length = data.data.length;
//   console.log(length);

//   const labels = [];
//   const values = [];

//   for (let i = 0; i < length; i++) {
//     labels.push(data.data[i].Year);
//     values.push(data.data[i].Population);
//   }

//   new Chart(document.getElementById('bar-chart'), {
//     type: 'bar',
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: 'Population (millions)',
//           backgroundColor: [
//             '#3e95cd',
//             '#8e5ea2',
//             '#3cba9f',
//             '#e8c3b9',
//             '#c45850',
//             '#CD5C5C',
//             '#40E0D0',
//           ],
//           data: values,
//         },
//       ],
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: 'U.S population',
//       },
//     },
//   });
// };

// fetchData();
