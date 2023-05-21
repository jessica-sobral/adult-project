function createData(labels, label, data, colors) {
  return {
    labels: labels,
    datasets: [{
      label: label,
      data: data,
      backgroundColor: colors,
      hoverBackgroundColor: colors,
      hoverOffset: 4
    }]
  }
}

function createOptions(text, position) {
  return {
    responsive: true,
    plugins: {
      legend: {
        position: position,
      },
      title: {
        display: true,
        text: text
      },
      datalabels: {
        formatter: function (value, context) {
          return null;
        }
      }
    }
  }
}

function createContext(canvasId) {
  const canvas = document.getElementById(canvasId);
  return canvas.getContext("2d");
}