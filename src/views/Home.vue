<template>
  <div id="home">
    <div
      id="banner"
      class="flex flex-wrap items-center px-6 pt-10 pb-6 sm:rounded-lg bg-xulada-violete"
    >
      <div class="w-full md:w-5/12 slogan">
        <div class="hidden pt-10 md:flex justify-center mb-12">
          <h1
            class="text-white text-center text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-extrabold tracking-wide leading-8"
          >
            Limpieza especializada
            <br />
            <span class="text-2xl md:text-xl lg:text-3xl font-semibold"
              >para tu coche a domicilio</span
            >
            <br />
            <span class="text-2xl md:text-xl lg:text-3xl font-semibold"
              >sin uso de agua</span
            >
          </h1>
        </div>
        <div class="md:block hidden">
          <a
            href="https://wa.link/9wmsgw"
            target="_blank"
            class="bg-xulada-violete-intese hover:bg-xulada-red-intense text-white py-1 px-2 rounded-lg inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
            <span>agenda tu enxulada</span>
          </a>
        </div>
        <div class="pt-10 flex justify-center mb-8">
          <h2
            class="text-white text-center lg:text-right text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-extrabold tracking-wide leading-6 sm:leading-7"
          >
            ¡Cuidamos tu coche
            <br />
            <span class="text-2xl md:text-xl lg:text-2xl font-semibold"
              >como si fuera nuestro!</span
            >
          </h2>
        </div>
      </div>
      <div class="w-full md:w-7/12">
        <div class="block mb-5 lg:mb-0">
          <img
            src="@/assets/img/jaguar_top_blue_op.png"
            class="object-contain lg:w-full m-auto"
            alt
            srcset
          />
        </div>
        <div class="md:hidden block mb-8">
          <h1
            class="text-white text-center lg:text-right text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-extrabold tracking-wide leading-7 sm:leading-7"
          >
            Limpieza especializada <br />
            para tu coche a domicilio <br />
            <span class="font-bold"> sin uso de AGUA </span>
          </h1>
        </div>

        <div class="block md:hidden">
          <button
            class="bg-xulada-violete-intese hover:bg-xulada-red-intense text-white py-1 px-2 rounded-lg inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
            <span>agenda tu enxulada</span>
          </button>
        </div>
      </div>
    </div>

    <div id="description" class="block pt-5 sm:pt-10 lg:pt-20 pb-10">
      <div class="flex flex-wrap sm:px-20 mb-8">
        <div
          class="w-full md:h-32 lg:h-40 md:w-1/2 md:border-r-3 border-xulada-violete"
        >
          <div class="flex justify-center md:justify-start lg:justify-center">
            <h2
              class="border-b-2 border-xulada-violete md:border-b-0 text-xl sm:text-3xl lg:text-4xl italic font-medium leading-5 lg:leading-7 text-center md:text-right text-xulada-violete pb-4"
            >
              <span class="font-semibold">Servicio</span>
              &nbsp;
              <span class="font-extrabold">Premium</span>
              <br />
              <span
                class="text-base sm:text-xl text-gray-600 font-bold lg:text-2xl"
                >para tu coche</span
              >
            </h2>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex justify-center">
            <h2
              class="text-xl sm:text-3xl lg:text-4xl italic leading-5 lg:leading-7 text-center md:text-left text-xulada-violete font-semibold pt-4 md:pt-0"
            >
              en la puerta
              <br />
              <span
                class="text-base sm:text-xl text-gray-600 font-bold lg:text-2xl"
                >de tu casa u oficina</span
              >
            </h2>
          </div>
        </div>
      </div>
      <div class="block md:hidden px-4 sm:px-12">
        <img
          alt="Xulada Services"
          src="@/assets/img/range_rover_with bubbles.png"
          class="object-contain m-auto"
        />
      </div>
      <div class="hidden md:block px-4 lg:px-6">
        <img
          alt="Xulada Services"
          src="@/assets/img/range_rover_with_titles.png"
          class="object-contain m-auto"
        />
      </div>
    </div>

    <div id="stories" class="bg-xulada-black block py-3 md:px-20 sm:rounded-lg">
      <vueper-slides
        class="no-shadow ex--show-multiple-slides-and-gap"
        :breakpoints="breakpoints"
        fixed-height="400px"
        :visible-slides="3"
        :bullets-outside="true"
        :bullets="true"
        :gap="3"
        :dragging-distance="20"
        :arrows="true"
      >
        <vueper-slide>
          <template v-slot:content>
            <div class="text-white flex flex-wrap p-5 md:px-2 lg:px-6">
              <div class="w-full flex justify-center mb-5">
                <img src="@/assets/img/left_circle_gear_lever.png" />
              </div>
              <div class="w-full">
                <h3 class="text-xl mb-3 text-xulada-red-intense">
                  Productos premium
                </h3>
              </div>
              <div class="w-full px-6 lg:px-0">
                <p class="text-white text-sm">
                  Cada una de las partes de tu coche es tratado con productos
                  especiales para proteger los materiales, la pintura y
                  <b>generar un brillo como nuevo</b>
                </p>
              </div>
            </div>
          </template>
        </vueper-slide>
        <vueper-slide>
          <template v-slot:content>
            <div class="text-white flex flex-wrap p-5 md:px-2 lg:px-6">
              <div class="w-full flex justify-center mb-5">
                <img src="@/assets/img/center_circle_man_in_a_couch.png" />
              </div>
              <div class="w-full">
                <h3 class="text-xl mb-3 text-xulada-red-intense">
                  Ahorras tiempo
                </h3>
              </div>
              <div class="w-full px-6 lg:px-0">
                <p class="text-white text-sm">
                  Vamos a tu casa u oficina y enxulamos tu coche sin agua y con
                  productos ecológicos.
                  <br />
                  <b>No más filas y tiempos de espera!</b>
                </p>
              </div>
            </div>
          </template>
        </vueper-slide>
        <vueper-slide>
          <template v-slot:content>
            <div class="text-white flex flex-wrap p-5 md:px-2 lg:px-6">
              <div class="w-full flex justify-center mb-5">
                <img src="@/assets/img/rigth_circle_girl_cleaning.png" />
              </div>
              <div class="w-full">
                <h3 class="text-xl mb-3 text-xulada-red-intense">Seguridad</h3>
              </div>
              <div class="w-full px-6 lg:px-0">
                <p class="text-white text-sm">
                  Los datos y pefil de nuestro Enxulador Profesional te serán
                  enviados antes de llegar a tu domicilio.
                  <br />
                  <b>No requerimos llaves, ni mover tu coche</b>
                </p>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>

    <div id="details" class="flex flex-wrap px-6 md:px-10 py-10 lg:p-20">
      <div class="w-full sm:w-1/2">
        <div class="block mb-6 lg:mb-1">
          <div class="flex justify-center sm:justify-start">
            <h3
              class="font-extrabold xs:text-center sm:text-left text-2xl lg:text-4xl font-black tracking-wider leading-7 mb-6"
            >
              Atención a los detalles
            </h3>
          </div>
          <p class="text-center sm:text-left text-sm px-1 sm:pr-16 italic">
            Limpiamos y sanitizamos cada rincón de tu coche. Al final del
            servicio te enviamos un informe digital donde capturamos el antes y
            el después de nuestro servicio premium y los detalles que
            encontramos en tu auto.
            <br />
            <span class="font-bold"
              >Comprueba la calidad de nuestro Enxulado!</span
            >
          </p>
          <div class="hidden md:flex justify-start pt-6">
            <a
              href="https://wa.link/1smu99"
              target="_blank"
              class="hover:bg-xulada-purple-dark bg-xulada-red-intense text-white py-1 px-2 rounded-lg inline-flex items-center"
            >
              <svg
                class="fill-current w-4 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                />
              </svg>
              <span>Quiero saber más</span>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-1/2">
        <div class="flex justify-center pt-6 mb-10 lg:mb-1">
          <img src="@/assets/img/red_mercedes_benz_middle.png" alt srcset />
        </div>
        <div class="md:hidden flex justify-center">
          <button
            class="hover:bg-xulada-purple-dark bg-xulada-red-intense text-white py-1 px-2 rounded-lg inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
            <span>Quiero saber más</span>
          </button>
        </div>
      </div>
    </div>

    <div id="covid" class="block px-6 sm:px-20 py-8 lg:pb-4 bg-xulada-gray">
      <h3
        class="text-normal sm:text-xl md:text-2xl lg:text-4xl text-center lg:text-right italic text-gray-700 uppercase font-extrabold tracking-wider mb-4 lg:mb-0"
      >
        Tu coche libre de covid-19
      </h3>
      <div class="w-full">
        <div class="flex flex-row-reverse lg:items-center">
          <div class="flex w-full lg:w-5/12">
            <div class="block px-5 lg:px-12">
              <div class="block mb-6">
                <p
                  class="text-center lg:text-left italic text-sm md:text-base lg:text-lg px-4"
                >
                  Nuestro servicio incluye
                  <span class="uppercase font-bold"
                    >sanitización y desinfección de tu coche</span
                  >
                  <br />Para que te sientas seguro y cuides a los que más
                  quieres
                </p>
                <div
                  class="hidden lg:flex justify-start lg:pt-10 lg:pb-12 px-4"
                >
                  <router-link
                    to="/sanitizacion"
                    class="hover:bg-xulada-purple-dark bg-xulada-blue-covid text-white py-1 px-2 rounded-lg inline-flex items-center"
                  >
                    <span>Saber más...</span>
                  </router-link>
                </div>
                <img
                  src="@/assets/img/family_couch_siloutte.png"
                  class="mb-4 lg:hidden"
                  alt
                  srcset
                />
                <img src="@/assets/img/advantages_icons_grey.png" alt srcset />
              </div>
              <div class="flex justify-center lg:hidden">
                <a
                  href="https://wa.link/nqlw6f"
                  target="_blank"
                  class="hover:bg-xulada-purple-dark bg-xulada-blue-covid text-white py-1 px-2 rounded-lg inline-flex items-center"
                >
                  <svg
                    class="fill-current w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    />
                  </svg>
                  <span>Quiero sanitizar mi coche</span>
                </a>
              </div>
            </div>
          </div>
          <div class="hidden lg:flex w-full lg:w-7/12">
            <img src="@/assets/img/family_couch_siloutte.png" alt srcset />
          </div>
        </div>
      </div>
    </div>

    <div
      id="prices"
      class="bg-xulada-red-intense block py-4 md:px-20 sm:rounded-lg"
    >
      <h4
        class="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-extrabold mb-8"
      >
        Nuestros paquetes
      </h4>
      <vueper-slides
        class="no-shadow ex--show-multiple-slides-and-gap"
        :breakpoints="breakpoints_prices"
        fixed-height="540px"
        :visible-slides="3"
        :bullets-outside="true"
        :bullets="false"
        :gap="3"
        :dragging-distance="20"
        :arrows="true"
        :arrows-outside="false"
        :init-slide="2"
      >
        <vueper-slide>
          <template v-slot:content>
            <div class="w-full md:border-r-2 border-white">
              <div class="text-center">
                <div class="w-full flex justify-center">
                  <img src="@/assets/img/sanitization_icon_prices.png" alt />
                </div>
                <h5 class="text-2xl text-xulada-black font-bold">
                  Enxulada Exterior
                </h5>
                <p
                  class="pt-4 line-through price font-bold text-xulada-black leading-6"
                >
                  <span class="text-xl">$</span>
                  <span class="text-5xl">200</span>
                  <span class="uppercase text-xl">MXN</span>
                </p>
                <p class="price font-bold text-white leading-tight">
                  <span class="text-2xl">$</span>
                  <span class="text-6xl sm:text-7xl md:text-8xl">140</span>
                  <span class="uppercase text-2xl">MXN</span>
                </p>
                <div class="pt-2 w-full flex justify-center">
                  <ul
                    class="text-sm text-xulada-black font-normal mb-6 text-left"
                  >
                    <li>Limpieza sin AGUA</li>
                    <li>Carrocería</li>
                    <li>Encerado</li>
                    <li>Vidrios y espejos</li>
                    <li>Rines</li>
                    <li>Llantas</li>
                  </ul>
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=525621735330&text=Hola%20Xulada.%20Quiero%20agendar%20la%20enxulada%20exterior%20de%20mi%20coche%20%F0%9F%9A%97"
                  target="_blank"
                  class="hover:bg-xulada-violete bg-xulada-black text-white py-1 px-2 rounded-lg inline-flex items-center"
                >
                  <svg
                    class="fill-current w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    />
                  </svg>
                  <span>Agendar Enxulada</span>
                </a>
              </div>
            </div>
          </template>
        </vueper-slide>
        <vueper-slide>
          <template v-slot:content>
            <div class="w-full">
              <div class="text-center text-white">
                <div class="mx-10 sm:mx-2 px-2 py-6 bg-xulada-black rounded-lg">
                  <div class="w-full flex justify-center">
                    <img src="@/assets/img/enxulada_full_prices.png" alt />
                  </div>
                  <h5 class="text-2xl font-bold">Enxulada completa</h5>
                  <p
                    class="pt-3 line-through price font-bold text-xulada-red-intense leading-6"
                  >
                    <span class="text-xl">$</span>
                    <span class="text-5xl">320</span>
                    <span class="uppercase text-xl">MXN</span>
                  </p>
                  <p class="pt-0 pb-4 price font-bold text-white leading-tight">
                    <span class="text-2xl">$</span>
                    <span class="text-6xl sm:text-7xl md:text-8xl">250</span>
                    <span class="uppercase text-2xl">MXN</span>
                  </p>
                  <div class="flex justify-center items-center">
                    <div class="w-1/2 flex justify-center">
                      <ul class="text-sm font-normal mb-6 text-left">
                        <li class="font-bold pb-2">Limpieza Exterior</li>
                        <li>Carrocería</li>
                        <li>Encerado</li>
                        <li>Vidrios y espejos</li>
                        <li>Rines</li>
                        <li>Llantas</li>
                      </ul>
                    </div>
                    <div class="w-1/2 flex justify-center">
                      <ul class="text-sm font-normal mb-6 text-left">
                        <li class="font-bold pb-2">Limpieza Interior</li>
                        <li>Aspirado</li>
                        <li>Control olores</li>
                        <li>Tablero</li>
                        <li>Vinil</li>
                        <li>Cajuela</li>
                      </ul>
                    </div>
                  </div>
                  <a
                    href="https://wa.link/oxhur6"
                    target="_blank"
                    class="hover:bg-xulada-violete bg-xulada-red-intense text-white py-1 px-2 rounded-lg inline-flex items-center"
                  >
                    <svg
                      class="fill-current w-4 h-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                      />
                    </svg>
                    <span>Agendar ahora</span>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </vueper-slide>
        <vueper-slide>
          <template v-slot:content>
            <div class="w-full md:border-l-2 border-white">
              <div class="text-center">
                <div class="w-full flex justify-center">
                  <img src="@/assets/img/enxulada_membership_prices.png" alt />
                </div>
                <h5 class="text-xulada-black text-2xl font-bold leading-7">
                  Membresía
                  <br />Xulada Plus
                </h5>
                <p
                  class="pt-4 line-through price font-bold text-xulada-black leading-6"
                >
                  <span class="text-xl">$</span>
                  <span class="text-5xl">900</span>
                  <span class="uppercase text-xl">MXN</span>
                </p>
                <p class="price font-bold text-white leading-none">
                  <span class="text-2xl">$</span>
                  <span class="text-6xl sm:text-7xl md:text-8xl">700</span>
                  <span class="uppercase text-2xl">MXN</span>
                </p>
                <div
                  class="text-sm font-normal mb-4 text-xulada-black leading-5"
                >
                  <p>2 Sanitizados / MES</p>
                  <p>2 Enxuladas completas / MES</p>
                  <p>1 Diagnóstico / MES</p>
                  <p>15% Descuento autopartes</p>
                </div>

                <a
                  href="https://wa.link/6u539b"
                  target="_blank"
                  class="hover:bg-xulada-violete bg-xulada-black text-white py-1 px-2 rounded-lg inline-flex items-center"
                >
                  <svg
                    class="fill-current w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    />
                  </svg>
                  <span>Quiero Xulada Plus</span>
                </a>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Home",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    breakpoints: {
      600: {
        visibleSlides: 1,
        bullets: true,
        bulletsOutside: true,
      },
      900: {
        bullets: true,
        bulletsOutside: true,
        visibleSlides: 2,
      },
      1100: {
        visibleSlides: 2,
      },
    },
    breakpoints_prices: {
      600: {
        visibleSlides: 1,
        bullets: true,
        fixedHeight: "500px",
      },
      700: {
        visibleSlides: 1,
        bullets: true,
      },
      1100: {
        visibleSlides: 2,
      },
    },
  }),
};
</script>

<style scoped>
#prices .vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
  color: white;
}

#banner {
  background-image: URL("../assets/img/top_rectangle_with_gradient_square.png");
  background-size: cover;
}

@media only screen and (min-width: 1000px) {
  #stories .vueperslides--fixed-height.vueperslides--bullets-outside,
  #prices .vueperslides--fixed-height.vueperslides--bullets-outside {
    margin-bottom: 0em;
  }
}

@media only screen and (max-width: 750px) {
  #banner {
    background-image: URL("../assets/img/violette_top_area.jpg");
    background-size: cover;
  }
}
</style>