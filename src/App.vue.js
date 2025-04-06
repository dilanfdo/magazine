import HelloWorld from './components/HelloWorld.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof HelloWorld, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(HelloWorld, new HelloWorld({
    msg: "",
}));
const __VLS_1 = __VLS_0({
    msg: "",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
var __VLS_2;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            HelloWorld: HelloWorld,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
