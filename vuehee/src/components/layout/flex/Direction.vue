<template>
  <div class="main__container">
    <h2 class="headline">Flex-Direction</h2>
    <div class="flex__header">
      <h5 class="title">reverse--row</h5>
    </div>
    <div class="flex__container direction-row-reverse">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
    </div>
    <div class="flex__container">
      <div class="w-50">
        <div class="flex__header">
          <h5 class="title">column</h5>
        </div>
        <div class="flex__container direction-column">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
        </div>
      </div>
      <div class="w-50">
        <div class="flex__header">
          <h5 class="title">reverse-column</h5>
        </div>
        <div class="flex__container direction-column-reverse">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss" src="@/assets/scss/views/layout/FlexBox.scss" />
