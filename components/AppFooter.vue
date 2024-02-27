<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="">
    <div class="container py-10">
      <div
        class="flex flex-col-reverse gap-4 md:flex-row md:justify-between"
      >
        <div>
          <RouterLink to="/" class="text-2xl font-bold"
            >Contana</RouterLink
          >
          <div
            class="mt-2 flex flex-col-reverse gap-8 md:flex-row md:items-center"
          >
            <p class="text-sm">
              © Tous droits réservés - {{ currentYear }}
            </p>
            <RouterLink to="/mentions-legales">
              Mentions légales
            </RouterLink>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-5">
          <AppButton to="https://app.contana.fr" variant="primary">
            Me connecter
          </AppButton>
          <AppButton
            to="https://app.contana.fr/commencer"
            variant="primary"
          >
            Créer un compte
          </AppButton>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
