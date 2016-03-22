<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <body>

        <div id="app">

            <a v-link="{ path: '/foo' }">Foo Link</a>
            <a v-link="{ path: '/bar' }">Bar Link</a>
        

            <greeter></greeter>

            <router-view></router-view>

        </div>

        <script src="/js/main.js"></script>
    </body>
</html>
