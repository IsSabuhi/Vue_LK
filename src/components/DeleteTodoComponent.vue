<template>
    <div>
        <v-form 
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-container >
                <v-select
                    :rules="[v => !!v || 'Выберите заметку которую хотите удалить']"
                    label="Заметки"
                    required
                ></v-select>
                
                <v-btn
                    class="mr-4"
                    color="error"
                >
                    Удалить
                </v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        data: () => ({

        })
    }
</script>

<style lang="scss" scoped>

</style>