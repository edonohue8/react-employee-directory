(this.webpackJsonpcopythisreactapp=this.webpackJsonpcopythisreactapp||[]).push([[0],{23:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(2),r=s.n(a),i=s(16),c=s.n(i),l=(s(23),s(3)),o=s(4),p=s(6),d=s(5),h=s(17),m=s.n(h);s(41);var j=function(){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("div",{className:"title",children:["Employee Directory ",Object(n.jsx)("i",{class:"far fa-address-book"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"tagline",children:"Search & Sort for an Employee by Name"})]})};s(42);var u=function(e){return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{alt:e.last,src:e.image})}),Object(n.jsxs)("div",{children:[e.title," ",e.first," ",e.last," "]}),Object(n.jsx)("div",{children:e.gender}),Object(n.jsx)("div",{children:e.age}),Object(n.jsx)("div",{children:e.phone}),Object(n.jsx)("div",{children:e.email})]})},b=(s(43),function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={alphabetical:!0,ascending:!0,sortedEmployees:[],employees:[]},e.sortName=function(){var t=[];t=e.state.alphabetical?e.props.empList.sort((function(e,t){var s=e.name.last.toLowerCase(),n=t.name.last.toLowerCase();return s<n?-1:s>n?1:0})):e.props.empList.sort((function(e,t){var s=e.name.last.toLowerCase(),n=t.name.last.toLowerCase();return s>n?-1:s<n?1:0})),e.setState({alphabetical:!e.state.alphabetical,sortedEmployees:t})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.state.sortedEmployees.length<1&&this.setState({sortedEmployees:this.props.empList})}},{key:"componentDidUpdate",value:function(e){this.props.empList!==e.empList&&this.setState({sortedEmployees:this.props.empList})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{children:"Photo"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{onClick:this.sortName,className:"name",children:"Name\ud83d\udd3b"})," "]}),Object(n.jsx)("div",{children:"Gender"}),Object(n.jsx)("div",{children:"Age"}),Object(n.jsx)("div",{children:"Phone"}),Object(n.jsx)("div",{children:"E-mail"})]}),this.state.sortedEmployees.length>0&&this.state.sortedEmployees.map((function(e,t){return Object(n.jsx)(u,{image:e.picture.large,first:e.name.first,last:e.name.last,title:e.name.title,gender:e.gender,age:e.dob.age,phone:e.cell,email:e.email})}))]})}}]),s}(r.a.Component)),f=(s(44),function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={searchTerm:"",filteredEmployees:[]},e.handleInputChange=function(t){e.setState({searchTerm:t.target.value});var s=t.target.value,n=e.props.employees.filter((function(e){return-1!==(e.name.title+e.name.first+e.name.last+e.gender+e.dob.age+e.email+e.cell).indexOf(s)}));e.setState({filteredEmployees:n})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.state.filteredEmployees.length<1&&this.setState({filteredEmployees:this.props.employees})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("form",{className:"form",children:Object(n.jsx)("input",{value:this.state.searchTerm,name:"searchTerm",onChange:function(t){return e.handleInputChange(t)},type:"text",placeholder:"Search Name"})}),this.state.filteredEmployees.length>0&&Object(n.jsx)(b,{empList:this.state.filteredEmployees})]})}}]),s}(r.a.Component)),v=(s(45),function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={employees:[]},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://randomuser.me/api/?results=20&nat=Aus").then((function(t){e.setState({employees:t.data.results})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{}),this.state.employees.length>0&&Object(n.jsx)(f,{employees:this.state.employees})]})}}]),s}(r.a.Component)),O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.cacc47c6.chunk.js.map