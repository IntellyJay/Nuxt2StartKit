<template>
    <div>
        <span>{{ dataset.data }}</span>
        <button class="btn" @click="$router.push({path: '/sub'})">서브 페이지로 이동</button>
    </div>
</template>


<script>
export default {
    props: {
        dataset: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>