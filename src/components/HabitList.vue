<script setup>
import { reactive } from 'vue';

const habitList = reactive([
    {
       name: "Бег",
        description: "Бег в 7:00",
        frequency: 1,
        count: 365 
    },
    {
        name: "Бег",
        description: "Бег в 7:00",
        frequency: 1,
        count: 365
    },
]);

const deleteHandler = (idx) =>{
    habitList.splice(idx,1)
}
</script>
<template>
    <ul class="list">
        <li v-for="(item,idx) in habitList":key="idx" class="list-item">
            <div v-text="item.name"></div>
            <div v-text="item.description"></div>
            <p>
                <template v-if="item.frequency === 1">Каждый день</template>
                <template v-else-if="item.frequency === 7">Раз в неделю </template>
                <template v-else="item.frequency === 30">Раз в месяц</template>
            </p>
            <button @click.stop="deleteHandler(idx)">Удалить</button>
        </li>
    </ul>
</template>

<style>
.list{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
}
.list-item{
    background-color: white;
    border-radius: 1rem;
    padding: 1 rem;
}
.list-item:hover{
    background-color: rgba(255, 237, 237, 0.954);
}
</style>