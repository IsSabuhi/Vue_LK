<template>
    <div>
        <header>
            <h1>{{title}}</h1>
        </header>
    </div>
</template>

<script>
import {mtodo} from './main'
    export default {
        name: 'Header',
        data() {
            return {
                title: 'Hello',
            }
        },
        created() {
            mtodo.$on('message', data =>{
                this.title = data;
            })
        }
    }
</script>

<style scoped>
header {
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
}
</style>