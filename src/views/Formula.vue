<script setup>
import { ref } from 'vue'
import driverData from '../assets/drivers.json'
const driver1 = ref('')
const driver2 = ref('')
const budget = ref(100000000)

function generateDriverSalary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

driverData.forEach(driver => {
    driver.cost = generateDriverSalary(3000000, 30000000)
})

const randomDriver = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomDriverCost = () => {
    budget.value -= generateDriverSalary(3000000, 30000000)
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const raceArr = ref([])
const raceCount = ref(1)
// Set point to 0 for all driver
const baseValue = () => {
    for(let i = 0; i < raceArr.value.length; i++) {
        raceArr.value[i].point = 0
    }
}

const startRace = () => {
    for(let i = 0; i < 18; i++) {
        raceArr.value.push(driverData[randomDriver(1, 300)])
    }
    raceArr.value.push(driver1.value)
    raceArr.value.push(driver2.value)
    shuffleArray(raceArr.value)
    baseValue()
    calPoint()
}

const pointSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]
const calPoint = () => {
    for(let i = 0; i < raceArr.value.length; i++) {
        if(i < 10) {
            raceArr.value[i].point += pointSystem[i]
        } else {
            raceArr.value[i].point += 0
        }
    }
}

const sortStanding = (array) => {
    return array.sort((a, b) => b.point - a.point)
}

const nextRace = () => {
    raceCount.value++
    shuffleArray(raceArr.value)
    calPoint()
}
</script>

<template>
    <h3>Welcome to Formula-X the text-based F1 game to simulate, manager your own team!</h3>
    <hr>
    <h1>Total team budget ${{ budget.toLocaleString() }}</h1>
    <h3>First driver : {{ driver1.forename }} {{ driver1.surname }}</h3>
    <h3>Second driver : {{ driver2.forename }} {{ driver2.surname }}</h3>
    <label for="">Select your drivers</label>
    <select name="" id="" v-model="driver1" v-on:change="randomDriverCost">
        <option v-for="driver in driverData" :value="driver">
            {{ driver.forename }} {{ driver.surname }}
        </option>
    </select>
    <select name="" id="" v-model="driver2" v-on:change="randomDriverCost">
        <option v-for="driver in driverData" :value="driver">
            {{ driver.forename }} {{ driver.surname }}
        </option>
    </select>
    <br>
    <button @click="startRace">Let's Race!</button>
    <button @click="nextRace">Next Race</button>
    <h2>Race Result</h2>
    <h3>Race : {{ raceCount }}</h3>
    <h3>Track : Monaco</h3>
    <p style="color: gold">Gold hightlight = podium position</p>
    <p style="color: green">Green hightlight = Your driver position</p>
    <br>
    <div v-for="(allDriver, index) in raceArr" :style="index + 1 <= 3 ? 'color: gold' : ''">
        <li
        :style="allDriver.driverId === driver1.driverId || allDriver.driverId === driver2.driverId ? 'color: green' : ''">
        {{ index + 1 }}. {{ allDriver.forename }} {{ allDriver.surname }}
        </li>
    </div>

    <h1>Driver Standing</h1>
    <div v-for="(sortDriver, index) in sortStanding(raceArr)">
        <p :style="sortDriver.driverId === driver1.driverId || sortDriver.driverId === driver2.driverId ? 'color: green' : ''">
            {{ index + 1 }}. {{ sortDriver.forename }} {{ sortDriver.surname }} : {{ sortDriver.point }} pts
        </p>
    </div>

</template>
