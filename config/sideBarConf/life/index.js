const genSidebar = require('../../../utils/genSidebar.js');
const filenames = require('../../filenames.json');
const children = filenames.life;

module.exports = [
    genSidebar('生活', children, false),
];