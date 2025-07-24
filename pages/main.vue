<template>
    <div>
        <template v-if="isMobile">
            <div>모바일 페이지</div>
        </template>
        <template v-else>
            <Loading v-if="loading" />
            <Main v-else :dataset="dataSet" />
        </template>
    </div>
</template>

<script>
// import Loading from '../components/Loading.vue';

export default {
    data() {
        return {
            loading: true,
            dataSet: {
                data: '메인페이지!',
            },
        }
    },
    created() {
        // 글로벌 변수값 변경
        this.globalValue = '페이지밸류';
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
    methods: {

    }
}
</script>