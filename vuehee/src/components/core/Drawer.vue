<template>
  <aside class="loo-navigation-drawer__continer" v-model="drawer">
    <div class="loo-navigation-drawer__content">
      <div class="loo-list">
        <div class="loo-list-item">
          <div class="loo-list-item__action">
            <i class="fas fa-contacts"></i>
          </div>
          <div class="loo-list-item__content">
            <div class="loo-list-item__text">
              item1
            </div>
            <div class="loo-list-item__text">
              item2
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/core/drawer.scss" />
