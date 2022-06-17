
// Bar chart
var xValues = ["Matériel", "Competition", "Specifique", "Deplacement", "Nourriture"];
var yValues = [1600,1200, 1600, 15800, 16400];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: "World Wide Wine Production 2018"
    }
  }
});

// Slider

window.addEventListener('scroll', ()=> {

  let content = document.querySelector('.p')
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (contentPosition < screenPosition) {

    content.classList.add('active');

  }

})



