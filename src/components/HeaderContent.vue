<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme.ts"

const props = defineProps({ level: { type: Number, default: 1 } })
const store = useThemeStore()
const { db } = storeToRefs(store)
</script>

<template>
  <div>
    <h3 v-if="props.level === 3"><slot /></h3>
    <h2 v-else-if="props.level === 2"><slot /></h2>
    <h1 v-else>
      <slot />
      <hr />
    </h1>
  </div>
</template>

<style scoped>
  h1, h2, h3 {
    color: v-bind("db.main")
  }
  hr {
    background-color: v-bind("db.main");
  }
</style>
