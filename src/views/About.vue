<template>
  <div id="desinfection" class="flex flex-col h-screen">
    <header class="">
      <Nav class="container mx-auto" />
    </header>
    <div id="content" class="flex-1 overflow-y-auto">
      <main class="text-xl">
        <div class="container mx-auto">
          <div id="sell-gallery" class="bg-gray-200 block sm:rounded-b-lg">
            <vueper-slides
              class="no-shadow"
              fixed-height="450px"
              :visible-slides="1"
              :autoplay="true"
            >
              <vueper-slide :image="gallery.bg1">
                <template v-slot:content>
                  <div class="hidden lg:block">
                    <div
                      class="w-7/12 text-white py-20 absolute top-0 left-0 z-10"
                    >
                      <h1
                        class="text-2xl uppercase text-center font-bold italic px-4 pb-4 leading-snug lg:leading-tight lg:text-4.5xl lg:text-left lg:pl-24 lg:tracking-wider"
                      >
                        Sanitización de tu auto
                        <span class="lg:text-3xl block">
                          a domicilio en CDMX</span
                        >
                      </h1>
                      <h2
                        class="hidden lg:block pl-24 pt-24 text-3xl text-left px-8 font-bold leading-none tracking-wide"
                      >
                        Viaja tranquilo en <br />
                        <span
                          class="uppercase font-normal text-2.5xl tracking-wider"
                          >tu coche libre de covid</span
                        >
                      </h2>
                    </div>
                    <img
                      src="@/assets/img/volvo_xc90.png"
                      class="w-7/12 float-right mr-16 mt-16 absolute top-0 right-0"
                      alt=""
                    />
                  </div>
                  <div
                    class="text-white flex lg:hidden flex-wrap pt-12 lg:pt-20 md:px-2 lg:px-6"
                  >
                    <div class="w-full lg:w-1/2">
                      <h1
                        class="text-2xl uppercase text-center font-bold italic px-4 pb-4 leading-snug lg:leading-tight lg:text-4xl lg:text-left lg:pl-16 lg:tracking-wide"
                      >
                        Sanitización de tu auto
                        <span class="lg:text-2xl block">
                          a domicilio en CDMX</span
                        >
                      </h1>
                      <h2
                        class="hidden lg:block pl-16 pt-24 text-3xl text-left px-8 font-bold leading-none"
                      >
                        Viaja tranquilo en <br />
                        <span
                          class="uppercase font-normal text-2xl tracking-wide"
                          >tu coche libre de covid</span
                        >
                      </h2>
                    </div>
                    <div class="w-full lg:w-1/2 flex justify-center mb-5">
                      <img
                        src="@/assets/img/volvo_xc90.png"
                        class="w-11/12 mx-auto"
                      />
                    </div>
                    <div class="w-full lg:hidden">
                      <h2
                        class="text-2xl text-center px-8 font-bold leading-none"
                      >
                        Viaja tranquilo en <br />
                        <span class="uppercase font-normal text-xl"
                          >tu coche libre de covid</span
                        >
                      </h2>
                    </div>
                  </div>
                </template>
              </vueper-slide>
              <vueper-slide :image="gallery.bg2">
                <template v-slot:content>
                  <div
                    class="text-white flex flex-wrap flex-row-reverse px-5 pt-12 lg:px-32"
                  >
                    <h1
                      class="text-2xl lg:text-4xl lg:tracking-wider lg:py-1 lg:leading-tight bg-xulada-violete-intese bg-opacity-75 pb-1 px-10 uppercase rounded-lg font-bold text-right italic"
                    >
                      Tu auto libre <br />de covid-19
                    </h1>
                  </div>
                </template>
              </vueper-slide>
              <vueper-slide>
                <template v-slot:content>
                  <div
                    class="text-white flex flex-wrap px-5 pt-12 lg:items-center lg:pt-6"
                  >
                    <div class="w-full lg:w-7/12 text-right lg:text-center">
                      <h3
                        class="tracking-wider text-2xl lg:text-5xl mb-3 lg:mb-6 uppercase text-xulada-blue-covid font-bold italic leading-tight lg:px-3"
                      >
                        Tu salud y la de tu familia está primero
                      </h3>
                      <p
                        class="text-xs lg:text-base pl-32 lg:pl-0 text-gray-700 italic"
                      >
                        Nuestro servicio de
                        <span class="uppercase">
                          sanitización y desinfección de tu coche</span
                        >
                        <br /><span
                          class="font-bold text-gray-800 tracking-wider"
                          >Para que te sientas seguro y cuides a los que más
                          quieres</span
                        >
                      </p>
                    </div>
                    <div class="w-full lg:w-5/12 flex justify-center mb-5">
                      <img
                        src="@/assets/img/family_couch_siloutte.png"
                        class="w-full m-auto"
                      />
                    </div>
                  </div>
                </template>
              </vueper-slide>
            </vueper-slides>
          </div>

          <div id="description" class="block pt-5 sm:pt-10 lg:pt-20 pb-10">
            <div class="flex flex-wrap sm:px-20 mb-8 lg:mb-0">
              <div
                class="w-full md:h-32 lg:h-40 md:w-1/2 md:border-r-3 border-xulada-violete"
              >
                <div
                  class="flex justify-center md:justify-start lg:justify-center"
                >
                  <h2
                    class="border-b-2 border-xulada-violete md:border-b-0 text-xl sm:text-3xl lg:text-4xl italic font-medium leading-5 lg:leading-7 text-center md:text-right text-xulada-violete pb-4"
                  >
                    <span class="font-semibold">Sanitización</span>
                    <br />
                    <span
                      class="text-base sm:text-xl text-gray-600 font-bold lg:text-2xl"
                      >en solo 30 minutos</span
                    >
                  </h2>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="flex justify-center">
                  <h2
                    class="text-xl sm:text-3xl lg:text-4xl italic leading-5 lg:leading-7 text-center md:text-left text-xulada-violete font-semibold pt-4 md:pt-0"
                  >
                    A domicilio
                    <br />
                    <span
                      class="text-base sm:text-xl text-gray-600 font-bold lg:text-2xl"
                      >sin costo adicional</span
                    >
                  </h2>
                </div>
              </div>
            </div>
            <div class="block md:hidden px-4 sm:px-12">
              <img
                alt="Xulada Services"
                src="@/assets/img/range_rover_48_hours.png"
                class="object-contain m-auto"
              />
            </div>
            <div class="hidden md:block px-4 lg:px-6">
              <img
                alt="Xulada Services"
                src="@/assets/img/range_rover_48_hours.png"
                class="object-contain m-auto"
              />
            </div>
          </div>

          <div
            id="process-gallery"
            class="bg-xulada-black px-3 pt-4 pb-1 lg:px-10 lg:pb-6 lg:rounded-lg lg:tracking-wider"
          >
            <h4
              class="text-white text-base lg:text-3xl font-bold uppercase pt-4 pb-6"
            >
              Nuestra sanitización
            </h4>
            <vueper-slides
              class="vueperslides--1 mb-4 lg:hidden"
              ref="vueperslides1"
              :touchable="false"
              fade="fade"
              :autoplay="false"
              :bullets="false"
              @slide="$refs.vueperslides2 &amp;&amp; $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
              fixed-height="400px"
            >
              <vueper-slide
                v-for="(slide, i) in slider.data"
                :key="i"
                :image="slide.image"
              >
              </vueper-slide>
            </vueper-slides>
            <vueper-slides
              class="no-shadow vueperslides--2 lg:hidden"
              ref="vueperslides2"
              @slide="$refs.vueperslides1 &amp;&amp; $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
              :visible-slides="slider.data.length"
              :bullets="false"
              :touchable="false"
              :gap="2.5"
              :arrows="false"
            >
              <vueper-slide
                class="border lg:border-2 rounded lg:rounded-lg h-20 lg:h-auto"
                v-for="(slide, i) in slider.data"
                :key="i"
                :image="slide.image"
                @click.native="$refs.vueperslides2 &amp;&amp; $refs.vueperslides2.goToSlide(i)"
              ></vueper-slide>
            </vueper-slides>
            <vueper-slides
              class="no-shadow vueperslides--2 hidden lg:block"
              ref="vueperslides2"
              @slide="$refs.vueperslides1 &amp;&amp; $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
              :visible-slides="3"
              :bullets="true"
              :touchable="false"
              :gap="2.5"
              :arrows="true"
              :arrows-outside="false"
              fixed-height="260px"
            >
              <vueper-slide
                class="border lg:border-2 rounded lg:rounded-lg h-20 lg:h-auto"
                v-for="(slide, i) in slider.data"
                :key="i"
                :image="slide.image"
                @click.native="$refs.vueperslides2 &amp;&amp; $refs.vueperslides2.goToSlide(i)"
              ></vueper-slide>
            </vueper-slides>
          </div>

          <div
            id="prices"
            class="bg-xulada-red-intense block pt-8 md:px-20 sm:rounded-lg"
          >
            <h4
              class="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase font-extrabold mb-8"
            >
              Nuestros precios
            </h4>
            <vueper-slides
              class="no-shadow ex--show-multiple-slides-and-gap"
              :breakpoints="breakpoints_prices"
              fixed-height="500px"
              :visible-slides="3"
              :bullets-outside="false"
              :bullets="false"
              :gap="3"
              :dragging-distance="20"
              :arrows="false"
              :init-slide="2"
            >
              <vueper-slide>
                <template v-slot:content>
                  <div class="w-full md:border-r-2 border-white">
                    <div class="text-center">
                      <div class="w-full flex justify-center">
                        <img
                          src="@/assets/img/sanitization_icon_prices.png"
                          alt
                        />
                      </div>
                      <h5 class="text-2xl text-xulada-black font-bold">
                        Una Sanitización
                      </h5>
                      <p
                        class="pt-4 line-through price font-bold text-xulada-black leading-6"
                      >
                        <span class="text-xl">$</span>
                        <span class="text-5xl">250</span>
                        <span class="uppercase text-xl">MXN</span>
                      </p>
                      <p class="price font-bold text-white leading-tight py-2">
                        <span class="text-2xl">$</span>
                        <span class="text-6xl sm:text-7xl md:text-8xl"
                          >200</span
                        >
                        <span class="uppercase text-2xl">MXN</span>
                      </p>
                      <a
                        href="https://wa.link/ny5n57"
                        target="_blank"
                        class="hover:bg-xulada-violete bg-xulada-black text-white py-1 px-3 rounded-lg inline-flex items-center"
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
                        <span>Agendar</span>
                      </a>
                    </div>
                  </div>
                </template>
              </vueper-slide>
              <vueper-slide>
                <template v-slot:content>
                  <div class="w-full">
                    <div class="text-center text-white">
                      <div
                        class="mx-10 sm:mx-2 px-2 py-6 bg-xulada-black rounded-lg"
                      >
                        <div class="w-full flex justify-center">
                          <img
                            src="@/assets/img/enxulada_full_prices.png"
                            alt
                          />
                        </div>
                        <h5 class="text-2xl font-bold uppercase">
                          Paquete tres
                        </h5>
                        <h5 class="text-2xl font-bold">Sanitizaciones/ Mes</h5>
                        <p
                          class="pt-4 line-through price font-bold text-xulada-red-intense leading-6"
                        >
                          <span class="text-xl">$</span>
                          <span class="text-5xl">750</span>
                          <span class="uppercase text-xl">MXN</span>
                        </p>
                        <p
                          class="pt-3 pb-4 price font-bold text-white leading-tight"
                        >
                          <span class="text-2xl">$</span>
                          <span class="text-6xl sm:text-7xl md:text-8xl"
                            >550</span
                          >
                          <span class="uppercase text-2xl">MXN</span>
                        </p>
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
                          <span>Comprar ahora</span>
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
                        <img
                          src="@/assets/img/sanitization_enxulada_icons.png"
                          alt
                        />
                      </div>
                      <h5
                        class="text-xulada-black text-2xl font-bold leading-8 pt-3"
                      >
                        Una Sanitización
                        <br />+ Limpieza interna
                      </h5>
                      <p
                        class="pt-4 line-through price font-bold text-xulada-black leading-6"
                      >
                        <span class="text-xl">$</span>
                        <span class="text-5xl">350</span>
                        <span class="uppercase text-xl">MXN</span>
                      </p>
                      <p class="price font-bold text-white leading-none py-2">
                        <span class="text-2xl">$</span>
                        <span class="text-6xl sm:text-7xl md:text-8xl"
                          >260</span
                        >
                        <span class="uppercase text-2xl">MXN</span>
                      </p>
                      <a
                        href="https://wa.link/6u539b"
                        target="_blank"
                        class="hover:bg-xulada-violete bg-xulada-black text-white py-1 px-3 rounded-lg inline-flex items-center"
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
                        <span>Agendar</span>
                      </a>
                    </div>
                  </div>
                </template>
              </vueper-slide>
            </vueper-slides>
          </div>
        </div>
      </main>
      <footer
        class="container mx-auto block sm:px-20 py-6 bg-xulada-black sm:rounded-lg"
      >
        <div class="flex flex-wrap items-center">
          <div class="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
            <img src="@/assets/img/xulada_biker_girl.png" class="h-32" />
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
            <div class="w-full sm:w-2/3">
              <div class="flex justify-center sm:mb-6 invisible sm:visible">
                <img
                  src="@/assets/img/logo_xulada_red_intense.png"
                  class="h-10 md:h-20"
                />
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
          <div class="w-full sm:pt-5 lg:w-1/3 lg:pt-0 flex justify-center">
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
      </footer>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import Nav from "../components/Nav.vue";

export default {
  name: "About",
  components: { Nav, VueperSlides, VueperSlide },
  data() {
    return {
      gallery: {
        bg1: require("@/assets/img/top_rectangle_with_gradient_square.png"),
        bg2: require("@/assets/img/slider02_pic.png"),
      },
      slider: {
        data: [
          {
            image: require("@/assets/img/desinfection/4.png"),
          },
          {
            image: require("@/assets/img/desinfection/2.png"),
          },
          {
            image: require("@/assets/img/desinfection/3.png"),
          },
          {
            image: require("@/assets/img/desinfection/1.png"),
          },
        ],
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
    };
  },
};
</script>

<style lang="css" scoped>
</style>
