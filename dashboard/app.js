document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("myBarChart").getContext("2d");

  const labels = [];
  for (let i = 1; i <= 25; i++) {
    labels.push(`March ${i}, 2020`);
  }

  const dataValues = [
    5, 8, 7, 4, 5, 4, 6, 4, 5, 4, 5, 8, 7, 4, 5, 4, 6, 4, 5, 7, 6, 4, 5, 8, 6,
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Daily Sales",
        data: dataValues,
        backgroundColor: "#D0E4FF",
        borderColor: "#D0E4FF",
        hoverBackgroundColor: "#157AFF",
        borderWidth: 1,
        barThickness: 15,
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      layout: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      barPercentage: 0.8,
      categoryPercentage: 0.4,
    },
  };

  // Set the canvas width and height explicitly
  ctx.canvas.width = 510;
  ctx.canvas.height = 60;

  new Chart(ctx, config);
});
