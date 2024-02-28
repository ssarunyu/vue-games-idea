<template>
    <div class="flex justify-between items-center bg-green-400 p-5">
        <div>
            <router-link to="/" class="text-2xl font-bold">Games Idea</router-link>
        </div>
        <div>
            <div class="space-x-5">
                <RouterLink to="/typing" class="bg-green-200 px-5 py-3 rounded">Typing Game</RouterLink>
                <RouterLink to="/cal" class="bg-green-200 px-5 py-3 rounded">Fast Math Game</RouterLink>
                <RouterLink to="/formula" class="bg-green-200 px-5 py-3 rounded">ทำเล่นขกลบอย่าใส่ใจ</RouterLink>
            </div>
        </div>
    </div>
</template>