const genSidebar = require('../../../utils/genSidebar.js');
const filenames = require('../../filenames.json');
const children = filenames.technology;

module.exports = [
    genSidebar('开发知识', children, false, 1),
];
