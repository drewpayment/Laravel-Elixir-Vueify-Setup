<template>
    <div>
        <h1>Hello, {{ name }}!</h1>

        <p>The above snippet is a great example of how Vue.js works to make our life easier.</p>

        <input type="text" v-model="name">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'new developer'
            };
        }
    };
</script>

<style>
    h1 {
        color: red;
    }
</style>