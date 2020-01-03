<template>
    <div class="contact">
      <contact-header />
      <div>
        联系猎人
      </div>
      <div>
        此功能等待后续开发......
      </div>
    </div>
</template>

<script>
  import ContactHeader from './header';
  export default {
    name: 'SkillContact',
    components: {
      ContactHeader
    }
  };
</script>

<style scoped>
  .contact {
    font-size: 20px;
    margin: auto;
  }
</style>
