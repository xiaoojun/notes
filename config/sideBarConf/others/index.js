const genSidebar = require('../../../utils/genSidebar.js');
const filenames = require('../../filenames.json');
const children = filenames.others;

module.exports = [
    genSidebar('其他', children, false),
];