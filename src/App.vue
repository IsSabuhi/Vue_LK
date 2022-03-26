<template>
  <div>
    <v-app id="inspire">
      <v-app-bar
        app
        color="blue darken-1"
        flat
      >
        <v-container class="py-0 fill-height">
          <v-badge 
            class="mr-4"
            avatar
            bordered
            overlap
          >
            <template v-slot:badge>
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
              </v-avatar>
             </template>
             <v-avatar
              color="grey darken-3"
              size="40"
            >
              <v-icon dark>
                mdi-account-circle
              </v-icon>
            </v-avatar>
          </v-badge>
          <strong>{{userProfile.name}}</strong>
          <v-spacer></v-spacer>
        </v-container>
      </v-app-bar>

      <v-main class="grey lighten-3">
        <v-container>
          <v-row>
            <v-col cols="3">
              <v-sheet>
                <v-list shaped>
                  <v-list-item-group
                    color="primary"
                  >
                    <v-list-item
                      v-for="item in items" 
                      :key="item.title"
                      :to="item.to"
                      link
                    >
                      <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                      </v-list-item-content>

                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet
                min-height="70vh"
                rounded="lg"
                elevation="5"
              >
                <router-view></router-view>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
  export default {
    data: () => ({
      items: [
        {title: 'Главная', icon: 'mdi-home', to: '/'},
        {title: 'Профиль', icon: 'mdi-account', to: '/profile'},
        {title: 'Записи', icon: 'mdi-note-plus', to: '/newtodo'},
        {title: 'Ваши заметки', icon: 'mdi-format-list-checks', to: '/history'},
        {title: 'О нас', icon: 'mdi-information-outline', to: '/about'}
      ],
      userProfile : {
        name: 'Ivanov Ivan'
      },
    })
  }
</script>

<style scoped>

</style>