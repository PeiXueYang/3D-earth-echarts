    var dom = document.getElementById("container");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        color:['#47d3cd','#747777','#ae8a47'],
        legend: {
              orient: 'horizontal', // 'vertical'//horizontal
              x: '0',
              data:['煤炭','粮食','矿石'],
              icon:"rect",
              itemGap:10,
              textStyle:{
                color:'#fff'
            }
        },
        series: [{
            breadcrumb:{
               show:false,
            },
            type: 'treemap',
            roam:false,
            data: [
            {
                value:1000,
                name:'煤炭',
            },{
                value:2000,
                name:'粮食',
                children:[
                {
                    value:'18',
                    name:'玉米',
                    itemStyle:{  color:'rgb(200,210,99,0.5)'},
                    children:[{
                        value:'6',
                        name:'水稻',
                        itemStyle:{  color:'pink'},
                    },{
                        value:'12',
                        name:'大豆',
                        itemStyle:{  color:'rgb(200,210,99,0.5)'},
                    }]
                },{
                    value:'10',
                    name:'大豆',
                },
                ]

            },
            {
                value:3000,name:'矿石'
            }
            ]
        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
