(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(47)},26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),i=(n(26),n(20)),s=n(2),l=n(3),u=n(5),m=n(4),d=n(6),h=n(19),g=(n(44),n(7)),f=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.handleChangePicture,a=e.corradations;return r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{class:"container"},r.a.createElement("img",{src:t,alt:t,className:"col img-rounded",style:{height:"100%",margin:"4%"}}),r.a.createElement("div",{class:"custom-file"},r.a.createElement("input",{type:"file",id:"customFile",accept:"image/*",onChange:function(e){return n(e,a)}}),r.a.createElement("label",{class:"custom-file-label",for:"customFile"}))))}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChangePicture=function(e,t){var a=e.target,r=new FileReader;r.readAsDataURL(a.files[0]),r.onload=function(e){n.setState(function(n){return{images:{src:e.target.result,corradations:t}}})}},n.renderImages=function(e,t){return Array.isArray(e)?e.map(function(e,a){return n.renderImages(e,[].concat(Object(i.a)(t),[a]))}):"string"===typeof e&&(g.extensions.find(function(t){return e.endsWith(t)})||e.startsWith("data:image"))?r.a.createElement(f,{key:t.join(),image:e,handleChangePicture:n.handleChangePicture,corradations:t}):null},n.state={data:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;return h.get("".concat(g.baseUrl,"project")).then(function(t){console.log("res: "),console.log(t),e.setState({data:t.data})}).catch(function(e){console.log("error")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Image Gallery"),r.a.createElement("div",{classname:"row"},this.renderImages(this.state.data,[])))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(46);c.a.hydrate(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={extensions:[".png",".jpg",".JPG"],baseUrl:"http://localhost:3004/"}}},[[21,1,2]]]);
//# sourceMappingURL=main.b3e274bd.chunk.js.map