<template>
  <div id="home">
    <div
      id="banner"
      class="flex flex-wrap items-center px-6 pt-10 pb-6 sm:rounded-lg bg-xulada-violete"
    >
      <div class="w-full sm:w-5/12 slogan">
        <img
          src="@/assets/logo_xulada_white.png"
          alt
          class="object-contain h-26 md:h-32 w-full mb-16"
        />
        <div class="block">
          <div class="flex justify-center mb-8">
            <h1
              class="text-white text-center sm:text-right text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide leading-6"
            >
              ¡Cuidamos tu coche
              <br />
              <span class="text-xl sm:text-3xl md:text-4xl font-semibold">como si fuera nuestro!</span>
            </h1>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-7/12">
        <div class="flex justify-center mb-5">
          <img src="@/assets/jaguar_top_blue.png" class="w-full" alt srcset />
        </div>
        <div class="block">
          <button
            class="bg-xulada-violete-intese hover:bg-xulada-red-intense text-white py-1 px-2 rounded inline-flex items-center"
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

    <div id="description" class="block pt-5 pb-10">
      <div class="flex flex-wrap sm:px-20 mb-8">
        <div class="w-full md:h-40 md:w-1/2 sm:border-r-3 border-xulada-violete">
          <div class="flex justify-center">
            <h2
              class="border-b-2 border-xulada-violete sm:border-b-0 text-xl sm:text-4xl italic font-medium leading-5 text-center sm:text-right text-xulada-violete pb-4"
            >
              <span class="font-semibold">Servicio</span>
              &nbsp;
              <span class="font-extrabold">Premium</span>
              <br />
              <span class="text-base text-gray-600 font-bold">para tu coche</span>
            </h2>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="flex justify-center">
            <h2
              class="text-xl sm:text-4xl italic leading-5 text-center sm:text-left text-xulada-violete font-semibold pt-4"
            >
              en la puerta
              <br />
              <span class="text-base text-gray-600 font-bold">de tu casa u oficina</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <img alt="Vue logo" src="@/assets/range_rover_with bubbles.png" class="w-full" />
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
            <div class="text-white flex flex-wrap p-5">
              <div class="w-full flex justify-center mb-5">
                <img src="@/assets/left_circle_gear_lever.png" />
              </div>
              <div class="w-full">
                <h3 class="text-xl mb-3 text-xulada-red-intense">Productos premium</h3>
              </div>
              <div class="w-full px-10">
                <p
                  class="text-white text-sm"
                >Tu coche merece un producto premium para cada una de sus partes, que cuide su pintura y realce su brillo como un coche nuevo</p>
              </div>
            </div>
          </template>
        </vueper-slide>
        <vueper-slide>
          <template v-slot:content>
            <div class="text-white flex flex-wrap p-5">
              <div class="w-full flex justify-center mb-5">
                <img src="@/assets/center_circle_man_in_a_couch.png" />
              </div>
              <div class="w-full">
                <h3 class="text-xl mb-3 text-xulada-red-intense">Ahorras tiempo</h3>
              </div>
              <div class="w-full px-10">
                <p class="text-white text-sm">
                  El tiempo es para ti y tu familia.
                  Vamos a tu casa, tu oficina o donde quieras.
                  No más filas y tiempos de espera!
                </p>
              </div>
            </div>
          </template>
        </vueper-slide>
        <vueper-slide>
          <template v-slot:content>
            <div class="text-white flex flex-wrap p-5">
              <div class="w-full flex justify-center mb-5">
                <img src="@/assets/rigth_circle_girl_cleaning.png" />
              </div>
              <div class="w-full">
                <h3 class="text-xl mb-3 text-xulada-red-intense">Seguridad</h3>
              </div>
              <div class="w-full px-10">
                <p class="text-white text-sm">
                  Conocerás nuestro Enxulador profesional antes de llegar a tu domicilio.
                  No requerimos llaves, ni mover tu coche
                </p>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>

    <div id="details" class="flex flex-wrap sm:mb-20 px-6 sm:px-20 py-10">
      <div class="w-full sm:w-1/2">
        <div class="block mb-6">
          <div class="flex justify-center sm:justify-left">
            <h3
              class="text-base font-extrabold text-center text-2xl sm:text-3xl font-black tracking-wider leading-7 mb-6"
            >Atención a los detalles</h3>
          </div>
          <p class="text-center sm:text-left text-xs px-6 sm:pr-16 italic">
            Limpiamos y sanitizamos cada rincón de tu coche. Al final del servicio te enviamos un informe digital donde capturamos el antes y el después de nuestro servicio premium.
            <br />
            <span class="font-bold">Para que compruebes nuestro Enxulado!</span>
          </p>
        </div>
      </div>
      <div class="w-full sm:w-1/2">
        <div class="flex justify-center pt-6 mb-10">
          <img src="@/assets/red_mercedes_benz_middle.png" alt srcset />
        </div>
        <div class="flex justify-center">
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

    <div id="covid" class="flex flex-row-reverse px-6 sm:px-20 py-8 bg-xulada-gray">
      <div class="w-full sm:w-7/12">
        <h3
          class="text-normal sm:text-xl sm:text-3xl text-center sm:text-right italic text-gray-700 uppercase font-extrabold tracking-wider mb-4"
        >Tu coche libre de covid-19</h3>
        <div class="flex flex-row-reverse">
          <div class="w-full sm:w-1/2">
            <div class="block px-5">
              <div class="block mb-6">
                <p class="text-center sm:text-left italic text-sm px-4">
                  Nuestro servicio incluye
                  <span
                    class="uppercase font-bold"
                  >sanitización y desinfección de tu coche</span>
                  <br />Para que te sientas seguro y cuides a los que más quieres
                </p>
                <img src="@/assets/family_couch_siloutte.png" class="mb-4" alt srcset />
                <img src="@/assets/advantages_icons_grey.png" alt srcset />
              </div>
              <div class="flex justify-center">
                <button
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="prices" class="bg-xulada-red-intense block py-4 md:px-20 sm:rounded-lg">
      <h4 class="text-center text-white text-xl uppercase font-extrabold">Nuestros paquetes</h4>
      <vueper-slides
        class="no-shadow ex--show-multiple-slides-and-gap"
        :breakpoints="breakpoints"
        fixed-height="500px"
        :visible-slides="3"
        :bullets-outside="true"
        :bullets="true"
        :gap="3"
        :dragging-distance="20"
        :arrows="false"
        :init-slide="2"
      >
        <vueper-slide>
          <template v-slot:content>
            <div class="w-full py-6">
              <div class="text-center sm:border-r-2 border-white">
                <div class="w-full flex justify-center">
                  <img src="@/assets/sanitization_icon_prices.png" alt />
                </div>
                <h5 class="text-2xl text-xulada-black font-bold">Sanitización</h5>
                <p class="price font-bold text-white leading-tight">
                  <span class="text-2xl">$</span>
                  <span class="text-8xl">150</span>
                  <span class="uppercase text-2xl">MXN</span>
                </p>
                <p class="text-sm text-xulada-black font-normal mb-6">Sanitización COVID-19</p>
                <button
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
                  <span>Agendar Sanitización</span>
                </button>
              </div>
            </div>
          </template>
        </vueper-slide>
        <vueper-slide>
          <template v-slot:content>
            <div class="w-full py-6">
              <div class="text-center sm:border-r-2 border-white text-white">
                <div class="mx-16 px-2 py-6 bg-xulada-black rounded-lg">
                  <div class="w-full flex justify-center">
                    <img src="@/assets/enxulada_full_prices.png" alt />
                  </div>
                  <h5 class="text-2xl font-bold">Enxulada completa</h5>
                  <p class="pt-4 line-through price font-bold text-xulada-red-intense leading-6">
                    <span class="text-xl">$</span>
                    <span class="text-5xl sm:text-6xl">320</span>
                    <span class="uppercase text-xl">MXN</span>
                  </p>
                  <p class="pt-3 pb-4 price font-bold text-white leading-tight">
                    <span class="text-2xl">$</span>
                    <span class="text-6xl sm:text-8xl">250</span>
                    <span class="uppercase text-2xl">MXN</span>
                  </p>
                  <div class="flex justify-center">
                    <div class="w-8/12 flex justify-center">
                      <ul class="list-disc text-sm font-normal mb-6 text-left">
                        <li>Enxulada exterior</li>
                        <li>Enxulada interior</li>
                        <li>Encerado</li>
                        <li>Informe digiatal</li>
                      </ul>
                    </div>
                    <div class="w-4/12">
                      <img src="@/assets/sanitization_gift_red_bubble.png" class="h-20" alt />
                    </div>
                  </div>
                  <button
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
                  </button>
                </div>
              </div>
            </div>
          </template>
        </vueper-slide>
        <vueper-slide>
          <template v-slot:content>
            <div class="w-full py-6">
              <div class="text-center">
                <div class="w-full flex justify-center">
                  <img src="@/assets/enxulada_membership_prices.png" alt />
                </div>
                <h5 class="text-xulada-black text-2xl font-bold leading-7">
                  Membresía
                  <br />Xulada Plus
                </h5>
                <p class="price font-bold text-white leading-none">
                  <span class="text-2xl">$</span>
                  <span class="text-8xl">700</span>
                  <span class="uppercase text-2xl">MXN</span>
                </p>
                <div class="text-sm font-normal mb-4 text-xulada-black leading-5">
                  <p>Sanitizados / MES</p>
                  <p>2 Enxuladas completas / MES</p>
                  <p>Diagnóstico periódico</p>
                  <p>Descuento autopartes</p>
                </div>

                <button
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
                </button>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>

    <div id="footer" class="block sm:px-20 py-6 bg-xulada-black sm:rounded-lg">
      <div class="flex flex-wrap items-center">
        <div class="w-full sm:w-1/3 flex justify-center">
          <img src="@/assets/xulada_biker_girl.png" class="h-32" />
        </div>
        <div class="w-full sm:w-1/3 flex justify-center">
          <div class="w-full sm:w-2/3">
            <div class="flex justify-center sm:mb-6 invisible sm:visible">
              <img src="@/assets/logo_xulada_red_intense.png" class="h-10 md:h-20" />
            </div>
            <div class="flex justify-center mb-6">
              <div class="text-white text-xs text-center sm:text-left">
                <h5 class="uppercase">Alianzas comerciales</h5>
                <p>Luisa Mendez</p>
                <p>Email: luisa.mendez@xulada.mx</p>
                <p>Teléfono : (99) 8810 5972</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/3 flex justify-center">
          <div class="w-full sm:w-1/2">
            <div class="text-white text-sm text-center mb-4">
              <h5 class="font-bold">Visita nuestras redes</h5>
            </div>
            <div class="flex flex-wrap space-x-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=525621735330&lang=es"
                target="_blank"
                class="bg-white hover:bg-xulada-violete hover:text-white text-xulada-violete rounded-full h-8 w-8 flex items-center justify-center"
              >
                <svg
                  class="fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Xulada-MX-122486529538660/"
                target="_blank"
                class="bg-white hover:bg-xulada-violete hover:text-white text-xulada-violete rounded-full h-8 w-8 flex items-center justify-center"
              >
                <svg
                  class="fill-current w-4 h-4"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/xulada.mx/"
                target="_blank"
                class="bg-white hover:bg-xulada-violete hover:text-white text-xulada-violete rounded-full h-8 w-8 flex items-center justify-center"
              >
                <svg
                  class="fill-current w-4 h-4"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
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
      },
      900: {
        visibleSlides: 2,
      },
      1100: {
        visibleSlides: 3,
      },
    },
  }),
};
</script>

<style scoped>
.exs--show-multiple-slides-and-gap .vueperslide {
  -webkit-transform: scale(0.85);
  transform: scale(0.85);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.exs--show-multiple-slides-and-gap .vueperslide.vueperslide--active {
  -webkit-transform: scale(0.95);
  transform: scale(0.95);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.exs--show-multiple-slides-and-gap .vueperslide {
  background-color: rgb(69 69 69 / 9%);
}

#prices .vueperslides__progress {
  background: rgba(0, 0, 0, 0.25);
  color: white;
}

#banner {
  background-image: URL("../assets/top_rectangle_with_gradient_square.png");
  background-size: cover;
}

#covid {
  /*background-image: URL("../assets/couch_background.jpg");*/
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  #banner {
    background-image: URL("../assets/violette_top_area.jpg");
    background-size: cover;
  }

  #covid {
    /*background-image: URL("../assets/couch_family_area.jpg");*/
    background-size: cover;
  }
}
</style>