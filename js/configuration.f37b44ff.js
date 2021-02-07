(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["configuration"],{"225e":function(e,i,t){"use strict";t("7ef3")},"7ef3":function(e,i,t){},"829a":function(e,i,t){"use strict";t.r(i);var n=t("7a23"),l={class:"configuration-page"},c=Object(n["i"])("h1",{class:"title"},"Configuration",-1),o={class:"field-row"},u=Object(n["i"])("label",null,"Hosting Provider",-1),s={class:"hosting-options radio-options"},a=Object(n["h"])(" AWS S3 "),r=Object(n["h"])(" Azure "),d={key:0,class:"config-form"},b={class:"form-section"},v={class:"inline-field"},f=Object(n["i"])("h3",null,"Public base URL",-1),g={class:"field"},j={class:"form-section"},p={class:"inline-field"},O=Object(n["i"])("h3",null,"Region",-1),h={class:"field"},m={class:"form-section"},y={class:"inline-field"},C=Object(n["i"])("h3",null,"Bucket Name",-1),H={class:"field"},I={class:"form-section"},q={class:"inline-field"},A=Object(n["i"])("h3",null,"Access Key",-1),k={class:"field"},U={class:"form-section"},w={class:"inline-field"},K=Object(n["i"])("h3",null,"Secret Key",-1),P={class:"field"},S={key:1,class:"config-form"},x={class:"form-section"},N={class:"inline-field"},z=Object(n["i"])("h3",null,"Public base URL",-1),J={class:"field"},R={class:"form-section"},L={class:"inline-field"},B=Object(n["i"])("h3",null,"Storage Account",-1),E={class:"field"},V={class:"form-section"},T={class:"inline-field"},W=Object(n["i"])("h3",null,"Container",-1),$={class:"field"},D={class:"form-section"},F={class:"inline-field"},G=Object(n["i"])("h3",null,"Shared Access Signature",-1),M={class:"field"},Q={key:2,class:"config-form"},X={class:"form-section"},Y={class:"inline-field"},Z=Object(n["i"])("h3",null,"Public base URL",-1),_={class:"field"},ee={class:"form-section"},ie={class:"inline-field"},te=Object(n["i"])("h3",null,"Bucket Name",-1),ne={class:"field"},le={class:"form-section"},ce={class:"inline-field"},oe=Object(n["i"])("h3",null,"API Key",-1),ue={class:"field"};function se(e,i,t,se,ae,re){var de,be,ve,fe,ge,je,pe,Oe,he,me,ye,Ce;return Object(n["s"])(),Object(n["e"])("div",l,[c,Object(n["i"])("div",o,[u,Object(n["i"])("div",s,[Object(n["i"])("label",{class:{selected:"s3"===e.hosting.provider}},[Object(n["J"])(Object(n["i"])("input",{"onUpdate:modelValue":i[1]||(i[1]=function(i){return e.hosting.provider=i}),type:"radio",name:"provider",value:"s3",onChange:i[2]||(i[2]=function(i){return e.updateHostingProvider(i.target.value)})},null,544),[[n["E"],e.hosting.provider]]),a],2),Object(n["f"])("",!0),Object(n["i"])("label",{class:{selected:"azure"===e.hosting.provider}},[Object(n["J"])(Object(n["i"])("input",{"onUpdate:modelValue":i[5]||(i[5]=function(i){return e.hosting.provider=i}),type:"radio",name:"provider",value:"azure",onChange:i[6]||(i[6]=function(i){return e.updateHostingProvider(i.target.value)})},null,544),[[n["E"],e.hosting.provider]]),r],2),Object(n["f"])("",!0)])]),"s3"===e.hosting.provider?(Object(n["s"])(),Object(n["e"])("div",d,[Object(n["i"])("div",b,[Object(n["i"])("label",v,[f,Object(n["i"])("div",g,[Object(n["i"])("input",{value:(null===(de=e.hosting.config)||void 0===de?void 0:de.remoteUrl)||"",type:"url",onInput:i[9]||(i[9]=function(i){return e.updateHostingConfig("remoteUrl",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",j,[Object(n["i"])("label",p,[O,Object(n["i"])("div",h,[Object(n["i"])("input",{value:(null===(be=e.hosting.config)||void 0===be?void 0:be.region)||"",type:"text",onInput:i[10]||(i[10]=function(i){return e.updateHostingConfig("region",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",m,[Object(n["i"])("label",y,[C,Object(n["i"])("div",H,[Object(n["i"])("input",{value:(null===(ve=e.hosting.config)||void 0===ve?void 0:ve.bucketName)||"",type:"text",onInput:i[11]||(i[11]=function(i){return e.updateHostingConfig("bucketName",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",I,[Object(n["i"])("label",q,[A,Object(n["i"])("div",k,[Object(n["i"])("input",{value:(null===(fe=e.hosting.config)||void 0===fe?void 0:fe.accessKeyId)||"",type:"text",onInput:i[12]||(i[12]=function(i){return e.updateHostingConfig("accessKeyId",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",U,[Object(n["i"])("label",w,[K,Object(n["i"])("div",P,[Object(n["i"])("input",{value:(null===(ge=e.hosting.config)||void 0===ge?void 0:ge.secretAccessKey)||"",type:"password",onInput:i[13]||(i[13]=function(i){return e.updateHostingConfig("secretAccessKey",i.target.value)}),required:""},null,40,["value"])])])])])):Object(n["f"])("",!0),"azure"===e.hosting.provider?(Object(n["s"])(),Object(n["e"])("div",S,[Object(n["i"])("div",x,[Object(n["i"])("label",N,[z,Object(n["i"])("div",J,[Object(n["i"])("input",{value:(null===(je=e.hosting.config)||void 0===je?void 0:je.remoteUrl)||"",type:"url",onInput:i[14]||(i[14]=function(i){return e.updateHostingConfig("remoteUrl",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",R,[Object(n["i"])("label",L,[B,Object(n["i"])("div",E,[Object(n["i"])("input",{value:(null===(pe=e.hosting.config)||void 0===pe?void 0:pe.storageAccount)||"",type:"text",onInput:i[15]||(i[15]=function(i){return e.updateHostingConfig("storageAccount",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",V,[Object(n["i"])("label",T,[W,Object(n["i"])("div",$,[Object(n["i"])("input",{value:(null===(Oe=e.hosting.config)||void 0===Oe?void 0:Oe.container)||"",type:"text",onInput:i[16]||(i[16]=function(i){return e.updateHostingConfig("container",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",D,[Object(n["i"])("label",F,[G,Object(n["i"])("div",M,[Object(n["i"])("input",{value:(null===(he=e.hosting.config)||void 0===he?void 0:he.sharedAccessSignature)||"",type:"password",onInput:i[17]||(i[17]=function(i){return e.updateHostingConfig("sharedAccessSignature",i.target.value)}),required:""},null,40,["value"])])])])])):Object(n["f"])("",!0),"firebase"===e.hosting.provider?(Object(n["s"])(),Object(n["e"])("div",Q,[Object(n["i"])("div",X,[Object(n["i"])("label",Y,[Z,Object(n["i"])("div",_,[Object(n["i"])("input",{value:(null===(me=e.hosting.config)||void 0===me?void 0:me.remoteUrl)||"",type:"url",onInput:i[18]||(i[18]=function(i){return e.updateHostingConfig("remoteUrl",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",ee,[Object(n["i"])("label",ie,[te,Object(n["i"])("div",ne,[Object(n["i"])("input",{value:(null===(ye=e.hosting.config)||void 0===ye?void 0:ye.bucketName)||"",type:"url",onInput:i[19]||(i[19]=function(i){return e.updateHostingConfig("bucketName",i.target.value)}),required:""},null,40,["value"])])])]),Object(n["i"])("div",le,[Object(n["i"])("label",ce,[oe,Object(n["i"])("div",ue,[Object(n["i"])("input",{value:(null===(Ce=e.hosting.config)||void 0===Ce?void 0:Ce.apiKey)||"",type:"password",onInput:i[20]||(i[20]=function(i){return e.updateHostingConfig("apiKey",i.target.value)}),required:""},null,40,["value"])])])])])):Object(n["f"])("",!0)])}var ae=t("5530"),re=t("5502"),de=Object(n["j"])({name:"Configuration",components:{},computed:Object(ae["a"])({},Object(re["d"])("app",["hosting"])),methods:Object(ae["a"])(Object(ae["a"])({},Object(re["b"])("app",["updateHostingProvider"])),{},{updateHostingConfig:function(e,i){var t,n=Object(ae["a"])({},null===(t=this.hosting)||void 0===t?void 0:t.config);n[e]=i,this.$store.dispatch("app/updateHostingConfig",n)},selectText:function(e){console.log({event:e}),e.target.select()}})});t("225e");de.render=se;i["default"]=de}}]);
//# sourceMappingURL=configuration.f37b44ff.js.map