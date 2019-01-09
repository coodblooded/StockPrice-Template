<template>
<div>
  <div id="chart">
  <div id="timeline-chart"></div>
</div>
  <v-card>
    <v-card-title>
      <i class="fa fa-office"><strong>{{com_name1}}</strong></i>


      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.open }}</td>
        <td class="text-xs-left">{{ props.item.close }}</td>
        <td class="text-xs-left">{{ props.item.low }}</td>
        <td class="text-xs-left">{{ props.item.high }}</td>
        <td class="text-xs-left">{{ props.item.volume }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>

</div>
</template>


<script>
 import Data from '../data/data.js'
import mymix from  '../mixin/minins.js'
  export default {
    name: 'querySelector',
    props: ['symbol'],
    mixins: [mymix],
    data () {
      const com_name = this
      return {
        search: '',
        headers: [
          {
            text: 'Date',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'open', value: 'open' },
          { text: 'close', value: 'close' },
          { text: 'low', value: 'low' },
          { text: 'high', value: 'high' },
          { text: 'volume (%)', value: 'volume' }
        ],
        desserts:  Data.data,
        com_name1 : com_name.symbol,
        closestock : this.closestock(),
        openstock: this.openstock()
      }
    },
    mounted () {
      this.graph()
    },
    methods: {
      graph () {
        var options = {
      chart: {
        type: "area",
        height: 300,
        foreColor: "#999",
        scroller: {
          enabled: true,
          track: {
            height: 7,
            background: '#e0e0e0'
          },
          thumb: {
            height: 10,
            background: '#94E3FF'
          },
          scrollButtons: {
            enabled: true,
            size: 9,
            borderWidth: 2,
            borderColor: '#008FFB',
            fillColor: '#008FFB'
          },
          padding: {
            left: 30,
            right: 20
          }
        },
        stacked: true,
        dropShadow: {
          enabled: true,
          enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06
        }
      },
      colors: ['#00E396', '#0090FF'],
      stroke: {
        curve: "smooth",
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Open Stock',
        data: this.generateDayWiseTimeSeries(0, this.openstock.length)
      }, {
        name: 'Close Stock',
        data: this.generateDayWiseTimeSeries(1, this.closestock.length)
      }],
      markers: {
        size: 0,
        strokeColor: "#fff",
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6
        }
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 10,
        min: 0,
        labels: {
          offsetX: 10,
          offsetY: -5
        },
        tooltip: {
          enabled: true
        }
      },
      grid: {
        padding: {
          left: -5,
          right: 5
        }
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      fill: {
        type: "solid",
        fillOpacity: 0.7
      }
    };
        var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);
        chart.render()

    },
      generateDayWiseTimeSeries(s, count) {
        var values = [this.openstock, this.closestock];
        var i = 0;
        var series = [];
        var x = new Date("11 Nov 2012").getTime();
        while (i < count) {
          series.push([x, values[s][i]]);
          x += 86400000;
          i++;
        }
        return series;
    }
    }
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Poppins');

* {
  font-family: 'Poppins', sans-serif;
}

#chart {
  max-width: 760px;
  margin: 35px auto;
  opacity: 0.9;
}

#timeline-chart .apexcharts-toolbar {
  opacity: 1;
  border: 0;
}

</style>

