angular.module("app").factory("ConfigService", [
  function () {
    var service = {};

    service.apiBase =
      "https://quiz-api-ma-env.eba-3f3kyzft.eu-west-2.elasticbeanstalk.com/";

    return service;
  },
]);
