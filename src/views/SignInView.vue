<template>
<v-app id="inspire">
    <div class='sign-in'>
                  <v-card  class="mx-auto" max-width="500">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Авторизация</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                                v-model="lastName"
                                prepend-icon="mdi-account-outline"
                                name="login"
                                label="Логин"
                                type="text"
                           ></v-text-field>
                           <v-text-field
                                id="password"
                                prepend-icon="mdi-lock"
                                name="password"
                                label="Пароль"
                                type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="/home">Login</v-btn>
                     </v-card-actions>
                  </v-card>

    </div>
</v-app>
</template>

<script>
    export default {
        name: 'SignInView',
        data () {
            return {
                
            }
        },
    }
</script>

<style scoped>
.sign-in {

}
</style>