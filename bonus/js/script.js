// CONSEGNA
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

var app = new Vue(
    {
        el: '#root',
        data: {
            randomList: []
        },
        methods: {
            generateList() {
               for(i = 0; i < 10; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const randomItem = response.data.response;
                        this.randomList.push(randomItem);
                    })
               }
            }
        },
        mounted() {
            this.generateList();
        }
    }
)