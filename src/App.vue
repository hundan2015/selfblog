<template>
  <v-app>
    <v-system-bar app> </v-system-bar>
    <v-navigation-drawer app permanent>
      <v-list-item two-line>
        <v-avatar>sb</v-avatar>
        <v-list-item-content>
          <v-list-item-title> Symbolic </v-list-item-title>
          <v-list-item-subtitle>兴趣使然的垃圾袋</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="lists in lists"
          :key="lists.title"
          link
          :href="lists.link"
        >
          <v-list-item-icon
            ><v-icon>{{ lists.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ lists.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="red lighten-5"> <router-view></router-view></v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      lists: [
        { title: "主页", icon: "mdi-home-city", link: "/#/" },
        { title: "博客列表", icon: "mdi-home-city", link: "/#/list" },
      ],
    };
    //
  },
};
</script>
