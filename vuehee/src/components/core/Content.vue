<template>
  <main class="loo-content">
    <div class="main__container" :class="{ toggle: isDrawer }">
      <router-view class="main__router-view"></router-view>
    </div>
  </main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapState: commonMapState,
  mapMutations: commonMapMutations
} = createNamespacedHelpers("common");

export default {
  computed: {
    ...commonMapState(["isDrawer"]),
    drawer: {
      get() {
        return this.$store.state.common.isDrawer;
      },
      set(val) {
        this.SET_DRAWER(val);
      }
    }
  },
  methods: {
    ...commonMapMutations(["SET_DRAWER"])
  }
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/core/content.scss" />
