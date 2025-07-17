<script setup>
import { reactive } from 'vue';
import HabitListItem from './HabitListItem.vue';
const emits = defineEmits({'select:habit':(ev)=>{return true;}})

const habitList = reactive([
    {
       name: "Бег",
        description: "Бег в 7:00",
        frequency: 1,
        count: 365 
    },
    {
        name: "Бокс",
        description: "Бег в 12:00",
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
        <HabitListItem v-for="(item,idx) in habitList"
            :item="item"
            :key="idx"
            @click="$emit('select:habit',item)"
            class="list-item">
            <template #action >
            <button @click.stop="deleteHandler(idx)">Удалить</button>
            </template>
        </HabitListItem>
    
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