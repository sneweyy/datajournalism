function message() {
  var whichParty = document.getElementById("party");
  var party = whichParty.options[whichParty.selectedIndex].value;
  
  if(party == '1') {
    document.getElementById("conservatives").className = "show";
    document.getElementById("labour").className = "hidden";
    document.getElementById("libdem").className = "hidden";
    document.getElementById("overview").className = "hidden";
} 
  
  else if(party == '2') {
    document.getElementById("labour").className = "show"; 
  document.getElementById("conservatives").className = "hidden";
    document.getElementById("libdem").className = "hidden";
    document.getElementById("overview").className = "hidden";

} 
  
  else if(party == '3') {
    document.getElementById("libdem").className = "show";
    document.getElementById("labour").className = "hidden"; 
  document.getElementById("conservatives").className = "hidden";
  document.getElementById("overview").className = "hidden";
}
  else if(party == '4') {
    document.getElementById("conservatives").className = "hidden";
    document.getElementById("labour").className = "hidden";
    document.getElementById("libdem").className = "hidden";
    document.getElementById("overview").className = "show";
} 
}  

Highcharts.chart('pie', {
    colors: ['#990000', '#cecccc'],
    chart: {
        plotBackgroundColor: '#dae4e9',
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Gender<br>breakdown of<br>London Councils',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
 
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Proportion of Councillors',
        innerSize: '55%',
        data: [
            ['Women', 762],
            ['Men', 1197],
           
            {
               
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});




Highcharts.chart('container', {
    colors: ['#990000'],
    chart: {
        type: 'column',
        backgroundColor: '#dae4e9',
        plotBorderWidth: 0,
        plotShadow: false,
        
    },
    title: {
        text: 'Female Councillors in London Borough Councils'
    },
    subtitle: {
        
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Female Councillors: <b>{point.y:.1f}%</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ["Lambeth", 47.6], 
            ["Southwark", 44.4],
            ["Haringey",43.9],
            ["Islington",43.8],
            ["Camden", 42.6],
            ["Hackney", 42.1],
            ["Barking and Dagenham", 42.0],
            ["Brent", 41.9],
            ["Wandsworth", 41.7],
            ["Richmond upon Thames", 41.5],
            ["Enfield", 41],
            ["Kensington and Chelsea", 40.0],
            ["Merton",40.0], 
            ["Newham",40.0], 
            ["Barnet",39.7],
            ["Harrow",39.7],
            ["Hammersmith and Fulham", 39.1],
            ["Lewisham",38.9],
            ["Sutton",38.9],
            ["City of Westminster",38.3],
            ["Greenwich",37.3],
            ["Croyden",36.8],
            ["Bromley",36.7],
            ["Waltham",36.7],
            ["Kingston upon Thames",35.4],
            ["Hounslow",35.1],
            ["Bexley",33.9],
            ["Ealing",33.3],
            ["Hillingdon",30.2],
            ["Redbridge",27.0],
            ["Tower Hamlets", 26.7],
            ["Havering",24.5],
        ],
        dataLabels: {
            enabled: false,
            rotation: -90,
            colors: '#12065f',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
