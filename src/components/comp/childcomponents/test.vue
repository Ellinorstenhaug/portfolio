<template>

    <div id="hej">
        
    </div>
</template>

<script>
    const BookComponent = {
        template: `<div> Book Component </div>`
    }
    const FormComponent = {
        template: `<div> Form Component </div>`
    }
    const HeaderComponent = {
        template: `<div> Header Component </div>`
    }



    export default {
        data: function () {
            return {
                currentView: BookComponent
            }
        },
        methods: {
            cycle() {
                if (this.currentView === HeaderComponent) this.currentView = BookComponent
                else this.currentView = this.currentView === BookComponent ? FormComponent : HeaderComponent
            }
        }
    }
</script>

<style>

</style>