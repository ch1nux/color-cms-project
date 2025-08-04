<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme.ts"

const store = useThemeStore()
const { db } = storeToRefs(store)
</script>

<template>
  <p><slot /></p>
</template>

<style scoped>
p {
  color: v-bind("db.text")
}
</style>
