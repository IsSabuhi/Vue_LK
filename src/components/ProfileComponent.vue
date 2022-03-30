<template>
    <div class="pa-5">
        <h1>Профиль</h1>
        <v-divider></v-divider>
        <form>
            <v-text-field
                :counter="30"
                v-model="lastName"
                label="Фамилия"
                required
            ></v-text-field>
            <v-text-field
                :counter="20"
                v-model="Nlogin"
                label="Имя"
                required
            ></v-text-field>
            <v-text-field
                label="E-mail"
                required
            ></v-text-field>
            <v-btn
                class="mr-4"
                @click="submit"
            >
                Обновить
            </v-btn>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '../store/index'
export default Vue.extend({
    data: () => ({
        lastName: '' as string,
        Nlogin: '' as string
    }),
    methods: {
        submit() {
            store.commit('setName', this.lastName)
            store.commit('setLogin', this.Nlogin)
        }  
    }
})
</script>

<style scoped>

</style>