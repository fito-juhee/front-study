<template>
  <nav
    class="loo-navigation-drawer loo-navigation-drawer__continer"
    :class="{ toggle: isDrawer }"
  >
    <div class="loo-navigation-drawer__content">
      <div class="loo-list-item">
        <div class="loo-list-item__content">
          <div class="loo-list-item__title title">
            No Vuetify
          </div>
        </div>
      </div>
      <hr class="loo-divider" />
      <div class="loo-list">
        <div class="loo-list-item">
          <div class="loo-list-item__content">
            <div class="loo-list-item__title">
              grid
            </div>
            <div class="loo-list-item__subtitle">
              item2
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapState: commonMapState,
  mapMutations: commonMapMutations
} = createNamespacedHelpers("common");

export default {
  data() {
    return {};
  },
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

<style scoped lang="scss" src="@/assets/scss/components/core/drawer.scss" />
