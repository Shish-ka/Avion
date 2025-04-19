const app = Vue.createApp({
    data() {
        return {
           nav: ['plant pots', 'ceramics', 'tables', 'chairs', 'crockery', 'tableware', 'cutlery'],



           sd: [
               {
                   icon: '5.svg',
                   title: 'next day as standard',
                   text: 'order before 3pm and get your order the next day as standard'
               },

               {
                   icon: '6.svg',
                   title: 'made by true artisans',
                   text: 'handmade crafted goods made with real passion and craftmanship'
               },

               {
                   icon: '7.svg',
                   title: 'unbeatable prices',
                   text: 'for our materials and quality you won’t find better prices anywhere'
               },

               {
                   icon: '8.svg',
                   title: 'recycled packaging',
                   text: 'we use 100% recycled to ensure our footprint is more manageable'
               },
            ],

            td: [
                {
                    img: '2.jpg',
                    title: 'the Dandy chair',
                    price: '£250'
                },

                {
                    img: '3.jpg',
                    title: 'Rustic Vase Set',
                    price: '£155'
                },

                {
                    img: '4.jpg',
                    title: 'Rustic Vase Set',
                    price: '£125'
                },

                {
                    img: '5.jpg',
                    title: 'the Lucy Lamp',
                    price: '£399'
                },
            ],



            men: ['menu', 'new arrivals', 'best sellers', 'recently viewed', 'popular this week', 'all products'],

            cat: ['categories', 'crockery', 'furniture', 'homeware', 'plant pots', 'chairs', 'crockery'],

            com: ['our company', 'about us', 'vacancies', 'contact us', 'privacy', 'returns policy'],

            ico: ['10.svg', '11.svg', '12.svg', '13.svg', '14.svg', '15.svg']
        }
    }
}).mount('#app')