# Pensando en VUE

## Data (Estado)

- Variable donde almacenar todos los paises (llamada a la API): countries
- Variable donde guardar el valor del filtro del input de búsqueda por país: nameCountryFilter
- Variable donde guardar el valor de la opción del select : regionCountryFilter

## Hooks

- Al crear o montar la App, guardar en 'countries' el resultado de la llamada a la API de paises. Ver como hacer [un fetch en Vue](https://vuejs.org/tutorial/#step-10) : NO ES NECESARIO USAR UN WATCH.

## Computed Properties

- Si no hay filtras seleccionados, devolver todos los countries
- Si el filtro del input tiene valor, usar el método de array filter para filtrar todos los paises por su nombre. ¡Ojo! Es un array de objetos!. BONUS: ¿te funciona para mayúsculas y minúsculas?
- Si el filtro del select tiene valor, usar el método de array filter para filtrar todos los paises por la región seleccionada. ¡Ojo! ¿Coinciden los valores de los <option> con la propiedad **region** de cada objeto?
- **BONUS**: Los dos filtros funcionan a la vez.

### Pasos

1. Primero simplemente carga todos los paises que vienen de la API. Deberás usar adecuadamente v-for en el HTML; que ya está preparado. Itera sobre la variable __countries__ para mostrar todos los paises que devuelve la API
2. Después haz que los filtros funcionen. En el v-for, cambia el array en el que iteras por una __computed property__  

## Requisitos extras

API de paises: https://restcountries.com/v3.1/all

