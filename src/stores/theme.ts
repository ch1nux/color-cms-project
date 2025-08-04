import { defineStore } from "pinia";
import { ref } from "vue";
import { useCssVar, useStorage } from "@vueuse/core";

export const useThemeStore = defineStore("theme", () => {
  const backColor = useCssVar("--default-background-color", ref(null))
  const mainColor = useCssVar("--default-main-color", ref(null))
  const textColor = useCssVar("--default-text-color", ref(null))
  const db = useStorage("color-theme", {
    back: backColor.value,
    main: mainColor.value,
    text: textColor.value,
  })

  const setBackColor = ($color:string) => backColor.value = $color
  const setMainColor = ($color:string) => mainColor.value = $color
  const setTextColor = ($color:string) => textColor.value = $color

  return {
    backColor,
    mainColor,
    textColor,
    db,
    setBackColor,
    setMainColor,
    setTextColor,
  }
})
