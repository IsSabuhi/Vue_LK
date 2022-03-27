<template>
    <div>
        <input type="text" v-model="message" @keyup.enter="saveMessage">
        <h2>inner title</h2>
        <ul>
            <li v-for="person in people" :key="person.id">
                {{person}}
            </li>
        </ul>
    </div>
</template>

<script>
import {mtodo} from './main'
    export default {
        props: {
            people: {
                type: Array,
                required: false,
                default: [],
            }
        },
        data() {
            return {
                message: ''
            }
        },
        methods: {
            saveMessage: function() {
                mtodo.$emit('message', this.message);
                this.message = '';
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>