<template>
    <div>
        <ul>
            <li>{{ $route.path }}</li>
            <li>{{ fullPath }}</li>
            <li>{{ $route.name }}</li>
            <li>{{ $route.hash }}</li>
            <li>{{ $route.query }}</li>
            <li>{{ $route.params }}</li>
            <li>{{ clientDomain }}</li>
        </ul>
        <button @click="$router.go(-1)">뒤로가기</button>
        <button @click="$router.push($nuxt.context.from.path)">뒤로가기</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clientDomain: ''
        }
    },
    mounted() {
        if (process.client) {
            this.clientDomain = window.location.host;
        }
    },
    computed: {
        fullPath() {
            return this.$route.fullPath;
        },
    },
    methods: {
        back() {
            try {
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                console.log('back error', err);
                this.$router.push('/');
            }
        }
    }
}
</script>