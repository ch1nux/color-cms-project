<script setup lang="ts">
import { useThemeStore } from "@/stores/theme.ts"
import { shallowRef, watch } from "vue"

const props = defineProps({
  colorType: { type: String, required: true },
  labelText: String
})

const store = useThemeStore()
const { setBackColor, setMainColor, setTextColor } = store
const input = shallowRef("input")

const color = defineModel("color")

watch(color, ($newColor) => {
  if (props.colorType === "back") {
    setBackColor($newColor)
  } else if (props.colorType === "main") {
    setMainColor($newColor)
  } else if (props.colorType === "text") {
    setTextColor($newColor)
  }
})

const selectInput = () => { input.value.select() }
</script>

<template>
  <label for="colorinput">{{ props.labelText }}</label>
  <fieldset id="colorinput">
    <input type="color" v-model="color">
    <input type="text" ref="input" v-model="color" size="6" @focus="selectInput">
  </fieldset>
</template>

<style scoped>
  fieldset {
    display: flex;
    margin-bottom: 1rem;
  }
  input[type=text] {
    margin-left: .2rem;
    padding: .2rem
  }
  input[type=text]:focus {
    outline: none;
    background-color: var(--default-hover-content-color);
  }
</style>
