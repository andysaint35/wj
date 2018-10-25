
<template>
  <div class="log-btn" >
    <p class="log-top">
    </p>
    <div class="welfare row row-no-padding">
      <div class="col text-center">
        <div>
          <img src="../../assets/images/red-1.png" alt="">
          <p><b>888</b><br> <small>元抵用券</small></p>
        </div>
        <p>888元福利任性送</p>
      </div>
      <div class="col text-center">
        <div>
          <img src="../../assets/images/red-2.png" alt="">
          <p><b>1%</b><br> <small>补贴券</small></p>
        </div>
        <p>首投满5000元送</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'log-view',
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.small {
  font-size: 12px;
}
.log-btn {
  padding: 24px 0 0 0;
  background-color: #ffa042;
  .log-top {
    width: 87%;
    margin: 0 auto;
    height: 28px;
    background-color: #fc8928;
    border-radius: 4px;
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 6px;
      width: 8px;
      height: 3px;
    }
    &::before {
      left: 10px;
      background-image: url(#{$img-path}/dot.jpeg);
      background-size: 100%;
    }
    &::after {
      right: 10px;
      background-image: url(#{$img-path}/dot.jpeg);
      background-size: 100%;
    }
  }
  .welfare {
    width: 82%;
    margin: 0 auto;
    background-color: #fff;
    padding: 25px 0;
    position: relative;
    top: -12px;
    border-radius: 4px;
    box-shadow: 0 4px 4px rgba(255, 113, 32, 0.1);
    .col {
      div {
        width: 60%;
        margin: 0 auto;
        position: relative;
        img {
          width: 100%;
          height: auto;
        }
        p {
          position: absolute;
          bottom: 20px;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 10px;
          color: #fff;
          b {
            font-size: 30px;
          }
          small {
            display: block;
            margin-top: -6px;
            @include transform(scale(0.9));
          }
        }
      }
      p {
        color: #ff7120;
        font-size: 14px;
        margin: 8px 0 0 0;
      }
    }
  }
}
</style>
