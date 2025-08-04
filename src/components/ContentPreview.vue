<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme.ts"
import HeaderContent from "@/components/HeaderContent.vue"
import TextContent from "@/components/TextContent.vue"

const store = useThemeStore()
const { db } = storeToRefs(store)
</script>

<template>
  <div id="content">
    <header>
      <HeaderContent :level=1>Explorando HTML y CSS: De etiquetas a constelaciones de estilo</HeaderContent>
      <TextContent>Bienvenido a una travesía donde el diseño web cobra vida con cada etiqueta. Ponte el cinturón, porque estamos a punto de despegar.</TextContent>
    </header>
    <main>
      <section>
        <HeaderContent :level=2>¿Qué es HTML y por qué no debes temerle?</HeaderContent>
        <TextContent><strong>HTML</strong> (HyperText Markup Language) es la estructura ósea de cualquier página web. Imagina que estás creando el esqueleto de un robot: cada etiqueta define una parte del cuerpo y su función. Para aprender los fundamentos de forma práctica, puedes visitar <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener">W3Schools HTML</a> —una base de datos interactiva para aspirantes galácticos.</TextContent>
      </section>
      <section>
        <HeaderContent :level=2>CSS: El arte de vestir tu sitio web con estilo</HeaderContent>
        <TextContent>Si <em>HTML es el esqueleto</em>, <strong>CSS</strong> (Cascading Style Sheets) es el guardarropa. Permite aplicar colores, formas, tamaños, sombras y transiciones. Desde un sombrero flotante hasta un fondo animado, todo es posible con unas líneas bien diseñadas de CSS. Y si quieres ir más allá del planeta Tierra, *explora Flexbox y Grid como tecnologías interplanetarias en* <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener">Flexbox Froggy</a> —un juego que enseña jugando.</TextContent>
      </section>
      <section>
        <HeaderContent :level=2>Cómo HTML y CSS trabajan en equipo como superhéroes gemelos</HeaderContent>
        <TextContent>Cuando <strong>HTML define la estructura</strong>, <em>CSS la decora</em>. Es como escribir un guion (HTML) y tener un director de arte (CSS) que da vida a los personajes, no solo es elegante, también es esencial para crear sitios accesibles y profesionales.</TextContent>
      </section>
    </main>
    <footer>
      <hr />
      <HeaderContent :level=2>Conclusión: El universo web te espera</HeaderContent>
      <section>
        <HeaderContent :level=3>¿Por dónde comenzar?</HeaderContent>
        <TextContent>Empieza por dominar las etiquetas básicas: <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>. Luego, juega con colores y tipografías en CSS. <em>Recuerda:</em> cada paso es una chispa en tu constelación de aprendizaje.</TextContent>
      </section>
      <section>
        <HeaderContent :level=3>Errores comunes de cadetes principiantes</HeaderContent>
        <TextContent>No cerrar etiquetas, olvidar puntos y comas en CSS, y usar clases sin sentido. Corrige estos fallos y tu cohete despegará <strong>sin turbulencias</strong>.</TextContent>
      </section>
      <section>
        <HeaderContent :level=3>Tu próxima misión</HeaderContent>
        <TextContent>Crea tu primera página que hable sobre tu planeta favorito. Usa <strong>HTML</strong> para estructurar y <strong>CSS</strong> para darle atmósfera visual. *No subestimes el poder de un buen margen*, ni el impacto de una tipografía que refleje tu estilo intergaláctico.</TextContent>
      </section>
    </footer>
  </div>
</template>

<style scoped>
#content {
  background-color: v-bind("db.back");
}
</style>
