import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JournalView from '../views/JournalView.vue'
import ContactsView from '../views/ContactsView.vue'
import ClavierView from '../views/ClavierView.vue'
import ContactFormView from '../views/ContactFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/journal',
      name: 'journal',
      component: JournalView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/clavier',
      name: 'clavier',
      component: ClavierView
    },
    {
      path: '/contactform',
      name: 'contactform',
      component: ContactFormView
    },
  ]
})

export default router
