<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{ color: string; initialColunt?: number }>();

const count = ref(props.initialColunt || 0);

const handleAdd = () => {
  count.value++;
};
</script>

<template>
  <button
    :style="{ backgroundColor: props.color || '#3f51b5' }"
    @click="handleAdd"
  >
    click me to add {{ count }}
  </button>
</template>

<style scoped>
button {
  width: 200px;
  height: 80px;
}
</style>
