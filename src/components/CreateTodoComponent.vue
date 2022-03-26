<template>
    <div>
        <v-form 
            ref="form"
        >
            <v-container >
                <v-text-field
                    v-model="name"
                    :rules="nameError"
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
                    color="primary"
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
        <card-todo></card-todo>
    </div>
</template>

<script>
import CardTodo from './CardTodo.vue'
    export default {
  components: { CardTodo },
        data: () => ({
            valid: true,
            name: '',
            text: '',
            nameError: [
                v => !!v || 'Требуется указать название заметки',
            ],
            todos: [],
        }),
        methods: {
            submit () {
                let newTodo = {
                id: Date.now(),
                name: this.name,
                text: this.text,
                }
            if (!this.name) {
                
            } else {
                this.todos.push(newTodo)
                this.newTodo = ''
                }
            },
            reset () {
                this.$refs.form.reset()
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>