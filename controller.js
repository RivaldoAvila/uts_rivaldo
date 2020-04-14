'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku Berjalan",res)
};

//Menampilkan data user
exports.tampilsemuauser = function(req,res){
    connection.query('SELECT * FROM user', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
//Menampilkan data sparepart
exports.tampilsemuasparepart = function(req,res){
    connection.query('SELECT * FROM sparepart', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
//Menampilkan data montir
exports.tampilsemuamontir = function(req,res){
    connection.query('SELECT * FROM montir', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
//Menampilkan data servis
exports.tampilsemuaservis = function(req,res){
    connection.query('SELECT * FROM servis', function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
//menambahkan data servis
exports.tambahservis = function(req,res){
    var id_servis = req.body.id_servis;
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('INSERT INTO servis (id_servis,tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart) VALUES(?,?,?,?,?,?)',
    [id_servis,tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil menambahkan data",res)
        }
    });
    
};
