"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[409],{6409:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t=r(5671),o=r(3144),u=r(136),i=r(5716),l=r(2791),a=r(364),s=r(5750),c=r(885),f="Paginator_selected_page__-aEoH",p=r(184),g=function(n){for(var e=n.totalItemsCount,r=n.portionSize,t=void 0===r?10:r,o=n.currentPage,u=n.changeCurrentPage,i=Math.ceil(e/t),a=(0,l.useState)(1),s=(0,c.Z)(a,2),g=s[0],h=s[1],d=(g-1)*t+1,v=g*t,w=[],y=1;y<=i;y++)w.push(y);return(0,p.jsxs)(p.Fragment,{children:[g>1&&(0,p.jsx)("button",{onClick:function(){return h(g-1)},children:"prev"}),w.filter((function(n){return n>=d&&n<=v})).map((function(n){return(0,p.jsx)("span",{className:n===o?f:"",onClick:function(){return u(n)},children:" ".concat(n," ")},n)})),i>g&&(0,p.jsx)("button",{onClick:function(){return h(g+1)},children:"next"})]})},h=r(4475),d="Users_userPic__bOlBD",v=r(1523),w=function(n){var e=n.userId,r=n.name,t=n.photos,o=n.status,u=n.followed,i=n.followingInProgress,l=n.followTC,a=n.unfollowTC;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:(0,p.jsx)(v.OL,{to:"/profile/"+e,children:(0,p.jsx)("img",{src:null!==t.small?t.small:h,className:d})})}),(0,p.jsx)("div",{children:u?(0,p.jsx)("button",{onClick:function(){return a(e)},disabled:i.some((function(n){return n===e})),children:"Unfollow"}):(0,p.jsx)("button",{onClick:function(){return l(e)},disabled:i.some((function(n){return n===e})),children:"Follow"})})]}),(0,p.jsxs)("span",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:r}),(0,p.jsx)("div",{children:o})]}),(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:"u.location.country"}),(0,p.jsx)("div",{children:"u.location.city"})]})]})]},e),")"]})},y=function(n){var e=n.followingInProgress,r=n.currentPage,t=n.changeCurrentPage,o=n.usersPage,u=n.pageSize,i=n.totalItemsCount,l=n.followTC,a=n.unfollowTC,s=n.unfollow,c=n.follow;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{currentPage:r,changeCurrentPage:t,totalItemsCount:i,portionSize:u}),o.map((function(n){return(0,p.jsx)(w,{userId:n.id,name:n.name,status:n.status,photos:n.photos,followed:n.followed,followingInProgress:e,follow:c,unfollow:s,followTC:l,unfollowTC:a},n.id)}))]})},m=r(5395),C=r(7781),P="NOT_FOUND";var x=function(n,e){return n===e};function j(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,o=void 0===t?x:t,u=r.maxSize,i=void 0===u?1:u,l=r.resultEqualityCheck,a=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}}(o),s=1===i?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:P},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(a):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return P}return{get:t,put:function(e,o){t(e)===P&&(r.unshift({key:e,value:o}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(i,a);function c(){var e=s.get(arguments);if(e===P){if(e=n.apply(null,arguments),l){var r=s.getEntries(),t=r.find((function(n){return l(n.value,e)}));t&&(e=t.value)}s.put(arguments,e)}return e}return c.clearCache=function(){return s.clear()},c}function b(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function k(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var o=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var u,i=0,l={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(l=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var s=l,c=s.memoizeOptions,f=void 0===c?r:c,p=Array.isArray(f)?f:[f],g=b(t),h=n.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(p)),d=n((function(){for(var n=[],e=g.length,r=0;r<e;r++)n.push(g[r].apply(null,arguments));return u=h.apply(null,n)}));return Object.assign(d,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),d};return o}var T=k(j),I=T((function(n){return n.usersPage.pageSize}),(function(n){return n})),S=function(n){return n.usersPage.items},z=function(n){return n.usersPage.totalCount},F=function(n){return n.usersPage.currentPage},_=function(n){return n.usersPage.isFetching},A=function(n){return n.usersPage.followingInProgress},E=function(n){(0,u.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return(n=e.call.apply(e,[this].concat(u))).changeCurrentPageHandler=function(e){return n.props.changeCurrentPageTC(e,n.props.pageSize)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,p.jsxs)(p.Fragment,{children:[this.props.isFetching?(0,p.jsx)(m.p,{}):null,(0,p.jsx)(y,{changeCurrentPage:this.changeCurrentPageHandler,pageSize:this.props.pageSize,totalItemsCount:this.props.totalCount,currentPage:this.props.currentPage,usersPage:this.props.usersPage,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,followTC:this.props.followTC,unfollowTC:this.props.unfollowTC})]})}}]),r}(l.Component),Z=(0,C.qC)((0,a.$j)((function(n){return{usersPage:S(n),pageSize:I(n),totalCount:z(n),currentPage:F(n),isFetching:_(n),followingInProgress:A(n)}}),{follow:s.ZN,unfollow:s.fv,changeCurrentPage:s.zt,setTotalUsersCount:s.K1,getUsers:s.Rf,changeCurrentPageTC:s.L8,followTC:s.iR,unfollowTC:s.Ky}))(E)},4475:function(n,e,r){n.exports=r.p+"static/media/profile-anonymous2.848e97ad3397ed417ac3.png"},885:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(181);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,u=[],i=!0,l=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(u.push(t.value),!e||u.length!==e);i=!0);}catch(a){l=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return u}}(n,e)||(0,t.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=409.60951f12.chunk.js.map