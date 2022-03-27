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
                    :disabled="!valid"
                    @click="createTodo"
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
        
    </div>
</template>

<script>
import CardTodo from './CardTodo.vue';
import {mtodo} from '../main'
    export default {
  components: { CardTodo },
        data: () => ({
            valid: true,
            nameError: [
                v => !!v || 'Требуется указать название заметки'],
            name: '',
            text: '',
            todos: [
                {name: 'qwerty', text: '123qwerqerwq'}
            ]
        }),
        methods: {
            createTodo () {
                if (this.name != "") {
                    this.todos.push({
                        name: this.name,
                        text: this.text,
                    })
                } else {
                    this.nameError
                }
                
                this.name = "",
                this.text = "",
                mtodo.$emit(this.todos)
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>