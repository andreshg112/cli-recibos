app.service("recibosService", function($http) {
    var uri = "http://localhost/ar-recibos/recibos";
    this.get = function(id) {
        var req = $http.get(uri + '/' + id);
        return req;
    };
    this.getAll = function() {
        var req = $http.get(uri);
        return req;
    };
    this.post = function(registro) {
        console.log("post");
        /* Para peticiones desde diferente dominio
        var req = $http({
            method: 'POST',
            url: uri,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: registro
        });*/
        var req = $http.post(uri, registro);
        return req;
    };
    this.put = function(id, registro) {
        console.log("put");
        /*var req = $http({
            method: 'PUT',
            url: uri + "/" + id,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            data: registro
        });*/
        var req = $http.put(uri + "/" + id, registro);
        return req;
    };
    this.delete = function(id) {
        console.log("delete");
        /*var req = $http({
            method: 'DELETE',
            url: uri + "/" + id,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            }
        });*/
        var req = $http.delete(uri + '/' + id);
        return req;
    };
});