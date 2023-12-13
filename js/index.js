// Inicializar una instancia de Vue
new Vue({
    el: '#app', // Seleccionar el elemento con id 'app'
    data: {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            description: '',
            wordsNumber: '',
            urgentlyDate: ''
        },
        errors: {
            firstName: null,
            lastName: null,
            email: null,
            number: null,
            description: null,
            wordsNumber: null,
            urgentlyDate: null
        },
        thanks: false
    }, 
    created(){
    },
    methods: {
        validateInput(key, msg){
            const input = this.form[key]

            if(input === ''){
                this.errors[key] = msg
                return false
            }

            this.errors[key] = null
            return true
            
        },
        async createProspect(){
            try {

                if(
                    !this.validateInput('firstName', 'Type a first name') |
                    !this.validateInput('lastName', 'Type a last name') |
                    !this.validateInput('email', 'Type an email') |
                    //!this.validateInput('number', 'Type a phone number') |
                    !this.validateInput('description', 'Type a description') | 
                    !this.validateInput('wordsNumber', 'Type a words number') 
                    //!this.validateInput('urgentlyDate', 'Select a urgently date') 
                ){
                    return
                }

                const prospects = db.collection('Prospects');

                const res = await prospects.add({
                    date_creation: new Date(),
                    description: this.form.description,
                    email: this.form.email,
                    first_name: this.form.firstName,
                    last_name: this.form.lastName,
                    number: this.form.number,
                    status: 1,
                    urgently_date: new Date(this.form.urgentlyDate),
                    words_number: this.form.wordsNumber
                })

                //alert(res.id)

                if(res.id){
                    return this.thanks = true
                }

            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        recentlyDate(){
            return new Date().toISOString().substring(0, 10)
        }
    }
});