// import config from '../../Config'
// import Swal from "sweetalert2";
// import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

import Vue from 'vue'
Vue.mixin({
    components: {
        // ScaleLoader,
        // VueMarqueeSlider
    },
    data() {
        return {
            isMobile: false,
            globalValue: '글로벌밸류',
            factory: {
                tempList: [
                    { name: 'name', age: 10 }
                ]
            }
        };
    },
    computed: {

    },
    watch: {
        // '$route.fullPath': 'clickTest'
        // 'test': 'clickTest' // 감지할 변수에 메서드 연결
    },
    created() {

    },
    beforeMount() {
        this.isMobile = window.innerWidth <= 1024 ? true : false;
    },
    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    },
    methods:{
        onResize() {
            this.isMobile = window.innerWidth <= 1024 ? true : false;
        },
        clickTest() {
            alert('utils 함수');
        },
        setLanguage(language) {
            this.$i18n.locale = language;
        },

        // static
        getImageUrl(name) {
            return `/images/${name}`;
        },

        getImagePath(path){
            if (!path) return '';
            return require('~/assets/images/' + path)
        },
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
})