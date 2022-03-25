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
    </div>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            name: '',
            text: '',
        }),
        methods: {
            submit () {
                let a = this.name
                let b = this.text
                console.log(a)
            },
            reset () {
                this.$refs.form.reset()
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>