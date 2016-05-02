angular
    .module("app", ["ui.router","ng.deviceDetector"])
    .config(config)
    .run(run);

config.$inject = ["$stateProvider","$urlRouterProvider"];

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state("/home", {
            templateUrl: "app-content/views/home.view.html",
            controller: "HomeController",
            controllerAs: "vm",
            url: "/home"
        })
        .state("/about", {
            templateUrl: "app-content/views/about.view.html",
            controller: "AboutController",
            controllerAs: "vm",
            url: "/about",
            children: [
                {
                    templateUrl: "app-content/views/rachel.view.html",
                    url: "/about/rachel",
                    name: "rachel"
                }
            ]
        })
        .state("rachel", {
            templateUrl: "app-content/views/rachel.view.html",
            url: "/about/rachel"

        })
        .state("/contact", {
            templateUrl: "app-content/views/contact.view.html",
            controller: "ContactController",
            controllerAs: "vm",
            url: "/contact"
        })
}

run.$inject = ["$rootScope", "$location", "$http"];

function run($rootScope) {
    $rootScope.$on("$locationChangeSuccess", function (event, location) {
        var x = location.lastIndexOf("/");
        $rootScope.activeTab = x > 0 ? location.substring(x) : "";
    });
}
