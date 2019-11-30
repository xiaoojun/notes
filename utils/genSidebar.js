
function genSidebar(title, children = [''], collapsable=true, sidebarDepth = 1) {
    return {
        title, 
        children,
        collapsable, 
        sidebarDepth
    }
}
 
module.exports = genSidebar;