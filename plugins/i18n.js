import Vue from "vue";
import VueI18n from "vue-i18n";

// 뷰에게 i18n을 사용하겠다고 명시
Vue.use(VueI18n);

export default ({ app }) => {
  // Set the i18n instance on app
  // This way we can use it globally in our components through this.$i18n
    app.i18n = new VueI18n({
        // 기본 언어
        locale: "ko",

        // 기본 언어 표시에 문제가 있을 경우, 대체할 언어
        fallbackLocale: "en",

        // Associate each locale to a content file
        messages: {
            ko: require("~/assets/locales/ko.json"),
            en: require("~/assets/locales/en.json"),
            jp: require("~/assets/locales/jp.json"),
            cn: require("~/assets/locales/cn.json"),
        }
    });
};
