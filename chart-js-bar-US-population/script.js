const fetchData = async () => {
  const res = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
  const data = await res.json();
  console.log(data);
  const length = data.data.length;
  console.log(length);

  const labels = [];
  const values = [];

  for (let i = 0; i < length; i++) {
    labels.push(data.data[i].Year);
    values.push(data.data[i].Population);
  }

  new Chart(document.getElementById('myChart').getContext('2d'), {
    type: 'bar', // doughnut
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: [
            '#3e95cd',
            '#8e5ea2',
            '#3cba9f',
            '#e8c3b9',
            '#c45850',
            '#CD5C5C',
            '#40E0D0',
          ],
          data: values,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'U.S population',
      },
    },
  });
};

fetchData();
