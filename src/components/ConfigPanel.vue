<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme.ts"
import ColorInput from "@/components/ColorInput.vue"

const store = useThemeStore()
const { db } = storeToRefs(store)
</script>

<template>
  <div>
    <ColorInput
      color-type="back"
      label-text="Background Color"
      v-model:color="db.back"
    />
    <ColorInput
      color-type="main"
      label-text="Main Color"
      v-model:color="db.main"
    />
    <ColorInput
      color-type="text"
      label-text="Text Color"
      v-model:color="db.text"
    />
  </div>
</template>

<style scoped>
  div {
    background-color: #fefefe;
    position: sticky;
    top: 4rem;
    height: 100dvh
  }
</style>
