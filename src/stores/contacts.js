import { defineStore } from "pinia";

export const useContactsStore = defineStore("contacts", {
  state: () => ({
    contacts: [
      {
        name: "John",
        telephone: 1544514564
      },
      {
        name: "Michel",
        telephone: 2788465845
      },
      {
        name: "Jackson",
        telephone: 33
      }
    ]
  }),
  actions: {
    addContact(telephone) {
      this.contacts.push(telephone)
    }
  }
})