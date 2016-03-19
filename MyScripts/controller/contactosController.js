app.controller('contactosController', function ($scope, recibosService) {
    //VistaModelo
    $scope.recibo = {}; //Objeto Actual
    $scope.recibos = []; //Listado de Objetos
    $scope.editMode = false; // Modo de Edición
    //Cargar los datos
    loadRecords();
    //Function to Reset Scope variables
    function initialize() {
        $scope.recibo = {};
    }

    function loadRecords() {
        var promiseGet = recibosService.getAll();
        promiseGet.then(function (pl) {
            $scope.recibos = pl.data.result;
        },
                function (errorPl) {
                    console.log('failure loading Contactos', errorPl);
                });
    }
    //Model popup events
    $scope.showadd = function () {
        initialize();
        $scope.editMode = false;
        $('#regModal').modal('show');
    };
    $scope.cancel = function () {
        console.log($scope.editMode);
        if (!$scope.editMode) {
            initialize();
        }
        $('#regModal').modal('hide');
    };
    $scope.get = function () {
        $scope.recibo = this.recibo;
        $('#viewModal').modal('show');
    };
    $scope.valorEnLetras = function() {
        return valorEnLetras($scope.recibo.valor);
    };
    $scope.showconfirm = function () {
        $scope.Product = this.product;
        $('#confirmModal').modal('show');
    };
    $scope.edit = function (recibo) {
        $scope.recibo = recibo;
        $scope.editMode = true;
        $('#regModal').modal('show');
    };
    //Function to Submit the form
    $scope.add = function () {
        var promisePost = recibosService.post($scope.recibo);
        promisePost.then(function (d) {
            loadRecords();
        }, function (err) {
            alert("Some Error Occured " + JSON.stringify(err));
        });
    };
    //Function to Cancel Form
    $scope.cancelForm = function () {
        initialize();
    };
    //Functin Para Actualizar
    $scope.update = function () {
        var Contacto = {};
        Contacto.id = $scope.recibo.id;
        Contacto.telefono = $scope.recibo.telefono;
        Contacto.nombre = $scope.recibo.nombre;
        var promise = recibosService.put(Contacto.id, Contacto);
        promise.then(function (d) {
            loadRecords();
            alert("Guardó los Datos");
        }, function (err) {
            alert("Some Error Occured " + JSON.stringify(err));
        });
    };
    //Confirmar Para Eliminar
    $scope.showconfirm = function () {
        $scope.Contacto = this.recibo;
        if (confirm("Desea Eliminar al Contacto:" + $scope.Contacto.nombre)) {
            var promise = recibosService.delete($scope.Contacto.id);
            promise.then(function (pl) {
                if (pl.data.result) {
                    alert("Contacto eliminado");
                    loadRecords();
                } else {
                    alert("Error eliminando en el servidor.")
                }
            },
                    function (errorPl) {
                        console.log('Error: ', errorPl);
                    });
        }
    };
});

