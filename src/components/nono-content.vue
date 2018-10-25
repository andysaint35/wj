<template>
  <div class="scroll-content">
    <slot></slot>
  </div>
</template>
<script>


export default {
  name: 'nono-content'
}

</script>
<style lang="scss">
.scroll-content {
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}


</style>
