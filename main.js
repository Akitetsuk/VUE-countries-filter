Vue.createApp({
    data() {
        return {
            isDarkTheme: true,
            countries: [],
            selectFilter: "",
            inputFilter: "",
            modalCountry: ""
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        // Otra manera de gestionar la asincronía. en 'data' tendremos los datos ya 'praseados', es decir, un array de objetos.
        fetchData() {
            fetch("https://restcountries.com/v2/all")
                .then(response => response.json())
                .then(data => this.countries = data);
        },
        setModalCountry(code) {
            console.log(code);
            this.modalCountry = this.countries.find(c => c.alpha3Code == code);
            console.log(this.modalCountry);
        },
        hideCountryModal() {
            this.modalCountry = "";
        }
    },
    computed: {
        filteredCountries() {


            const inputRegex = new RegExp(this.inputFilter, 'i');
            const selectRegex = new RegExp(this.selectFilter, 'i');

            let filteredCountries = this.countries.filter(country => {
                if (country.name.match(inputRegex) && country.region.match(selectRegex)) {
                    return true;
                }

                return false;
            });

            // Ordenar por número de habitantes de forma descendiente
            // BONUS: Este sort se puede hacer en una línea
            return filteredCountries.sort((c1, c2) => {
                // si da un número negativo, estamos diciendo que c2 es mayor que c1
                // si da un número positivo, estamos diciendo que c2 es más pequeño que c1
                return c2.population - c1.population;
            });
        },
        // desde una computed property puedes acceder a otra computed property. return this.filteredCountries.every(...)
        alertLowPopulation() {
            // Si al menos hay un país mostrándose en estos momentos Y todos los paises tienen menos de 10 millones de ha
            return this.filteredCountries.length != 0 && this.filteredCountries.every(country => country.population < 10000000);
        }
    },
}).mount("#app");