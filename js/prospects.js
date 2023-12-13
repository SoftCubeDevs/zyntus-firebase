// Inicializar una instancia de Vue
new Vue({
    el: '#app', // Seleccionar el elemento con id 'app'
    data: {
        prospects: []
    }, 
    created(){
        this.getProspects()
    },
    methods: {
        async getProspects(){
            // Obtiene una referencia a la colección "usuarios"
            const prospectsRef = db.collection('Prospects');

            // Obtiene los documentos de la colección
            const querySnapshot = await prospectsRef.get()
                
            // Itera sobre los documentos
            querySnapshot.forEach((doc) => {
                // Accede a los datos de cada documento
                const data = doc.data();
                this.prospects.push({...data, ...{id: doc.id}})
            });
            
        }
    }
});