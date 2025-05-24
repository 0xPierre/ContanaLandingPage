<script setup lang="ts">
import AppButton from '~/components/ui/AppButton.vue'
</script>

<template>
  <div>
    <div class="container">
      <div class="grid border-l-2 lg:grid-cols-2">
        <div class="border-r-2">
          <div class="py-18 border-b-2 p-12">
            <h1 class="mb-4 mt-[7rem] text-5xl">
              Solution de facturation,
              <span class="text-primary">simple</span> et
              <span class="text-primary">intuitive</span>
            </h1>
          </div>
          <div class="mb-10 p-12">
            <p>
              Découvrez Contana, votre copilote de gestion d'entreprise.
              <span class="text-primary">Facturation</span>,
              <span class="text-primary">encaissement</span>, suivis de
              documents et <span class="text-primary">clients</span>.
              <br />
              Suivez votre
              <span class="text-primary">chiffre d'affaires</span> en temps
              réel, personnalisez vos devis et factures à votre goûts et
              bien plus encore.
            </p>
            <AppButton
              variant="primary"
              to="https://app.contana.fr/commencer"
              class="mt-8"
            >
              Créer un compte
            </AppButton>
          </div>
        </div>
        <div class="ml-6 hidden items-center justify-center lg:flex">
          <img
            src="~/assets/images/undraw_financial.svg"
            alt="Illustration"
            class="w-full"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="container" id="features">
        <div class="grid border-l-2 border-t-2 lg:grid-cols-2">
          <div class="my-[10rem] px-10">
            <h2 class="pr-20 text-4xl lg:text-5xl">
              Suivez votre
              <span class="text-primary">chiffres d'affaires</span> en
              temps réel.
            </h2>
            <p class="mt-8">
              Suivez votre chiffre d'affaires, vos factures impayées, vos
              devis en cours, vos meilleurs clients et bien plus encore.
              <br />
              Pilotez votre entreprise en toute sérénité et simplicité.
            </p>
            <AppButton
              variant="primary"
              to="https://app.contana.fr/commencer"
              class="mt-8"
            >
              Créer un compte
            </AppButton>
          </div>
          <div class="flex items-center">
            <img
              src="~/assets/images/dashboard.webp"
              alt="Dashboard"
              class="w-full rounded border-2"
            />
          </div>
        </div>

        <div class="grid border-l-2 border-t-2 lg:grid-cols-2">
          <div class="my-[10rem] px-10">
            <h2 class="pr-20 text-4xl lg:text-5xl">
              Créez vos
              <span class="text-primary">devis</span> et
              <span class="text-primary">factures</span> en quelques clics.
            </h2>
            <p class="mt-8">
              Créez vos devis et factures, avoirs et acomptes en quelques
              clics, personnalisez les à votre goûts, envoyez les par mail
              à vos clients ou imprimez les.
              <br />
              Gagnez du temps et de l'argent.
            </p>
          </div>
          <div class="flex items-center">
            <img
              src="~/assets/images/constructeur.webp"
              alt="Constructeur"
              class="w-full rounded border-2"
            />
          </div>
        </div>

        <div class="grid border-l-2 border-t-2 lg:grid-cols-2">
          <div class="my-[10rem] px-10">
            <h2 class="pr-20 text-4xl lg:text-5xl">
              Suivez vos
              <span class="text-primary">documents</span> en un clin
              d'oeil.
            </h2>
            <p class="mb mt-8">
              Suivez vos documents, vos factures, vos devis, vos avoirs,
              vos acomptes, vos notes de frais, vos relevés bancaires et
              bien plus encore.
              <br />
              Gagnez du temps et de l'argent.
            </p>
            <div id="pricing" />
          </div>
          <div class="mb-[5rem] flex items-center lg:mb-0">
            <img
              src="~/assets/images/documents.webp"
              alt="Documents"
              class="w-full rounded border-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
