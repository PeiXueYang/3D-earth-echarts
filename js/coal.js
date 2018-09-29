        var dom2 = document.getElementById("exl1");
        var myChart = echarts.init(dom2);
        var app = {};
        option = null;
        var base = +new Date(2017, 3, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 100];

        for (var i = 1; i < 1000; i++) {
          var now = new Date(base += oneDay);
          date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
          data.push(Math.abs(Math.round((Math.random() - 0.5) * 100 + data[i - 1])));
        }

        option = {
         grid:{
           top:20,
         },
         backgroundColor:'rgba(0, 0, 2, 0.7)' ,
         xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date,
          axisLine : {
           show: true,
           textStyle: {
            color: '#fff'
          }, lineStyle:{
           color:'#fff'
         }
       },
       splitLine:{
        show:false,
      }
    },
    yAxis: {
      splitNumber:3,
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine:{
        show:false,
      },
      axisLine : {
       show: true,
       textStyle: {
        color: '#fff'
      },
      lineStyle:{
       color:'#fff'
     }
   }
 },
 dataZoom: [{
  type: 'inside',
  start: 0,
  end: 10
}, {
  start: 0,
  end: 10,
  handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
  handleSize: '80%',
  handleStyle: {
    color: '#fff',
    shadowBlur: 3,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffsetX: 2,
    shadowOffsetY: 2
  }
}],
series: [
{
  name:'模拟数据',
  type:'line',
  smooth:true,
  symbol: 'none',
  sampling: 'average',
  itemStyle: {
   color: '#1597c4'
 },
 areaStyle: {
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#3dfcf2'
  }, {
    offset: 1,
    color: '#108bc1'
  }])
},
data: data,
labelLine:{
  normal:{
    show:false
  }
}
}
]
};

if (option && typeof option === "object") {
  myChart.setOption(option, true);
}
