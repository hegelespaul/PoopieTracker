const { connect, sync } = require('./models/sequelize');

const User = require('./models/user');
const Baby = require('./models/baby');
const Poop = require('./models/poop');

exports.initDatabase = async function () {

    User.hasMany(Baby);
    Baby.belongsTo(User);

    Baby.hasMany(Poop);
    Poop.belongsTo(Baby);

    await connect();
    await sync(); // <---Peligrosa
};