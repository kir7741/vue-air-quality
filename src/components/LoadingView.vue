<template>
  <div class="wrapper">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingView',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_mixin.scss';
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  @include center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background:rgba(0, 0, 0, 0.2);
}
.loading {
  border: 5px solid $primaryBlack;
  border-radius: 100px;
  position: relative;
  width: 160px;
  height: 160px;
  overflow: hidden;

  &:before {
  content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    top: 160px;
    background-color: $primaryBlack;
    animation: fill 5s ease 0s alternate infinite;
  }

  &:after {
    @include center;
    content:'Loading';
    position: absolute;
    box-sizing:border-box;
    border: 5px solid white;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    color: $lightGray;
    font-size: 18px;
    font-weight: bold;
  }
}
@keyframes fill {
  100%{
    top: 0px;
  }
}
</style>
