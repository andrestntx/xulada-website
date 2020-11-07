<template>
  <div>
    <nav
      :class="{ 'active-menu': isOpen }"
      class="border-b-2 shadow-xl flex items-center justify-between flex-wrap bg-white px-4 py-1"
    >
      <div class="w-1/3 flex flex-row lg:hidden">
        <a
          href="https://api.whatsapp.com/send?phone=525621735330&lang=es"
          target="_blank"
          :class="{ hidden: isOpen }"
          class="flex items-center justify-center font-bold"
        >
          <svg
            class="fill-current w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
            />
          </svg>
        </a>
      </div>
      <div class="w-1/3 lg:w-1/12">
        <img
          v-show="!isOpen"
          src="@/assets/img/logo_xulada_color.png"
          alt
          class="object-contain h-12 mx-auto"
        />
        <img
          v-show="isOpen"
          src="@/assets/img/logo_xulada_white.png"
          alt
          class="object-contain h-12 mx-auto"
        />
      </div>
      <div class="hidden lg:flex lg:w-8/12">
        <ul
          class="main-menu flex flex-row flex-wrap justify-start items-center text-gray-800"
        >
          <li
            v-for="item in menuItems"
            :key="item.key"
            class="text-lg py-4 font-semibold mr-6"
          >
            <router-link :to="item.to">{{ item.title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="w-1/3 lg:hidden flex flex-row-reverse">
        <Burger :isOpen="isOpen" @burgerClick="toggleMenu" />
      </div>
      <div class="w-2/12 hidden lg:flex flex-row-reverse justify-center">
        <div class="text-gray-800 text-xl py-4">
          <p class="text-base">Agenda tu servicio</p>
          <a
            href="https://api.whatsapp.com/send?phone=525621735330&lang=es"
            target="_blank"
            class="flex items-center justify-center font-bold text-gray-900"
          >
            <svg
              class="fill-current w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
            56 2173 5330
          </a>
        </div>
      </div>
    </nav>
    <transition
      name="fade-menu"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
    >
      <div
        v-if="isOpen"
        class="pt-2 pb-8 px-20 fixed container mx-auto bg-xulada-violete bg-opacity-90 w-full flex-grow z-40"
      >
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.key"
            class="text-xl py-4 border-b text-white font-semibold"
            @click="toggleMenu"
          >
            <router-link :to="item.to" :class="{ 'active-menu': item.active }">
              {{ item.title }}</router-link
            >
          </li>
        </ul>

        <div class="text-white text-xl py-4">
          <p class="text-base">Agenda tu servicio</p>
          <a
            href="https://api.whatsapp.com/send?phone=525621735330&lang=es"
            target="_blank"
            class="flex items-center justify-center font-bold"
          >
            <svg
              class="fill-current w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
            56 2173 5330
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Burger from "./Burger.vue";

export default {
  name: "Nav",
  components: { Burger },
  data: function () {
    return {
      isOpen: false,
      menuItems: [
        {
          title: "Inicio",
          to: "/",
        },
        /*
        {
          title: "Limpieza exterior",
          to: "/limpieza-exterior",
        },
        {
          title: "Interior",
          to: "/limpieza-interior",
        },
        {
          title: "Vestiduras",
          to: "/limpieza-de-vestiduras",
        },*/
        {
          title: "Sanitización",
          to: "/sanitizacion",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      console.log("toggleMenu");
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="css" scoped>
.main-menu a.router-link-exact-active {
  @apply bg-xulada-red-intense py-2 px-3 rounded-lg text-white;
}
a.router-link-exact-active {
  @apply block rounded-lg py-3 px-4 bg-white text-gray-700;
}

nav.active-menu {
  @apply text-white bg-xulada-red-intense;
}

nav.active-menu {
  @apply text-white bg-xulada-red-intense;
}
</style>