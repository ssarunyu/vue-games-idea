<script setup>
import { ref } from 'vue'
let number = ref(0)
const result = ref(0)
const showResult = ref(false)
const arr = ref([])
const counter = ref(0)
const endNumber = ref(false)

const random = () => {
    return Math.floor(Math.random() * 10) + 1
}

const getRandomNumbers = () => {
    for(let i = 0; i < 5; i++) {
        arr.value.push(random())
    }
}

const findAns = () => {
    resetGame()
    getRandomNumbers()
    const cal = arr.value.reduce((a, b) => a + b)
    console.log(arr.value)
    arr.value.forEach((num, index) => {
        setTimeout(() => {
            number.value = num
            counter.value += 1
            if(index === arr.value.length - 1) {
                setTimeout(() => {
                    number.value = 'end'
                    result.value = cal
                    endNumber.value = true
                }, 1000)
            }
        }, index * 1000)
    })
}

const resultBtn = () => {
    showResult.value = true
}

const resetGame = () => {
    endNumber.value = false
    showResult.value = false
    arr.value = []
    counter.value = 0
}



</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <p>Idea เกมบวกเลขเหมือนที่เขาชอบแข่งๆกันในติ้กต่อก💀 รันเลขไปเรื่อยๆ 5 ตัว พอครบ คำตอบคือผลบวกของทุกตัว</p>
        <p>ตอนแรกตอนรันเลขจบจะให้ user ใส่คำตอบแล้วเช็คว่าถูกมั้ย แต่ขกทำแล้ว เลยดัดมาเป็นแบบแค่รันเลขและโชว์คำตอบได้</p>
    </div>
    <div class="w-full h-screen flex flex-col justify-center items-center bg-fuchsia-100">
        <button @click="findAns" class="mb-5 px-5 py-2 bg-fuchsia-300 rounded">Start game</button>
        <h1>ตัวที่ : {{ counter }}</h1>
        <h1 class="text-5xl font-semibold">{{ number }}</h1>
        <button v-show="endNumber" @click="resultBtn" class="p-2 bg-fuchsia-200 rounded mt-2">Show result</button>
        <div v-show="showResult">
            <p>All number this time : {{ arr }}</p>
            <strong>Result = {{ result }}</strong>
        </div>

    </div>
</template>