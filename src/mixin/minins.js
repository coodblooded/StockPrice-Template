import Data from '../data/data.js'
export default {
  created () {
    console.log(Data)
    return 'sandeep'
  },
  methods: {
    openstock () {
      const dataop = []
      for (const iterator of Data.data) {
        dataop.push(Number(iterator.open))
      }
      return dataop
    },
    closestock () {
      const datato = []
      for (const iterator of Data.data) {
        datato.push(Number(iterator.close))
      }
      return datato
    }
  }
}
