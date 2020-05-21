<template>
  <header class="loo-toolbar__container">
    <div class="loo-toolbar__content">
      <div class="loo-toolbar__navIcon">
        <button class="loo-btn loo-btn--flat loo-btn--icon" @click="clickEvent">
          <i class="fas fa-hamburger fa-2x"></i>
        </button>
      </div>
      <div class="loo-toolbar__title">
        <h5>PAGE TITLE</h5>
      </div>
      <ul class="loo-toolbar__actions">
        <li class="loo-toolbar__list">
          <a href="#">
            <i class="fas fa-bell fa-lg"></i>
          </a>
        </li>
        <li class="loo-toolbar__list">
          <a href="#">
            <i class="fas fa-cog fa-lg"></i>
          </a>
        </li>
        <li class="loo-toolbar__list">
          <a href="#">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    clickEvent: function() {
      console.log("click");
    }
  }
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/core/toolbar.scss" />
