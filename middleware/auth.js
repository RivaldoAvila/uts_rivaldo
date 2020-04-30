var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require ('../res');
var jwt = require('jsonwebtoken');
var config = require ('../config/secret');
var ip  = require('ip');

//controller utk register
exports.registrasi = function(req,res) {
    var post = {
        id_user: req.body.id_user,
        nama_user: req.body.nama_user,
        email: req.body.email,
        password: md5(req.body.password),
        level: req.body.level
    }

    var query = "SELECT email FROM ?? WHERE ??=?";
    var table = ["user", "email", post.email];

    query = mysql.format(query,table);

    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }
        else{
            if(rows.length == 0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query= mysql.format(query,table);
                connection.query(query, post, function(error,rows){
                    if(error){
                        console.log(error);
                    }
                    else{
                        response.ok("Berhasil Menambahkan Data User Baru", res);
                    }
                });
            }
                else{
                    response.ok("Email Sudah Terdaftar",res);
                }

            }
        })
};

// controller untuk login
exports.login = function(req,res){
    var post = {
        password: req.body.password,
        email: req.body.email
    }

    var query = "SELECT * FROM ??  WHERE ??=? AND ??=?";
    var table = ["user", "password", md5(post.password), "email", post.email];

    query = mysql.format(query,table);
    connection.query(query, function(error, rows){
        if(error){
            console.log(error);
        }else {
            if(rows.length == 1){
                var token = jwt.sign({rows}, config.secret,{
                    expiresIn: 1440
                });

                Id=rows[0].Id_user; 

                var data = {
                    Id: Id,
                    access_token: token,
                    ip_address: ip.address()
                }

                var query = "INSERT INTO ?? SET ?";
                var table = ["akses_token"];

                query = mysql.format(query, table);
                connection.query(query, data, function(error, rows){
                    if(error){
                        console.log(error);
                    }else {
                        res.json({
                            success: true,
                            message:'Token JWT tergenerate!',
                            token:token,
                            currUser: data.Id
                        });
                    }
                });
            }
            else {
                res.json({"Error": true, "Message":"Email atau password salah!"});
            }
        }
    });
}

exports.halamanrahasia = function(req,res){
    response.ok("Halaman ini hanya untuk user dengan level = ADMIN!", res);
}