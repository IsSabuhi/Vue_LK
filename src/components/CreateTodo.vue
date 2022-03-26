<template>
    <div>
            <v-form 
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-container >
                    <v-text-field
                        v-model="name"
                        :counter="20"
                        label="Название"
                        required
                    ></v-text-field>
                    <v-textarea
                    v-model="text"
                        filled
                        label="Текст"
                        auto-grow
                    ></v-textarea>

                    <v-btn
                        class="mr-4"
                        type="submit"
                        @click="submit"
                    >
                        Сохранить
                    </v-btn>
                    <v-btn
                        color="error"
                        class="mr-4"
                        @click="reset"
                    >
                        Очистить
                    </v-btn>
                </v-container>
            </v-form>

            <div v-for="todo in todos" :key="todo.id">
                <div>{{todo.title}}</div>
            </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            name: '',
            text: '',
            todos: [

            ],
        }),
        methods: {
            submit () {
                let newTodo = {
                id: Date.now(),
                title: this.name,
                }
            this.todo.push(newTodo)
            this.newTaskTitle = ''
            console.log(todo)
            },
            reset () {
                this.$refs.form.reset()
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>