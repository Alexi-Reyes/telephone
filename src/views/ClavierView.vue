<script>
    import { useCallsStore } from '@/stores/calls'


    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();

    export default {
        name: "CallsInfo",
        setup() {
            const callsStore = useCallsStore()
            return {
                callsStore
            }
        },
        data() {
            return {
                CallsInfo: {
                    name: "",
                    telephone: "",
                    date: `Le ${day}/${month}/${year} à ${hour}:${minute}`
                }
            }
        },  
        methods : {
            onNumberClick(number) {
                this.CallsInfo.telephone += number;
            },

            addCall() {
                this.callsStore.addCall(this.CallsInfo)
                this.CallsInfo = {
                    name: "",
                    telephone: "",
                    date: `Le ${day}/${month}/${year} à ${hour}:${minute}`
                }  
            },
            checkContacts() {
                calls.forEach(element => {
                    if (element.name == document.querySelector("#phoneNumber").value) {
                        document.querySelector("#phoneName").value = element.name          
                    }
                });
            }
        }
    }

</script>

<template>
    <div class="phone-pad">
        <input @change="checkContacts()" type="number" id="phoneNumber" placeholder="Enter phone number with pad" v-model="CallsInfo.telephone" disabled>
        <input type="text" id="phoneName" placeholder="Enter a name" v-model="CallsInfo.name">

        <div class="pad">
            <div class="number-keys">
                <div class="row">
                    <button class="number" @click="onNumberClick('1')">1</button>
                    <button class="number" @click="onNumberClick('2')">2</button>
                    <button class="number" @click="onNumberClick('3')">3</button>
                </div>
                <div class="row">
                    <button class="number" @click="onNumberClick('4')">4</button>
                    <button class="number" @click="onNumberClick('5')">5</button>
                    <button class="number" @click="onNumberClick('6')">6</button>
                </div>
                <div class="row">
                    <button class="number" @click="onNumberClick('7')">7</button>
                    <button class="number" @click="onNumberClick('8')">8</button>
                    <button class="number" @click="onNumberClick('9')">9</button>
                </div>
                <div class="row">
                    <button class="number" @click="onNumberClick('*')">*</button>
                    <button class="number" @click="onNumberClick('0')">0</button>
                    <button class="number" @click="onNumberClick('#')">#</button>
                </div>
            </div>
            <svg @click="addCall()" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12q-.4 0-.712-.288T18.925 11q-.325-2.325-1.963-3.963T13 5.076q-.425-.05-.712-.35T12 4q0-.425.3-.712t.7-.238q3.15.35 5.375 2.575T20.95 11q.05.4-.238.7T20 12m-4.175 0q-.325 0-.575-.225t-.375-.6q-.2-.725-.763-1.287t-1.287-.763q-.375-.125-.6-.375T12 8.15q0-.5.35-.812t.775-.213q1.4.325 2.413 1.338t1.337 2.412q.1.425-.225.775t-.825.35m4.125 9q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>  
        </div>
    </div>
</template>
  
<style scoped>
#phoneNumber, #phoneName {
    background-color: var(--color-background);
    color: white;
}

#phoneNumber {
    border: none;
}
.phone-pad {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid white;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid white;
    outline: none;
}

.pad {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.number-keys {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 20px;
}

.row {
    margin-bottom: 10px;
}

.number {
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
}
</style>
  