(function(){
    
    var myChart=echarts.init(document.querySelector(".bar .chart"));
    option = {
        color: ['#2f89cf'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox:{
            
          feature:{
              myFull: {
                show: true,
                title: 'Detailed View',
                icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                onclick: function (e){  
                    var opts = e.getOption();
                    // e.option.value='.chart';
                    opts.toolbox[0].feature.myFull.show=false;
                    opts.toolbox[0].feature.saveAsImage.show=false;
                    opts.toolbox[0].feature.dataView.show=false;
                    opts.series[0].realtimeSort=true;
                opts.series[0].label.valueAnimation=true;
                opts.yAxis[0].animationDuration= 300;
                opts.yAxis[0].animationDurationUpdate=300;
               // opts.xAxis[0].max='dataMax';
                opts.animationDuration=3000;
                opts.animationDurationUpdate=3000;
                opts.animationEasing='linear';
                opts.animationEasingUpdate='linear';
                    // opts.xAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                    // opts.yAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                    // opts.yAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";
                    // opts.yAxis[0].splitLine.color="rgba(255,25,255,0.6)";
                    // opts.xAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";

                    // opts.xAxis.show=true;
                    // layer.open({
                    //     title: '在线调试'
                    //     ,content: '可以填写任意的layer代码'
                    //   });
                    //window.top表示最顶层iframe  如果在当页面全屏打开 删去window.top即可
                    window.top.layer.open({
                        title:false,
                        type:1,
                        shadeClose: true,
                        area:['800px','800px'],
                        content:'<div class="fullChart" style="height:800px;width:800px;background-image: linear-gradient(to right , #8EC5FC, #E0C3FC);padding:0px 0px"></div>',
                        success:function(){
                            var fullchart = echarts.init(document.querySelector(".fullChart"));
                            fullchart.setOption(opts);
                        }
                    });
                    
                }
            },
            saveAsImage:{
                title:" ",
                backgroundColor: 'auto'
            },
            dataView:{
                title:" "
            }
        
          },orient:"horizontal"
        },
        
        grid: {
            top:'15%',
          left: '0%',
          right: '0%',
          bottom: '3%',
          containLabel: true
        },
        
        xAxis: [
          {
            type: 'category',
            
            data: ['Spring', 'Hibernate', 'Struts', 'Grails', 'Blade', 'Vaadin'],
            axisTick: {
              alignWithLabel: true
            },
            //修改刻度
            axisLabel: {
                color: "rgba(255,255,255,0.8)",
                //fontSize: 11,
                interval:0
              },
              axisLine:{
                  show:true
              }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,0.8)",
                fontSize: 12
              },
              axisLine: {
                show:true,
                lineStyle: {
                  //color: "rgba(255,255,255,0.6)",
                  //width: 2
                }
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,0.1)"
                }
              }
          }
        ],
       
        series: [
          {
              //name与光标有关
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [155.48, 25.14, 3.45,1.18,19.596,4.33],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
              }
          }
        ]
      };
      
      myChart.setOption(option);
    
      // 屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize();
      })
})();

//bar 2
(function(){
    var myChart=echarts.init(document.querySelector(".bar2 .chart"));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6","#1089E7"];
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          toolbox:{
            
            feature:{
                myFull: {
                  show: true,
                  title: 'Detailed View',
                  icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
                  onclick: function (e){  
                      var opts = e.getOption();
                     // opts.toolbox[0].feature.myFull.show=true;
                      opts.toolbox[0].feature.myFull.show=false;
                opts.toolbox[0].feature.saveAsImage.show=false;
                opts.toolbox[0].feature.dataView.show=false;
                opts.series[0].realtimeSort=true;
                opts.series[0].label.valueAnimation=true;
                opts.yAxis[0].animationDuration= 300;
                opts.yAxis[0].animationDurationUpdate=300;
               // opts.xAxis[0].max='dataMax';
                opts.animationDuration=3000;
                opts.animationDurationUpdate=3000;
                opts.animationEasing='linear';
                opts.animationEasingUpdate='linear';
                      // layer.open({
                      //     title: '在线调试'
                      //     ,content: '可以填写任意的layer代码'
                      //   });
                      //window.top表示最顶层iframe  如果在当页面全屏打开 删去window.top即可
                      window.top.layer.open({
                          title:false,
                          type:1,
                          shadeClose: true,
                          area:['800px','800px'],
                          content:'<div class="fullChart" style="height:800px;width:800px;background-image: linear-gradient(to right , #8EC5FC, #E0C3FC);padding:0px 0px"></div>',
                         success:function(){
                              var fullchart = echarts.init(document.querySelector(".fullChart"));
                              fullchart.setOption(opts);
                          }
                      });
                      
                  }
              },
              saveAsImage:{
                  title:" ",
                  backgroundColor: 'auto'
              },
              dataView:{
                  title:" "
              }
          
            },orient:"horizontal"
          },
        grid: {
            top: "10%",
            left: '22%',
            bottom: '10%',
          //containLabel: true
        },
        xAxis: {
            show:false,
        //   type: 'value',
        //   boundaryGap: [0, 0.01]
        },
        yAxis: [{    
        
            type: 'category',
            // y轴数据反转，与数组的顺序一致
            inverse: true,
            // 不显示y轴线和刻度
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            // 将刻度标签文字设置为白色
            axisLabel: {
              color: "#fff"
            },
            data: ['Spring', 'Hibernate', 'Struts', 'Grails', 'Blade', 'Vaadin']
          
          },{
              // y轴数据反转，与数组的顺序一致
      inverse: true,
     //show: false,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        //interval:0,
        color: "#fff"
      },
      axisPointer:{
        show:false
      },
      data: [708, 815, 809, 368, 129,799]
    }
        ],
        series: [
          {
           // name: '2011',
            type: 'bar',
           // data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle:{
                barBorderRadius:20,
                color:function(params){
                    var len=myColor.length;
                    return myColor[params.dataIndex%len];
                }
            },
            barCategoryGap:50,
            barWidth:10,
            yAxisIndex:0,
            data: [695,797,796,365,118,780],
            label:{
                show:true,
                position:'inside',
                textStyle: { //数值样式
                  color: 'white',//字体颜色
                  
      },
                formatter:"{c}"
            }
          },
          {
          //  name: '框',
            type: 'bar',
            // 柱子之间的距离
            barCategoryGap: 50,
            // 柱子的宽度
            barWidth: 14,
            // 层级 相当于z-index
            yAxisIndex: 1,
            // 柱子修改样式
            itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 2,
              barBorderRadius: 15,
            },
            data: [708, 815, 809, 368, 129,799],
            label:{
              show:false
          }
          }
          
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize', function () {
        myChart.resize();
      })
})();
// (function(){
//     var myChart=echarts.init(document.querySelector(".line .chart"));
//     option = {
//       color: ['#00f2f1', '#ed3f35'],
//         title: {
//          // text: 'Stacked Line'
//         },
//         tooltip: {
//           trigger: 'axis'
//         },
//         legend: {
//             // 修改图例组件文字颜色
//             textStyle: {
//               color: '#4c9bfd'
//             },
//             right: "10%",
//           },
//         grid: {
//             top: "20%",
//             left: '1%',
//             right: '1%',
//             bottom: '1%',
//             containLabel: true,
//             show: true, // 显示边框
//             borderColor: '#012f4a' // 边框颜色
//           },
//         toolbox: {
//             orient:"horizontal",
//           feature: {
//             myFull: {
//                 show: true,
//                 title: '全屏查看',
//                 icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
//                 onclick: function (e){  
//                     var opts = e.getOption();
//                     // e.option.value='.chart';
//                     opts.toolbox[0].feature.myFull.show=false;
//                     opts.toolbox[0].feature.saveAsImage.show=false;
//                     // opts.toolbox[0].feature.dataView.show=false;
//                     // opts.xAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
//                     // opts.yAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
//                     // opts.yAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";
//                     // opts.yAxis[0].splitLine.color="rgba(255,25,255,0.6)";
//                     // opts.xAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";

//                     // opts.xAxis.show=true;
//                     // layer.open({
//                     //     title: '在线调试'
//                     //     ,content: '可以填写任意的layer代码'
//                     //   });
//                     //window.top表示最顶层iframe  如果在当页面全屏打开 删去window.top即可
//                     window.top.layer.open({
//                         title:false,
//                         type:1,
//                         shadeClose: true,
//                         area:['800px','800px'],
//                         content:'<div class="fullChart" style="height:800px;width:800px;padding:0px 50px"></div>',
//                         success:function(){
//                             var fullchart = echarts.init(document.querySelector(".fullChart"));
//                             fullchart.setOption(opts);
//                         }
//                     });
                    
//                 }
//             },
//             saveAsImage: {}
//           }
//         },
//         xAxis: {
//             type: 'category',
//             boundaryGap: false, // 去除轴间距
//             splitNumber:13,
//             data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
//              // 去除刻度线
//             axisTick: {
//               show: false
//             },
//             axisLabel: {
//               color: "#4c9bfb" // x轴文本颜色
              
//             },
//             axisLine: {
//               show: false // 去除轴线
//             }
//           },
//           yAxis: {
//             type: 'value',
//             // 去除刻度线
//             axisTick: {
//               show: false
//             },
//             axisLabel: {
//               color: "#4c9bfb" // x轴文本颜色
//             },
//             axisLine: {
//               show: false // 去除轴线
//             },
//             splitLine: {
//               lineStyle: {
//                 color: "#012f4a"
//               }
//             }
//           },
//         series: [
//         //   {
//         //     name: 'Email',
//         //     type: 'line',
//         //     stack: 'Total',
//         //     data: [120, 132, 101, 134, 90, 230, 210]
//         //   },
//         //   {
//         //     name: 'Union Ads',
//         //     type: 'line',
//         //     stack: 'Total',
//         //     data: [220, 182, 191, 234, 290, 330, 310]
//         //   },
//         //   {
//         //     name: 'Video Ads',
//         //     type: 'line',
//         //     stack: 'Total',
//         //     data: [150, 232, 201, 154, 190, 330, 410]
//         //   },
//           {
//             name: '新增粉丝',
//             type: 'line',
//          //   stack: 'Total',
//             smooth:true,
//             data: [320, 332, 301, 334, 390, 330, 320,50,90,80,95,97,15]
//           },
//           {
//             name: '新增游客',
//             type: 'line',
//             smooth:true,
//           //  stack: 'Total',
//             data: [820, 932, 901, 50,90,80,95,97,15,934, 1290, 1330, 1320]
//           }
//         ]
//       };
//       myChart.setOption(option);
//       window.addEventListener('resize', function () {
//         myChart.resize();
//       })
// })();
//left 2
(function(){
    
  var myChart=echarts.init(document.querySelector(".line .chart"));
  option = {
      color: ['#2f89cf'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      toolbox:{
          
        feature:{
            myFull: {
              show: true,
              title: 'Detailed View',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function (e){  
                  var opts = e.getOption();
                  // e.option.value='.chart';
                  opts.toolbox[0].feature.myFull.show=false;
                  opts.toolbox[0].feature.saveAsImage.show=false;
                  opts.toolbox[0].feature.dataView.show=false;
                  opts.series[0].realtimeSort=true;
                opts.series[0].label.valueAnimation=true;
                opts.yAxis[0].animationDuration= 300;
                opts.yAxis[0].animationDurationUpdate=300;
               // opts.xAxis[0].max='dataMax';
                opts.animationDuration=3000;
                opts.animationDurationUpdate=3000;
                opts.animationEasing='linear';
                opts.animationEasingUpdate='linear';
                  // opts.xAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                  // opts.yAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                  // opts.yAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";
                  // opts.yAxis[0].splitLine.color="rgba(255,25,255,0.6)";
                  // opts.xAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";

                  // opts.xAxis.show=true;
                  // layer.open({
                  //     title: '在线调试'
                  //     ,content: '可以填写任意的layer代码'
                  //   });
                  //window.top表示最顶层iframe  如果在当页面全屏打开 删去window.top即可
                  window.top.layer.open({
                      title:false,
                      type:1,
                      shadeClose: true,
                      area:['800px','800px'],
                      content:'<div class="fullChart" style="height:800px;width:800px;background-image: linear-gradient(to right , #7A88FF, #7AFFAF);padding:0px 0px"></div>',
                      success:function(){
                          var fullchart = echarts.init(document.querySelector(".fullChart"));
                          fullchart.setOption(opts);
                      }
                  });
                  
              }
          },
          saveAsImage:{
              title:" ",
              backgroundColor: 'auto'
          },
          dataView:{
              title:" "
          }
      
        },orient:"horizontal"
      },
      grid: {
          top:'15%',
        left: '0%',
        right: '0%',
        bottom: '3%',
        containLabel: true
      },
      
      xAxis: [
        {
          type: 'category',
          
          data: ['Spring', 'Hibernate', 'Struts', 'Grails', 'Blade', 'Vaadin'],
          axisTick: {
            alignWithLabel: true
          },
          //修改刻度
          axisLabel: {
              color: "rgba(255,255,255,0.8)",
              //fontSize: 11,
              interval:0
            },
            axisLine:{
                show:true
            }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
              color: "rgba(255,255,255,0.8)",
              fontSize: 12
            },
            axisLine: {
              show:true,
              lineStyle: {
                //color: "rgba(255,255,255,0.6)",
                //width: 2
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            }
        }
      ],
      series: [
        {
            //name与光标有关
          name: 'Direct',
          type: 'bar',
          color:"#6C00C4",
          barWidth: '35%',
          data: [202.78, 59.35,5.43,0.83,62.12,8.93],
          itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5
            }
        }
      ]
    };
    
    myChart.setOption(option);
  
    // 屏幕自适应
    window.addEventListener('resize', function () {
      myChart.resize();
    })
})();

(function(){
    //test
  var myChart=echarts.init(document.querySelector(".pie .chart"));
  const labelRight = {
    position: 'right'
  };
  option = {
    
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    toolbox:{
            
      feature:{
          myFull: {
            show: true,
            title: 'Detailed View',
            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            onclick: function (e){  
                var opts = e.getOption();
                // e.option.value='.chart';
                opts.toolbox[0].feature.myFull.show=false;
                opts.toolbox[0].feature.saveAsImage.show=false;
                opts.toolbox[0].feature.dataView.show=false;
                opts.series[0].realtimeSort=true;
                opts.series[0].label.valueAnimation=true;
                opts.yAxis[0].animationDuration= 300;
                opts.yAxis[0].animationDurationUpdate=300;
               // opts.xAxis[0].max='dataMax';
                opts.animationDuration=3000;
                opts.animationDurationUpdate=3000;
                opts.animationEasing='linear';
                opts.animationEasingUpdate='linear';

                // opts.xAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                // opts.yAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                // opts.yAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";
                // opts.yAxis[0].splitLine.color="rgba(255,25,255,0.6)";
                // opts.xAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";

                // opts.xAxis.show=true;
                // layer.open({
                //     title: '在线调试'
                //     ,content: '可以填写任意的layer代码'
                //   });
                //window.top表示最顶层iframe  如果在当页面全屏打开 删去window.top即可
                window.top.layer.open({
                    title:false,
                    type:1,
                    shadeClose: true,
                    area:['800px','800px'],
                    content:'<div class="fullChart" style="height:800px;width:800px;background-image: linear-gradient(to right , #8EC5FC, #E0C3FC);padding:0px 0px"></div>',
                    success:function(){
                        var fullchart = echarts.init(document.querySelector(".fullChart"));
                        fullchart.setOption(opts);
                    }
                });
                
            }
        },
        saveAsImage:{
            title:" ",
            backgroundColor: 'auto'
        },
        dataView:{
            title:" "
        }
    
      },orient:"horizontal"
    },
   grid: {
            top:'15%',
          left: '0%',
          right: '0%',
          bottom: '3%',
          containLabel: true
        },
    xAxis: {
      type: 'value',
     // position: 'top',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLabel: {
                color: "rgba(255,255,255,0.8)",
                //fontSize: 11,
                interval:0
              },
    },
    yAxis: {
      type: 'category',
     // axisLine: { show: false },
    //  axisLabel: { show: false },
      axisTick: { show: false },
      // splitLine: { show: false },
      axisLabel: {
                color: "#E3F6FF",
                fontSize: 12
              },
              splitLine: {
                lineStyle: {
                  color: "rgba(255,255,255,0.1)"
                }
              },
       data: ['Spring', 'Hibernate', 'Struts', 'Grails', 'Blade', 'Vaadin']
          
    },
    series: [
      {
        //name: 'Cost',
        type: 'bar',
       
        barWidth: '65%',
        label: {
          show: true,
          formatter: '{b}',
          textStyle:{
            color: "#2C2C52"
          }
        },
        color:"#9599E2",
        itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
              },
         data: [44.29,32.74,8.54,13.44,79.19,17.47]
      }
    ]
  };
    
    myChart.setOption(option);
  
    // 屏幕自适应
    window.addEventListener('resize', function () {
      myChart.resize();
    })
})();
//left 3
(function(){
    
  var myChart=echarts.init(document.querySelector(".pie2 .chart"));
  option = {
      color: ['#2f89cf'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      toolbox:{
          
        feature:{
            myFull: {
              show: true,
              title: 'Detailed View',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function (e){  
                  var opts = e.getOption();
                  // e.option.value='.chart';
                  opts.toolbox[0].feature.myFull.show=false;
                  opts.toolbox[0].feature.saveAsImage.show=false;
                  opts.toolbox[0].feature.dataView.show=false;
                  opts.series[0].realtimeSort=true;
                opts.series[0].label.valueAnimation=true;
                opts.yAxis[0].animationDuration= 300;
                opts.yAxis[0].animationDurationUpdate=300;
               // opts.xAxis[0].max='dataMax';
                opts.animationDuration=3000;
                opts.animationDurationUpdate=3000;
                opts.animationEasing='linear';
                opts.animationEasingUpdate='linear';
                  // opts.xAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                  // opts.yAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                  // opts.yAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";
                  // opts.yAxis[0].splitLine.color="rgba(255,25,255,0.6)";
                  // opts.xAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";

                  // opts.xAxis.show=true;
                  // layer.open({
                  //     title: '在线调试'
                  //     ,content: '可以填写任意的layer代码'
                  //   });
                  //window.top表示最顶层iframe  如果在当页面全屏打开 删去window.top即可
                  window.top.layer.open({
                      title:false,
                      type:1,
                      shadeClose: true,
                      area:['800px','800px'],
                      content:'<div class="fullChart" style="height:800px;width:800px;background-image: linear-gradient(to right , #7A88FF, #7AFFAF);padding:0px 0px"></div>',
                      success:function(){
                          var fullchart = echarts.init(document.querySelector(".fullChart"));
                          fullchart.setOption(opts);
                      }
                  });
                  
              }
          },
          saveAsImage:{
              title:" ",
              backgroundColor: 'auto'
          },
          dataView:{
              title:" "
          }
      
        },orient:"horizontal"
      },
      grid: {
          top:'15%',
        left: '0%',
        right: '0%',
        bottom: '3%',
        containLabel: true
      },
      
      xAxis: [
        {
          type: 'category',
          
          data: ['Spring', 'Hibernate', 'Struts', 'Grails', 'Blade', 'Vaadin'],
          axisTick: {
            alignWithLabel: true
          },
          //修改刻度
          axisLabel: {
              color: "rgba(255,255,255,0.8)",
              //fontSize: 11,
              interval:0
            },
            axisLine:{
                show:true
            }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
              color: "rgba(255,255,255,0.8)",
              fontSize: 12
            },
            axisLine: {
              show:true,
              lineStyle: {
                //color: "rgba(255,255,255,0.6)",
                //width: 2
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.1)"
              }
            }
        }
      ],
      series: [
        {
            //name与光标有关
          name: 'Direct',
          type: 'bar',
          barWidth: '35%',
          itemStyle:{
            barBorderRadius:20,
            
        },
        color:"#203AFF",
        
          data: [22.83, 62.69,2.11,0.77,1.26,3.93],
          itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 5
            }
        }
      ]
    };
    
    myChart.setOption(option);
  
    // 屏幕自适应
    window.addEventListener('resize', function () {
      myChart.resize();
    })
})();
// (function () {
//   var myChart = echarts.init(document.querySelector('.line2 .chart'));

//   var option = {
//     tooltip: {
//       trigger: 'axis',
//     },
//     legend: {
//       top: "0%",
//       textStyle: {
//         color: "rgba(255,255,255,.5)",
//         fontSize: "12"
//       }
//     },
//     grid: {
//       top: '30',
//       left: '10',
//       right: '30',
//       bottom: '10',
//       containLabel: true
//     },
//     xAxis: [{
//       type: 'category',
//       boundaryGap: false,
//       // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
//       axisLabel: {
//        //interval:0,
//         textStyle: {
//           color: "rgba(255,255,255,.6)",
//           fontSize: 12
//         }
//       },
//       // x轴线的颜色为   rgba(255,255,255,.2)
//       axisLine: {
//         lineStyle: {
//           color: "rgba(255,255,255,.2)"
//         }
//       },
//       data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
//     }],
//     yAxis: [{
//       type: 'value',
//       axisTick: {
//         // 不显示刻度线
//         show: false
//       },
//       axisLine: {
//         lineStyle: {
//           color: "rgba(255,255,255,.1)"
//         }
//       },
//       axisLabel: {
//         textStyle: {
//           color: "rgba(255,255,255,.6)",
//           fontSize: 12
//         }
//       },
//       // 修改分割线的颜色
//       splitLine: {
//         lineStyle: {
//           color: "rgba(255,255,255,.1)"
//         }
//       }
//     }],
//     series: [{
//         name: '邮件营销',
//         type: 'line',
//         smooth: true, // 圆滑的线
//         // 单独修改当前线条的样式
//         lineStyle: {
//           color: "#0184d5",
//           width: 2
//         },
//         // 填充区域渐变透明颜色
//         areaStyle: {
//           color: new echarts.graphic.LinearGradient(
//             0,
//             0,
//             0,
//             1,
//             [{
//                 offset: 0,
//                 color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
//               },
//               {
//                 offset: 0.8,
//                 color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
//               }
//             ],
//             false
//           ),
//           shadowColor: "rgba(0, 0, 0, 0.1)"
//         },
//         // 拐点设置为小圆点
//         symbol: 'circle',
//         // 设置拐点大小
//         symbolSize: 5,
//         // 开始不显示拐点， 鼠标经过显示
//         showSymbol: false,
//         // 设置拐点颜色以及边框
//         itemStyle: {
//           color: "#0184d5",
//           borderColor: "rgba(221, 220, 107, .1)",
//           borderWidth: 12
//         },
//         data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
//       },
//       {
//         name: "转发量",
//         type: "line",
//         smooth: true,
//         lineStyle: {
//           normal: {
//             color: "#00d887",
//             width: 2
//           }
//         },
//         areaStyle: {
//           normal: {
//             color: new echarts.graphic.LinearGradient(
//               0,
//               0,
//               0,
//               1,
//               [{
//                   offset: 0,
//                   color: "rgba(0, 216, 135, 0.4)"
//                 },
//                 {
//                   offset: 0.8,
//                   color: "rgba(0, 216, 135, 0.1)"
//                 }
//               ],
//               false
//             ),
//             shadowColor: "rgba(0, 0, 0, 0.1)"
//           }
//         },
//         // 设置拐点 小圆点
//         symbol: "circle",
//         // 拐点大小
//         symbolSize: 5,
//         // 设置拐点颜色以及边框
//         itemStyle: {
//           color: "#00d887",
//           borderColor: "rgba(221, 220, 107, .1)",
//           borderWidth: 12
//         },
//         // 开始不显示拐点， 鼠标经过显示
//         showSymbol: false,
//         data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
//       }
//     ]
//   };

//   myChart.setOption(option);

//   window.addEventListener('resize', function () {
//     myChart.resize();
//   })
// })();

//left 3
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));
  var option = {
    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    toolbox:{
          
      feature:{
          myFull: {
            show: true,
            title: 'Detailed View',
            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            onclick: function (e){  
                var opts = e.getOption();
                // e.option.value='.chart';
                opts.toolbox[0].feature.myFull.show=false;
                opts.toolbox[0].feature.saveAsImage.show=false;
                opts.toolbox[0].feature.dataView.show=false;
                // opts.xAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                // opts.yAxis[0].axisLabel.color="rgba(255,25,255,0.6)";
                // opts.yAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";
                // opts.yAxis[0].splitLine.color="rgba(255,25,255,0.6)";
                // opts.xAxis[0].axisLine.lineStyle.color="rgba(255,25,255,0.6)";

                // opts.xAxis.show=true;
                // layer.open({
                //     title: '在线调试'
                //     ,content: '可以填写任意的layer代码'
                //   });
                //window.top表示最顶层iframe  如果在当页面全屏打开 删去window.top即可
                window.top.layer.open({
                    title:false,
                    type:1,
                    shadeClose: true,
                    area:['800px','800px'],
                    content:'<div class="fullChart" style="height:800px;width:800px;background-image: linear-gradient(to right , #8EC5FC, #E0C3FC);padding:0px 0px"></div>',
                    success:function(){
                        var fullchart = echarts.init(document.querySelector(".fullChart"));
                        fullchart.setOption(opts);
                    }
                });
                
            }
        },
        saveAsImage:{
            title:" ",
            backgroundColor: 'auto'
        },
        dataView:{
            title:" "
        }
    
      },orient:"horizontal"
    },
    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#ed8884',
        fontSize: 10
      }
      
    },
    series: [{
      //name: '地区分布',
      type: 'pie',
      radius: ["10%", "60%"],
      center: ['50%', '40%'],
      // 半径模式  area面积模式
      roseType: 'radius',
      // 图形的文字标签
      label: {
        fontsize: 10
      },
      // 引导线调整
      labelLine: {
        // 连接扇形图线长(斜线)
        length: 6,
        // 连接文字线长(横线)
        length2: 8
      },
      data: [{
          value: 126,
          name: 'Spring'
        },
        {
          value: 206,
          name: 'Hibernate'
        },
        {
          value: 235,
          name: 'Struts'
        },
        {
          value: 227,
          name: 'Grails'
        },
        {
          value: 410,
          name: 'Blade'
        },
        {
          value: 376,
          name: 'Vaadin'
        }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

(
  function(){
    var myChart=echarts.init(document.querySelector(".map .chart"));
    option = {
      title: {
          text: 'Distribution of people using these frameworks on Github',
        
          left: 'center',
          top: 'top'
      },
      tooltip: {
          trigger: 'item',
          formatter: function(params) {
              var value = params.value + '';
              return params.seriesName + '<br/>' + params.name + ' : ' + value+'';
          }
      },
      toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            myFull: {
              show: true,
              title: 'Detailed View',
              icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
              onclick: function (e){  
                  var opts = e.getOption();
                  // e.option.value='.chart';
                  opts.toolbox[0].feature.myFull.show=false;
                  opts.toolbox[0].feature.saveAsImage.show=false;
                  opts.toolbox[0].feature.dataView.show=false;
                  opts.visualMap[0].show=true;
                  // opts.xAxis.show=true;
                  // layer.open({
                  //     title: '在线调试'
                  //     ,content: '可以填写任意的layer代码'
                  //   });
                  //window.top表示最顶层iframe  如果在当页面全屏打开 删去window.top即可
                  window.top.layer.open({
                      title:false,
                      type:1,
                      shadeClose: true,
                      area:['800px','800px'],
                      content:'<div class="fullChart" style="height:800px;width:800px;padding:0px 0px"></div>',
                      success:function(){
                          var fullchart = echarts.init(document.querySelector(".fullChart"));
                          fullchart.setOption(opts);
                      }
                  });
                  
              }
          },
              dataView: {
                  readOnly: false
              },
              restore: {title:''},
              saveAsImage: {
                backgroundColor: 'auto',
                title:''
              }
          }
      },
      visualMap: {
          show:false,
          min: 0,
          max: 400,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          color: ['orangered','yellow', 'lightskyblue' ]
      },
      series: [{
          name: 'Using these frameworks',
          type: 'map',
          mapType: 'world',
          roam: true,
          itemStyle: {
              emphasis: {
                  label: {
                      show: true
                  }
              }
          },
          data: [{
                  name: 'United States',
                  value: 361
              },
              {
                  name: 'China',
                  value: 229
              },
              {
                  name: 'Brazil',
                  value: 0
              },
              {
                  name: 'Russia',
                  value: 0
              },
              {
                  name: 'United Kingdom',
                  value: 86
              },
              {
                  name: 'Spain',
                  value: 0
              },
              {
                  name: 'India',
                  value: 113
              },
              {
                name: 'Greenland',
                value: 0
            },
            {
              name: 'Turkmenistan',
              value: 0
          },
          {
            name: 'Congo',
            value: 0
        },
        {
          name: 'Dem. Rep. Congo',
          value: 23
      },
      {
        name: 'Central African Rep.',
        value: 0
    },
    {
      name: 'S. Sudan',
      value: 0
  },
              {
                  name: 'Italy',
                  value: 0
              },
              {
                  name: 'Peru',
                  value: 0
              },
              {
                  name: 'France',
                  value: 72
              },
              {
                  name: 'Germany',
                  value: 61
              },
              {
                  name: 'Iran',
                  value: 0
              },
              {
                  name: 'Turkey',
                  value: 0
              },
              {
                  name: 'Chile',
                  value: 0
              },
              {
                  name: 'Mexico',
                  value: 0
              },
              {
                  name: 'Saudi Arabia',
                  value: 0
              },
              {
                  name: 'Pakistan',
                  value: 0
              },
              {
                  name: 'Canada',
                  value: 49
              },
              {
                  name: 'Qatar',
                  value: 0
              },
              {
                  name: 'Bengal',
                  value: 0
              },
              {
                  name: 'Belgium',
                  value: 0
              },
              {
                  name: 'South Africa',
                  value: 0
              },
              {
                  name: 'Belarus',
                  value: 0
              },
              {
                  name: 'Netherlands',
                  value: 0
              },
              {
                  name: 'Sweden',
                  value: 0
              },
              {
                  name: 'Ecuador',
                  value: 0
              },
              {
                  name: 'UAE',
                  value: 0
              },
              {
                  name: 'Colombia',
                  value: 0
              },
              {
                  name: 'Singapore',
                  value: 0
              },
              {
                  name: 'Egypt',
                  value: 0
              },
              {
                  name: 'Portugal',
                  value: 0
              },
              {
                  name: 'Kuwait',
                  value: 0
              },
              {
                  name: 'Indonesia',
                  value: 0
              },
              {
                  name: 'Switzerland',
                  value: 0
              },
              {
                  name: 'Ukraine',
                  value: 0
              },
              {
                  name: 'Poland',
                  value: 0
              },
              {
                  name: 'Ireland',
                  value: 0
              },
              {
                  name: 'Argentina',
                  value: 0
              },
              {
                  name: 'Philippines',
                  value: 0
              },
              {
                  name: 'Afghanistan',
                  value: 0
              },
              {
                  name: 'Romania',
                  value: 0
              },
              {
                  name: 'Dominica',
                  value: 0
              },
              {
                  name: 'Israel',
                  value: 0
              },
              {
                  name: 'Oman',
                  value: 0
              },
              {
                  name: 'Japan',
                  value: 90
              },
              {
                  name: 'Austria',
                  value: 42
              },
              {
                  name: 'Panama',
                  value: 0
              },
              {
                  name: 'Bahrain',
                  value: 0
              },
              {
                  name: 'Bolivia',
                  value: 0
              },
              {
                  name: 'Iraq',
                  value: 0
              },
              {
                  name: 'Armenia',
                  value: 0
              },
              {
                  name: 'Kazakhstan',
                  value: 0
              },
              {
                  name: 'Nigeria',
                  value: 0
              },
              {
                  name: 'Denmark',
                  value: 0  
              },
              {
                  name: 'Serbia',
                  value: 0
              },
              {
                  name: 'Korea',
                  value: 45
              },
              {
                  name: 'Algeria',
                  value: 0
              },
              {
                  name: 'Ghana',
                  value: 0
              },
              {
                  name: 'Moldova',
                  value: 0
              },
              {
                  name: 'Czech Republic',
                  value: 0
              },
              {
                  name: 'Norway',
                  value: 0
              },
              {
                  name: 'Malaysia',
                  value: 0
              },
              {
                  name: 'Morocco',
                  value: 0
              },
              {
                  name: 'Cameroon',
                  value: 0
              },
              {
                  name: 'Azerbaijan',
                  value: 0
              },
              {
                  name: 'Australia',
                  value: 0
              },
              {
                  name: 'Guatemala',
                  value: 0
              },
              {
                  name: 'Finland',
                  value: 0
              },
              {
                  name: 'Honduras',
                  value: 0
              },
              {
                  name: 'Sudan',
                  value: 0
              },
              {
                  name: 'Tajikistan',
                  value: 0
              },
              {
                  name: 'Uzbekistan',
                  value: 0
              },
              {
                  name: 'Senegal',
                  value: 0
              },
              {
                  name: 'Djibouti',
                  value: 0
              },
              {
                  name: 'Guinea',
                  value: 0
              },
              {
                  name: 'Congo (DRC)',
                  value: 0
              },
              {
                  name: 'Luxembourg',
                  value: 0
              },
              {
                  name: 'Hungary',
                  value: 0
              },
              {
                  name: 'Ivory Coast',
                  value: 0
              },
              {
                  name: 'Nepal',
                  value: 0
              },
              {
                  name: 'Haiti',
                  value: 0
              },
              {
                  name: 'North Macedonia',
                  value: 0
              },
              {
                  name: 'Thailand',
                  value: 0
              },
              {
                  name: 'Salvador',
                  value: 0
              },
              {
                  name: 'Gabon',
                  value: 0
              },
              {
                  name: 'Greece',
                  value: 0
              },
              {
                  name: 'Kenya',
                  value: 0
              },
              {
                  name: 'Bulgaria',
                  value: 0
              },
              {
                  name: 'Bosnia and Herzegovina',
                  value: 0
              },
              {
                  name: 'Venezuela',
                  value: 0
              },
              {
                  name: 'Somalia',
                  value: 0
              },
              {
                  name: 'Croatia',
                  value: 0
              },
              {
                  name: 'Cuba',
                  value: 0
              },
              {
                  name: 'Ethiopia',
                  value: 0
              },
              {
                  name: 'Kyrgyzstan',
                  value: 0
              },
              {
                  name: 'Estonia',
                  value: 0
              },
              {
                  name: 'Maldives',
                  value: 0
              },
              {
                  name: 'Sri Lanka',
                  value: 0
              },
              {
                  name: 'Central African Republic',
                  value: 0
              },
              {
                  name: 'Iceland',
                  value: 0
              },
              {
                  name: 'Lithuania',
                  value: 0
              },
              {
                  name: 'Mali',
                  value: 0
              },
              {
                  name: 'Slovakia',
                  value: 0
              },
              {
                  name: 'new Zealand',
                  value: 0
              },
              {
                  name: 'Slovenia',
                  value: 0
              },
              {
                  name: 'Guinea-Bissau',
                  value: 0
              },
              {
                  name: 'Lebanon',
                  value: 0
              },
              {
                  name: 'Costa rica',
                  value: 0
              },
              {
                  name: 'Equatorial Guinea',
                  value: 0
              },
              {
                  name: 'Albania',
                  value: 0
              },
              {
                  name: 'Zambia',
                  value: 0
              },
              {
                  name: 'Paraguay',
                  value: 0
              },
              {
                  name: 'Nicaragua',
                  value: 0
              },
              {
                  name: 'Madagascar',
                  value: 0
              },
              {
                  name: 'Latvia',
                  value: 0
              },
              {
                  name: 'Tunisia',
                  value: 0
              },
              {
                  name: 'Mauritania',
                  value: 0
              },
              {
                  name: 'Sierra Leone',
                  value: 0
              },
              {
                  name: 'Niger',
                  value: 0
              },
              {
                  name: 'Cyprus',
                  value: 0
              },
              {
                  name: 'Burkina Faso',
                  value: 0
              },
              {
                  name: 'Andorra',
                  value: 0
              },
              {
                  name: 'Uruguay',
                  value: 0
              },
              {
                  name: 'Chad',
                  value: 0
              },
              {
                  name: 'Jordan',
                  value: 0
              },
              {
                  name: 'Georgia',
                  value: 0
              },
              {
                  name: 'Diamond Cruise',
                  value: 0
              },
              {
                  name: 'San Marino',
                  value: 0
              },
              {
                  name: 'Republic of Congo)',
                  value: 0
              },
              {
                  name: 'Uganda',
                  value: 0
              },
              {
                  name: 'Malta',
                  value: 0
              },
              {
                  name: 'Jamaica',
                  value: 0
              },
              {
                  name: 'Cape verde',
                  value: 0
              },
              {
                  name: 'Tanzania',
                  value: 0
              },
              {
                  name: 'Togo',
                  value: 0
              },
              {
                  name: 'Yemen',
                  value: 0
              },
              {
                  name: 'Palestine',
                  value: 0
              },
              {
                  name: 'Rwanda',
                  value: 0
              },
              {
                  name: 'Malawi',
                  value: 0
              },
              {
                  name: 'Mozambique',
                  value: 0
              },
              {
                  name: 'Liberia',
                  value: 0
              },
              {
                  name: 'Swaziland',
                  value: 0
              },
              {
                  name: 'Mauritius',
                  value: 0
              },
              {
                  name: 'Vietnam',
                  value: 0
              },
              {
                  name: 'Montenegro',
                  value: 0
              },
              {
                  name: 'Benin',
                  value: 0
              },
              {
                  name: 'Zimbabwe',
                  value: 0
              },
              {
                  name: 'Libya',
                  value: 0
              },
              {
                  name: 'Myanmar',
                  value: 0
              },
              {
                  name: 'Mongolia',
                  value: 0
              },
              {
                  name: 'Guyana',
                  value: 0
              },
              {
                  name: 'Syria',
                  value: 0
              },
              {
                  name: 'Brunei',
                  value: 0
              },
              {
                  name: 'Comoros',
                  value: 0
              },
              {
                  name: 'Suriname',
                  value: 0
              },
              {
                  name: 'Cambodia',
                  value: 0
              },
              {
                  name: 'Trinidad and Tobago',
                  value: 0
              },
              {
                  name: 'Bahamas',
                  value: 0
              },
              {
                  name: 'Monaco',
                  value: 0
              },
              {
                  name: 'Angola',
                  value: 0
              },
              {
                  name: 'Barbados',
                  value: 0
              },
              {
                  name: 'Burundi',
                  value: 0
              },
              {
                  name: 'Principality of Liechtenstein',
                  value: 0
              },
              {
                  name: 'Bhutan',
                  value: 0
              },
              {
                  name: 'Botswana',
                  value:0
              },
              {
                  name: 'Eritrea',
                  value: 0
              },
              {
                  name: 'Martinique',
                  value: 0
              },
              {
                  name: 'Namibia',
                  value: 0
              },
              {
                  name: 'Gambia',
                  value: 0
              },
              {
                name: 'W. Sahara',
                value: 0
            },
              {
                  name: 'Saint Vincent and the Grenadines',
                  value: 0
              },
              {
                  name: 'Antigua and Barbuda',
                  value: 0
              },
              {
                  name: 'East Timor',
                  value: 0
              },
              {
                  name: 'Grenada',
                  value: 0
              },
              {
                  name: 'Santa lucia',
                  value: 0
              },
              {
                  name: 'Laos',
                  value: 0
              },
              {
                  name: 'Belize',
                  value: 0
              },
              {
                  name: 'Dominica',
                  value: 0
              },
              {
                  name: 'Fiji',
                  value: 0
              },
              {
                  name: 'Saint Kitts and Nevis',
                  value: 0
              },
              {
                  name: 'Vatican',
                  value: 0
              },
              {
                  name: 'Seychelles',
                  value: 0
              },
              {
                  name: 'Papua New Guinea',
                  value: 0
              },
              {
                  name: 'Lesotho',
                  value: 0
              }
  
          ]
      }]
      
  };
  myChart.setOption(option);
  }
)();