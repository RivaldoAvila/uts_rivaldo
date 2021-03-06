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
//menambahkan data user
exports.tambahuser = function(req,res){
    var id_user = req.body.id_user;
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var level = req.body.level;


    connection.query('INSERT INTO user (id_user,nama_user,email,password,role,level) VALUES(?,?,?,?,?,?)',
    [id_user,nama_user,email,password,role,level],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil menambahkan data",res)
        }
    });
    
};

//menambahkan data montir
exports.tambahmontir = function(req,res){
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;



    connection.query('INSERT INTO montir (id_montir,nama_montir,harga_perjam) VALUES(?,?,?)',
    [id_montir,nama_montir,harga_perjam],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil menambahkan data",res)
        }
    });
    
};

//menambahkan data sparepart
exports.tambahsparepart = function(req,res){
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;



    connection.query('INSERT INTO sparepart (id_sparepart,nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?,?)',
    [id_sparepart,nama_sparepart,harga_sparepart,satuan],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil menambahkan data",res)
        }
    });
    
};

//menambahkan data level
exports.tambahlevel = function(req,res){
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;



    connection.query('INSERT INTO level (id_level,nama_level) VALUES(?,?)',
    [id_level,nama_level],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil menambahkan data",res)
        }
    });
    
};

//mengubah data berdasarkan id
exports.ubahmontir = function(req,res){
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?',[nama_montir,harga_perjam,id_montir],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil ubah data", res)
        }
    });
    
};

//mengubah data berdasarkan id
exports.ubahsparepart = function(req,res){
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('UPDATE sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?',[nama_sparepart,harga_sparepart,satuan,id_sparepart],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil ubah data", res)
        }
    });
    
};

//mengubah data berdasarkan id
exports.ubahuser = function(req,res){
    var id_user = req.body.id_user;
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role
    var level = req.body.level;

    connection.query('UPDATE user SET nama_user=?, email=?, password=?, role=?, level=? WHERE id_user=?',[nama_user,email,password,role,level,id_user],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil ubah data", res)
        }
    });
    
};

//mengubah data berdasarkan id
exports.ubahlevel = function(req,res){
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;

    connection.query('UPDATE level SET nama_level=? WHERE id_level=?',[nama_level,id_level],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil ubah data", res)
        }
    });
    
};

//mengubah data servis
exports.ubahservis = function(req,res){
    var id_servis = req.body.id_servis;
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('UPDATE servis SET tgl_servis=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=? WHERE id_servis=?',[tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart,id_servis],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil ubah data", res)
        }
    });
    
};

//menghapus data berdasarkan id
exports.hapuslevel = function(req,res){
    var id = req.body.id_level;
    connection.query('DELETE FROM level WHERE id_level=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Hapus data", res)
        }
    });
};

//menghapus data berdasarkan id
exports.hapusmontir = function(req,res){
    var id = req.body.id_montir;
    connection.query('DELETE FROM montir WHERE id_montir=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Hapus data", res)
        }
    });
};

//menghapus data berdasarkan id
exports.hapusservis = function(req,res){
    var id = req.body.id_servis;
    connection.query('DELETE FROM servis WHERE id_servis=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Hapus data", res)
        }
    });
};


//menghapus data berdasarkan id
exports.hapussparepart = function(req,res){
    var id = req.body.id_sparepart;
    connection.query('DELETE FROM sparepart WHERE id_sparepart=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Hapus data", res)
        }
    });
};

//menghapus data berdasarkan id
exports.hapususer = function(req,res){
    var id = req.body.id_user;
    connection.query('DELETE FROM user WHERE id_user=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil Hapus data", res)
        }
    });
};

//menampilkan semua data tabel montir berdasarkan id
exports.tampilsemuaberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM montir WHERE id_montir = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};

//menampilkan semua data tabel sparepart berdasarkan id
exports.tampilsemuaberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM sparepart WHERE id_sparepart = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res)
        }
    });
};