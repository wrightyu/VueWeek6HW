import{_ as c,o as s,c as a,a as u,d as r,t as i,F as n}from"./index-4e840910.js";const{VITE_APP_URL:d,VITE_APP_PATH:p}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"wrightyu",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},l={data(){return{product:{}}},methods:{getProduct(){const{id:o}=this.$route.params;this.$http.get(`${d}/v2/api/${p}/product/${o}`).then(t=>{this.product=t.data.product}).catch(t=>{alert(t)})}},mounted(){this.getProduct()}},_=["src","alt"];function h(o,t,P,m,e,g){return s(),a(n,null,[u(" 這是單一產品 "),r("h2",null,i(e.product.title),1),r("img",{src:e.product.imageUrl,alt:e.product.title,class:"img-fluid"},null,8,_)],64)}const E=c(l,[["render",h]]);export{E as default};