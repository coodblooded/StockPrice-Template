<template>
    <div class="home">
  <div class="grid-container">
    <div v-for="card in availableData.content"
                v-bind="{ [`xs${card.flex}`]: true }"
                :key="card.id"
      >
      <v-hover>
        <v-layout justify-center
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 10 : 2}`"
        class="mx-auto"
        width="344">
            <v-flex >
              <router-link :to="{
                  name: 'queryselector',
                  params: {symbol: card.symbol}
                }" class="link">
              <v-toolbar color="#1D5D95" dark class="tool">
                <span style="margin:auto">{{card.symbol}}</span>

              </v-toolbar>
            </router-link>
              <v-card>
                <v-card style="margin:10px 10px">
                      {{card.date_stock.split(' ')[0]}}
                    </v-card>
                    <v-card style="width:100px;margin:auto" class="caption">
                      {{card.volume_stock}}
                    </v-card>
                <v-container
                  fluid
                  grid-list-md
                  style="margin-top:-10px;"
                >

                  <v-layout row wrap>
                    <v-card-text class="py-0">
                          <v-timeline
                            align-top
                          >
                            <v-timeline-item
                              color="pink"
                              icon="fa fa-refresh"
                              small
                              class="test-ani"
                            >
                              <v-layout pt-3 style="margin-right:-30px;">
                                <v-flex xs12 class="caption">
                                  {{card.open_stock}}
                                </v-flex>
                                <v-flex>
                                  <div class="caption">Open</div>
                                </v-flex>
                              </v-layout>
                            </v-timeline-item>

                            <v-timeline-item
                              color="teal lighten-3"
                              icon="fa fa-ban"
                              small
                              class="test-ani"
                            >
                              <v-layout pt-3 style="margin-left:-30px;">
                                <v-flex class="caption" xs12>Close</v-flex>
                                <v-flex  class="caption">
                                  {{card.close_stock}}
                                </v-flex>

                              </v-layout>
                            </v-timeline-item>

                            <v-timeline-item
                              color="red"
                              icon="fa-arrow-down"
                              small
                              class="test-ani"
                            >
                              <v-layout pt-3 style="margin-right:-30px;">
                                <v-flex xs12 class="caption">
                                  {{card.low_stcok}}
                                </v-flex>
                                <v-flex class="caption">
                                  Low {{(card.open_stock-card.low_stcok).toFixed(2)}}
                                </v-flex>
                              </v-layout>
                            </v-timeline-item>

                            <v-timeline-item
                              color="green"
                              icon="fa-arrow-up"
                              small
                              class="test-ani"
                            >
                              <v-layout pt-3 style="margin-left:-30px;">
                                <v-flex class="caption" >
                                  High {{(card.high_stock -  card.open_stock).toFixed(2)}}
                                </v-flex>
                                <v-flex class="caption">
                                  {{card.high_stock}}

                                </v-flex>
                              </v-layout>
                            </v-timeline-item>
                          </v-timeline>
                        </v-card-text>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
          </v-layout>
      </v-hover>
    </div>
    </div>
          <div class="text-xs-center">
              <v-pagination
                v-model="page"
                :length="10"
                circle
              ></v-pagination>
          </div>
    </div>
</template>

<script>
 import Data from '../data/data.js'

export default {
  name: 'Home',
    data: () => ({
      cards: Data.data,
      page: 1
    }),
    created () {
      this.$store.dispatch('getStockdata')
    },
  computed:{
    availableData() {
      return this.$store.state.datas
    },
    NestData() {
      var Findex = (this.page - 1) * 5;
      var toIndex= (this.page  * 5) + 1;
      return this.cards.slice(Findex,toIndex)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  /* background-color: #2196F3; */
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.tool{
  cursor: pointer;
  margin: auto;
  text-align: center;

}
.toobar:hover{
  background-color: #275d44;
}
.link{
  text-decoration: none;
}
.test-ani{
  transition: .5s;

}
.test-ani:hover{
  font-weight: 400;
  transition: .5s;
  transform: scale(1.2)
}
</style>
