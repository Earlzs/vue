<template>
<div class='split' ref='split'>
</div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: '10'
        },
        background: {
            type: String,
            default: '#f3f5f7'
        },
        border: {
            type: String,
            default: 'transparent'
        }
    },

    mounted() {
        this.$refs.split.style.background = this.background
        this.$refs.split.style.height = `${this.height}px`
        this.$refs.split.style.borderColor = this.border
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.split {
    width: 100%;
    border-width: 1px;
    border: none;
    border-top-width: 1px;
    border-top-style: solid;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
</style>