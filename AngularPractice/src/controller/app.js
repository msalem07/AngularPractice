var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider) {
    
    let helloState = {
        name: 'hello',          //for a route to work ui-sref needs to be a value defined and added
        //url: '/hello',
        templateUrl: 'template/hello.html'
    }

    let aboutState = {
        name: 'about',
        //url: '/about',
        templateUrl: 'template/about.html'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
})