(function(angular, Spinner) {

  angular.module('ngSpin', []).directive('ngSpin', function() {

    function link(scope, element, attrs){
      //Default settings for spinner
      var spinnerOpts = scope.ngSpinOpts || {
        lines: 9, // The number of lines to draw
        length: 4, // The length of each line
        width: 4, // The line thickness
        radius: 11, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#000', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: true, // Whether to render a shadow
        hwaccel: true, // Whether to use hardware acceleration
        className: 'ng-spin', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
      };

      var spinner = new Spinner(spinnerOpts);

      function startSpinner(){
        spinner.spin();
        var el = element.get()[0];
        el.appendChild(spinner.el);
      }

      function stopSpinner(){
        spinner.stop();
      }

      scope.$watch("spinning", function(value){
        if(value) {
          startSpinner();
        } else {
          stopSpinner();
        }
      });
      element.on('$destroy', function() {
        stopSpinner();
      });
      element.addClass('ng-spin');

    }

    return {
      restrict: 'A',
      scope: {
        spinning: "=spinning",
        ngSpinOpts: "=ngSpinOpts"
      },
      link: link
    }
  });
})(angular, Spinner);
