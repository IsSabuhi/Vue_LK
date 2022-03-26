<template>
    <div class="pa-5">
        <h1>Заметки</h1>
        <v-divider></v-divider>
        <v-tabs
            v-model="tab"
        >
            <v-tab
                v-for="tabItem in tabItems"
                :key="tabItem.tab"
            >
                {{ tabItem.tab}}
            </v-tab>

        </v-tabs>
        <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="tabItem in tabItems"
            :key="tabItem.tab"
        >
        <v-card flat>
          <v-card-text>
            <component :is="tabItem.content"></component>
          </v-card-text> 
        </v-card>
        </v-tab-item>
    </v-tabs-items>
    </div>
</template>

<script>
import CreateTodoVue from '@/components/CreateTodoComponent.vue'
import ChangeTodoVue from '@/components/ChangeTodoComponent.vue'
import DeleteTodoVue from '@/components/DeleteTodoComponent.vue'
    export default {
        components: {CreateTodoVue, ChangeTodoVue, DeleteTodoVue},
        data: () => ({
            tab: null,
            tabItems: [
                {tab: 'Создать', content: 'CreateTodoVue'},
                {tab: 'Редактировать', content: 'ChangeTodoVue'},
                {tab: 'Удалить', content: 'DeleteTodoVue'}
            ],
        })
    }
</script>

<style lang="scss" scoped>

</style>