var app = angular.module('exampleApp', ['schemaForm']);


app.controller('exampleCtrl', function($scope) {

    $scope.getDefinitions = function(_ref) {
        console.log("here");
        return {
            schema: {
                "type": "object",
                "title": "Complex UI test",
                "properties": {
                    "delete": {
                        "type": "boolean"
                    },
                    "insert": {
                        "type": "boolean"
                    }
                }
            },
            form: ['*']
        };
    };

    $scope.model = {};
    $scope.form = [
        "simpleField",
        {
            "key": "complexField",
            "title": "Complex Field",
            "type": "complex-ui",
            "options": {
                "definitionsCallback": "getDefinitions"
            },
        }
    ];
    $scope.schema =     {
        "type": "object",
        "title": "Complex test",
        "properties": {
            "complexField": {
                "type": "object"
            },
            "simpleField": {
                "type": "string"
            }
        }
    }


});