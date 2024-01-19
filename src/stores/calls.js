import { defineStore } from "pinia";

export const useCallsStore = defineStore("calls", {
  state: () => ({
    calls: [
      {
        name: "Vuy",
        telephone: 1544514564,
        date:"16/48"
      },
      {
        name: "GIU",
        telephone: 2788465845,
        date:"15/26"
      },
      {
        name: "Gohui",
        telephone: 33,
        date:"15/29"
      }
    ]
  }),
  actions: {
    addCall(name, telephone, date) {
      this.calls.push(name)
      this.calls.push(telephone)
      this.calls.push(date)
    }
  }
})