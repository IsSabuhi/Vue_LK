<template>
    <div>
        <v-form 
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-container >
                <v-select
                    :items="items"
                    :rules="[v => !!v || 'Выберите заметку которую хотите изменить']"
                    label="Заметки"
                    required
                ></v-select>
                
                <v-btn
                    class="mr-4"
                >
                    Изменить
                </v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        data: () => ({
        items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
        })
    }
</script>

<style lang="scss" scoped>

</style>