const User = require('./User');

const Tag = require('./Tag');

const Sleep = require('./Sleep');

// Sleep belongs to User
Sleep.belongsTo(User, {
    foreignKey: 'user_id'
});

// User will have many Sleeps
User.hasMany(Sleep, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Tag belongs to Sleep
Tag.belongsToMany(Sleep, {
    foreignKey: 'tag_id'
});

// Sleep will have many Tags
Sleep.hasMany(Tag, {
    foreignKey: 'tag_id'
});

module.exports = { User, Tag, Sleep};