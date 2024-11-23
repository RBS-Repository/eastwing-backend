const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant('user')
    .readAny('product')
    .readOwn('order');

  ac.grant('admin')
    .extend('user')
    .createAny('product')
    .updateAny('product')
    .deleteAny('product')
    .readAny('order');

  return ac;
})();
