<template>
    <div>
        <v-card
            color="#385F73"
            dark
        >
        <v-card-title class="text-h5">
            {{name}}
        </v-card-title>

        <v-card-subtitle>
            {{text}}
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
        data: () => ({
            name: localStorage.getItem('name'),
            text: localStorage.getItem('text')
        }), 
        mounted() {
            localStorage.getItem('name')
        }
        
    }
</script>

<style scoped>

</style>