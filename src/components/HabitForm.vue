<script setup>
import { reactive, computed , ref, watch } from 'vue';
const habit = reactive({});

const sum = computed(() => habit.count * habit.frequency);
const label = ref();

watch(() => {
    return { name: habit.name, description: habit.description}
    },(newVal) => {
    label.value = `${newVal?.name} ${newVal?.description}`
},{deep: true,immediate: true})
</script>
<template>
    <div class="container">
        <form>
            <h1>Трекер привычек</h1>
            {{ label }}
            <div>
                <label for="habit-name">Название привычки</label>
                <input v-model.trim="habit.name" id="habit-name"></input>
            </div>
            <br>
            <div>
                <label for="description">Описание привычки</label>
                <textarea v-model.trim="habit.description" id="description" required></textarea>
            </div>
            <br>
            <div>
                <label for="frequency">Частота выполнения</label>
                <select v-model="habit.frequency" id="frequency">
                    <option value="1">Каждый день</option>
                    <option value="2">Раз в неделю</option>
                    <option value="3">Раз в месяц</option>
                </select>
            </div>
            <br>
            <div>
                <label for="count">Количество повторений</label>
                <input v-model.number="habit.count" id="count" type="number"></input>
            </div>
            <br>
            <div>Общее количество выполнения <span id="sum">{{ sum }}</span></div>
            <button type="submit">Сохранить</button>
            <button type="button">Простое нажатие</button>
        </form>
    </div>
</template>