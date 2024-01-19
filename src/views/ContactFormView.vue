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
        addContact() {
            this.contactsStore.addContact(this.formContact)
            this.formContact = {
                name: "",
                telephone: "",
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent="addContact()">
        <div>
            <label for="name">Name</label>
            <input v-model="formContact.name" name="name" type="text">
        </div>

        <div>
            <label for="telephone">Telephone</label>
            <input v-model="formContact.telephone" name="telephone" type="number">
        </div>
        <input type="submit">
    </form>
</template>

<style scoped>
form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input[type="text"], input[type="number"] {
    background-color: var(--color-background);
    color: white;
    border: solid white 1px;
}
</style>