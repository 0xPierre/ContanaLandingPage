<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'
import { onMounted, onUnmounted } from 'vue'

const handleScroll = () => {
  const header = document.querySelector('header')
  if (header) {
    if (window.scrollY > 0) {
      header.classList.add('h-16')
      header.classList.remove('h-20')
    } else {
      header.classList.remove('h-16')
      header.classList.add('h-20')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

/**
 * Mobile navigation
 */
const isOpen = ref(false)
const open = () => {
  isOpen.value = true
}
const close = () => {
  isOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-10 h-20 border-b-2 bg-white bg-opacity-70 text-black backdrop-blur-sm duration-200 ease-in-out hover:bg-opacity-100"
  >
    <div class="container h-full">
      <div class="flex h-full items-center justify-between">
        <div class="flex items-center space-x-10">
          <RouterLink to="/" class="flex items-center space-x-3">
            <h1 class="text-2xl font-bold">Contana</h1>
          </RouterLink>
          <div class="hidden items-center space-x-6 lg:flex">
            <RouterLink
              :to="{
                path: '/',
                hash: '#features'
              }"
              class="text-body font-medium"
            >
              Fonctionnalités
            </RouterLink>
            <RouterLink
              :to="{
                path: '/',
                hash: '#pricing'
              }"
              class="text-body font-medium"
            >
              Tarifs
            </RouterLink>
          </div>
        </div>
        <div class="flex items-center space-x-5">
          <AppButton to="https://app.contana.fr" variant="primary" small>
            Me connecter
          </AppButton>
          <div class="lg:hidden">
            <div v-if="!isOpen" @click="open">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                width="30px"
                height="30px"
                class="fill-body"
              >
                <path
                  d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"
                />
              </svg>
            </div>
            <div v-else @click="close">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5L5 19M5.00001 5L19 19"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="will-change-opacity lg-hidden fixed z-[10] h-[100vh] w-full bg-white duration-200 ease-in-out"
      :class="{
        'visible opacity-100': isOpen,
        'invisible opacity-0': !isOpen
      }"
    >
      <div class="mt-4 flex flex-col space-y-5 p-6">
        <RouterLink
          :to="{
            path: '/',
            hash: '#features'
          }"
          class="text-body font-medium"
          @click="close"
        >
          Fonctionnalités
        </RouterLink>
        <RouterLink
          :to="{
            path: '/',
            hash: '#pricing'
          }"
          @click="close"
          class="text-body font-medium"
        >
          Tarifs
        </RouterLink>
        <AppButton to="https://app.contana.fr" variant="primary">
          Me connecter
        </AppButton>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
