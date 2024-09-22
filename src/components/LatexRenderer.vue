<template>
  <div class='latex-container' v-html='renderedLatex'/>
</template>

<script setup lang='ts'>
import {defineProps, ref, watch} from 'vue'
import katex from 'katex'

const renderedLatex = ref('')
const props = defineProps<{
  formula: string
}>()

const renderLatex = () => {
  try {
    renderedLatex.value = katex.renderToString(`\\displaystyle{${props.formula}}`, {
      throwOnError: false,
      displayMode: true
    })
  } catch (error) {
    renderedLatex.value = 'Invalid LaTeX syntax'
  }
}

watch(() => props.formula, renderLatex, {immediate: true})
</script>

<style>
.latex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
