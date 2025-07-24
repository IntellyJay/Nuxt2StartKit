<template>
    <div>

        <Nuxt />

    </div>
</template>

<script>
export default {
    data() {
        return {
            defaultValues: {
                pageName: ''
            }
        }
    },
    watch: {
        '$route.fullPath': function() {
            this.defaultValues.pageName = this.$route.fullPath;
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>