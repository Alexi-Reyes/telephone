<script>
import Contacts from '@/components/Contacts.vue';
import { useContactsStore } from "../stores/contacts";

export default {
    name: "ContactsView",
    setup() {
        const contactsStore = useContactsStore()
        return {
            contactsStore
        }
    },
    computed: {
        contacts() {
            return this.contactsStore.contacts
        }
    },
    components: {
        Contacts
    },
    data() {
        return {
            formContact: {
                name: "",
                telephone: ""
            }
        }
    },
    methods : {
        addContact(telephone) {
            this.contacts.push(telephone)
        }
    }
}
</script>

<template>
    <div class="flex">
        <h1>Contacts</h1>
        <RouterLink to="/contactform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
        </RouterLink>
    </div>
    <div v-for="contact in contacts" :key="contacts.name">
	    <Contacts :contact="contact" />
	</div>
</template>

<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
}
</style>