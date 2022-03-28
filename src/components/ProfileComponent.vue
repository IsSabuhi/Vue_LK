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

<script>
import store from '../store/index'
    export default {
      data () {
        return {
            lastName: ''
        }
      },
      methods: {
          submit(){
              store.commit('setLogin', this.lastName)
          }
      }
    }
</script>

<style scoped>
</style>