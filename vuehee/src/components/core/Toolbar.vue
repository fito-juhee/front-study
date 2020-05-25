<template>
  <header class="loo-toolbar loo-toolbar__container">
    <div class="loo-toolbar__content">
      <div class="loo-toolbar__navIcon">
        <button
          class="loo-btn loo-btn--flat loo-btn--icon loo-btn--round"
          @click="clickEvent"
        >
          <i class="fas fa-hamburger fa-2x"></i>
        </button>
      </div>
      <div class="loo-toolbar__title">
        <h5>PAGE TITLE</h5>
      </div>
      <ul class="loo-toolbar__actions">
        <a href="#">
          <li class="loo-toolbar__list">
            <button
              class="loo-btn loo-btn--flat loo-btn--icon loo-btn--round"
            >
              <i class="fas fa-bell fa-2x"></i>
            </button>
          </li>
        </a>
        <a href="#">
          <li class="loo-toolbar__list">
            <button
              class="loo-btn loo-btn--flat loo-btn--icon loo-btn--round"
            >
              <i class="fas fa-cog fa-2x"></i>
            </button>
          </li>
        </a>
      </ul>
    </div>
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations: commonMapMutations } = createNamespacedHelpers("common");

export default {
  methods: {
    ...commonMapMutations(["SET_DRAWER"]),
    clickEvent: function() {
      this.SET_DRAWER(!this.$store.state.common.isDrawer);
    }
  }
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/core/toolbar.scss" />
