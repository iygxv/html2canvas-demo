<template>
  <div class="hello">
      <div class="operation-btn">
        <el-button type="primary" @click="handleDownLoad">下载图片</el-button>
      </div>
      <div class="content">
        <ImageDom id="imageDom" />
      </div>
  </div>
</template>

<script>
import { downloadImage } from '@/utils/index.js'
import ImageDom from './ImageDom.vue';
export default {
    name: 'HelloWorld',
    components: { ImageDom },
    methods: {
      handleDownLoad() {
        this.$nextTick(async () => {
          downloadImage('imageDom', {}, 'download.png')
        });
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.operation-btn {
  margin: 16px;
  text-align: left;
}
.content {
  width: 100%;
  height: 400px;
  overflow: auto;
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>
