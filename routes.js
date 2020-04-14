'use strict';

module.exports = function(app){
    var jsonku = require('./controller');
    
    app.route('/')
    .get(jsonku.index);

    app.route('/tampiluser')
    .get(jsonku.tampilsemuauser);

    app.route('/tampilsparepart')
    .get(jsonku.tampilsemuasparepart);

    app.route('/tampilmontir')
    .get(jsonku.tampilsemuamontir);

    
    app.route('/tampilservis')
    .get(jsonku.tampilsemuaservis);

    app.route('/tambahservis')
    .post(jsonku.tambahservis);

    app.route('/tambahuser')
    .post(jsonku.tambahuser);

    app.route('/tambahmontir')
    .post(jsonku.tambahmontir);

    app.route('/tambahsparepart')
    .post(jsonku.tambahsparepart);
   }
