<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to: string | RouteLocationRaw
  variant: 'primary' | 'primaryDark'
  small?: boolean
  block?: boolean
}>()

const classes = {
  primary: 'bg-primary text-white border-primary'
}
</script>

<template>
  <NuxtLink
    :to="to"
    :class="`box-border inline-block rounded-[0.358rem] px-[1.5rem] py-[0.3rem] text-center text-sm font-semibold shadow-md transition-all duration-200 ease-in-out hover:translate-y-[-3px] hover:shadow-lg ${classes[props.variant]} ${props.small ? 'py-[0.3rem]' : 'py-[0.6rem]'} ${props.block ? 'w-full' : ''}`"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss"></style>
