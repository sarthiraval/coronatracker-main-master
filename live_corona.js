cityName = document.getAnimations('city')
btn = document.getElementById('search-btn')
const ctx = document.getElementById('myChart').getContext('2d');

btn.addEventListener('click',() =>{
  window.location.reload()
})



function Displaydata() {
    var url = 'https://api.covid19api.com/summary'
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        var country = data.Countries.map(function (elem) {
            return elem.Country
        })
        var confirmD = data.Countries.map(function (newd) {
            return newd.TotalConfirmed
        })
        var TotalD = data.Countries.map(function (totd){
            return totd.TotalDeaths
        })
        console.log(confirmD);
        console.log("NewConfirmed",data.Global.NewConfirmed);
        console.log("TotalConfirmed",data.Global.TotalConfirmed);
        console.log("NewDeaths",data.Global.NewDeaths);
        new Chart(ctx, {
            type: 'bar',
            data: {
              labels: country,
              datasets: [{
                label: 'Corona Live TotalConfirm Death',
                data: confirmD,
                backgroundColor: 'transparent',
                borderColor: 'red',
                borderWidth: 4,
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              },
              responsive: false,
              animation:{
                duration: 1000,
                easing: "easeInOutBounce"
            },
            }
          });
        }
    )
}
Displaydata()