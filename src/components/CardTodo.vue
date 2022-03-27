<template>
    <div>
        <v-card
            color="#385F73"
            dark
        >
        <v-card-title class="text-h5">
            {{todo_data.name}}
        </v-card-title>

        <v-card-subtitle>
            {{todo_data.text}}
        </v-card-subtitle>

        </v-card>
    </div>
</template>

<script>
import {mtodo} from '../main'
    export default {
        name: "CardTodo",
        props: {
            todo_data: {
                type: Object,
                required: true
            }
        },
        
    }
</script>

<style scoped>

</style>