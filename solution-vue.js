// Suerte! :)

Vue.createApp({
    data() {
        return {
            countries: [],
            countryFilter: '',
            regionFilter: ''
        }
    },
    created() {
        this.countries = this.fetchData();
    },
    methods: {
        async fetchData() {
            const response = await fetch('https://restcountries.com/v2/all');
            this.countries = await response.json();
        }
    },
    computed: {
        getFilteredCountries() {

            let countries = this.countries;

            if (this.countryFilter) {
                // indistinto a mayúsculas y minúsculas
                const reg = new RegExp(`${this.countryFilter}`, 'i')
                countries = this.countries.filter(x => x.name.match(reg))
            }

            if (this.regionFilter && this.regionFilter != 'all') {
                console.log('filter region:' + this.regionFilter)
                const reg = new RegExp(`${this.regionFilter}`, 'i')
                countries = countries.filter(x => x.region.match(reg))
            }

            return countries;
        }
    }

}).mount('#app')