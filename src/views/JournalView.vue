<script>
import Calls from '@/components/Calls.vue';
import { useCallsStore } from "../stores/calls";

export default {
    name: "CallsView",
    setup() {
        const callsStore = useCallsStore()
        return {
            callsStore
        }
    },
    computed: {
        calls() {
            return this.callsStore.calls
        }
    },
    components: {
        Calls
    },
    data() {
        return {
            CallsInfo: {
                name: "",
                telephone: "",
                date: ""
            }
        }
    },
    methods : {
        addCall() {
            this.callsStore.addCall(this.CallsInfo)
            this.CallsInfo = {
                name: "",
                telephone: "",
                date: `Le ${day}/${month}/${year} à ${hour}:${minute}`
            }  
        }
    }
}
</script>

<template>
    <h1>Journal</h1>
    <div v-for="call in calls" :key="calls.name">
	    <Calls :call="call" />
	</div>
</template>