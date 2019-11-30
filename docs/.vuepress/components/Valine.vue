<template>
    <div id="vcomments"></div>
</template>

<script>
 
export default {
    mounted() {
        this.renderValine()
    },
    methods: {
        renderValine() {
            if (typeof window !== 'undefined') {
                this.window = window;
                window.AV = require('leancloud-storage');
            }
            const Valine = require('valine');
            const secretKeyConf = require('../../../config/secretConf.js')
            new Valine({
                el: '#vcomments' ,
                appId: secretKeyConf.appId,
                appKey: secretKeyConf.appKey,
                notify:false, 
                verify:false, 
                avatar:'monsterid', 
                placeholder: '欢迎留言' 
            });
        }
    }
}
</script>