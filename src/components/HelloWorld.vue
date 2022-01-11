<script lang="ts">
export default {
  inheritAttrs: false
};
</script>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div>
    <div v-bind="$attrs">
      {{ msg }}
    </div>
  </div>
</template>
