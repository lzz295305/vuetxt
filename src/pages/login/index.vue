<template>
    <div class="login">
      <register/>
    </div>
</template>

<script>
  import forget from './forget';
  import register from './register';
  export default {
    name: 'Login',
    components: {
      forget,
      register
    }
  };
</script>

<style lang="scss" scoped>

</style>
