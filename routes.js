'use strict';

module.exports = function(app){
    var jsonku = require('./controller');
    
    app.route('/')
    .get(jsonku.index);

    app.route('/tampiluser')
    .get(jsonku.tampilsemuauser);

    app.route('/tampilsparepart')
    .get(jsonku.tampilsemuasparepart);

   }
