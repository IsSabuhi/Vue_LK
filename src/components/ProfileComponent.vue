<template>
    <div class="pa-5">
        <h1>Профиль</h1>
        <v-divider></v-divider>
        <form>
            <v-text-field
                :counter="30"
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
            >
                Обновить
            </v-btn>
    </form>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          }
      }
    }
</script>

<style scoped>
</style>