<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="bloglist in bloglist" :key="bloglist.title" cols="12">
        <v-card class="mx-auto">
          <v-img
            :src="bloglist.src"
            height="200px"
            class="align-end"
            gradient="to bottom left, rgba(255,255,255,0), rgba(0,0,0,.7)"
          >
            <v-card-title>
              <div class="display-1 white--text">
                {{ bloglist.title }}
              </div></v-card-title
            >
            <v-card-subtitle class="white--text">{{
              bloglist.subtitle
            }}</v-card-subtitle>
          </v-img>
          <v-card-text>
            <div class="text--primary">
              {{ bloglist.intro }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="teal accent-4" @click="reveal = true">
              查看正文
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bloglist: [
        {
          title: "第一个博客的标题",
          subtitle: "挺有趣的",
          intro: "先从vscode开始编辑博客",
          src:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Ff5579d5680a9d4d9b4ad1747956d2237c8fcb003.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613979204&t=b57dc9816e0ca5e6f3115bd6d55cb3b1",
        },
        {
          title: "标题",
          subtitle: "副标题",
          intro: "简介",
          src:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1653272729,1693620163&fm=26&gp=0.jpg",
        },
        {
          title: "标题",
          subtitle: "副标题",
          intro: "简介",
          src:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3128818497,3688036481&fm=26&gp=0.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
Word of the Day
