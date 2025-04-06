import { ref, onMounted } from "vue";
import { PageFlip } from "page-flip";
export default (await import('vue')).defineComponent({
    setup() {
        const flipbook = ref(null);
        let flipInstance = null;
        const pages = [
            "/images/01.jpg",
            "/images/02.jpg",
            "/images/03.jpg",
            "/images/04.jpg",
            "/images/05.jpg",
            "/images/06.jpg",
            "/images/07.jpg",
            "/images/08.jpg",
            "/images/09.jpg",
            "/images/10.jpg",
        ];
        onMounted(() => {
            flipInstance = new PageFlip(flipbook.value, {
                width: 504, // Half screen for two-page mode
                height: 680, // Adjust height slightly smaller than full
                maxShadowOpacity: 0.5,
                mobileScrollSupport: true,
                showCover: true,
                useMouseEvents: true,
                autoSize: true,
                startPage: 0
                // mode: 'double',
            });
            flipInstance.loadFromImages(pages);
        });
        return {
            flipbook,
            flipLeft: () => flipInstance.flipPrev(),
            flipRight: () => flipInstance.flipNext(),
            canFlipLeft: () => flipInstance?.canGoBack(),
            canFlipRight: () => flipInstance?.canGoForward(),
        };
    },
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flipbook-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: "flipbook",
    ...{ class: "flipbook" },
});
/** @type {typeof __VLS_ctx.flipbook} */ ;
/** @type {__VLS_StyleScopedClasses['flipbook-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['flipbook']} */ ;
var __VLS_dollars;
let __VLS_self;
