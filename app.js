let myChart = document.getElementById('myChart').getContext('2d');

let questionsChart = new Chart(myChart, {
    type: 'pie',
    data: {
        labels: ['Numbering Systems', 'Classes', 'Objects', 'Methods'],
        datasets: [
            {
                label: 'Questions',
                data: [10, 2, 6, 3],
                backgroundColor: ['green', 'red', 'blue', 'orange']

            }]
    },
    options: {}
});