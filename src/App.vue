<template>
  <div>
    <section id="main" >
      <transition :name="transitionName">
        <keep-alive>
            <router-view></router-view> 
        </keep-alive>
      </transition>
    </section>
  </div>
</template>
<style lang="scss">

section#main{
  width:100%;
  position:fixed; 
  left:0;
  top:0;
  bottom:0;
  height:100%;
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  }

  .slide-left-enter-active {
  animation: slide-left-in .5s;
}

.slide-right-enter-active {
  animation: slide-right-in .5s; 
}

@keyframes slide-left-in {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slide-right-in {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }

</style>

<script>
import FooterView from '@/components/footer/footer.vue';
//import nonoContent from '@/components/nono-content.vue';
//nonoContent,
export default {
  name: 'app',
  components: {
    
    FooterView
  },
  data() {
    return {
      show: true,
      transitionName: 'slide-left'
    };
  },

  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  }
};
</script>
