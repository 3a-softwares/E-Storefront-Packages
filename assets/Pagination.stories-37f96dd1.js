import{j as r}from"./jsx-runtime-bb4eca5c.js";import"./index-9ab4f09c.js";import"./_commonjsHelpers-725317a4.js";const k=({currentPage:a,totalPages:s,onPageChange:m,showPages:p=5,className:$=""})=>{const q=()=>{const e=[],n=Math.floor(p/2);let t=Math.max(1,a-n),o=Math.min(s,a+n);a<=n&&(o=Math.min(p,s)),a+n>=s&&(t=Math.max(1,s-p+1)),t>1&&(e.push(1),t>2&&e.push("..."));for(let u=t;u<=o;u++)e.push(u);return o<s&&(o<s-1&&e.push("..."),e.push(s)),e};return s<=1?null:r.jsxs("div",{className:`flex flex-wrap items-center justify-center gap-1 sm:gap-2 ${$}`,children:[r.jsxs("button",{onClick:()=>m(a-1),disabled:a===1,className:"px-2 sm:px-4 py-1.5 sm:py-2 border-2 border-gray-300 rounded-lg font-semibold text-xs sm:text-sm text-gray-900 hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all touch-manipulation",children:[r.jsx("span",{className:"hidden sm:inline",children:"Previous"}),r.jsx("span",{className:"sm:hidden",children:"←"})]}),q().map((e,n)=>e==="..."?r.jsx("span",{className:"px-2 text-gray-700 font-bold",children:"..."},`ellipsis-${n}`):r.jsx("button",{onClick:()=>m(e),className:`px-4 py-2 border-2 rounded-lg font-semibold transition-all ${a===e?"bg-blue-600 text-white border-blue-600 shadow-md":"text-gray-900 border-gray-300 hover:bg-gray-100 hover:border-gray-400"}`,children:e},e)),r.jsxs("button",{onClick:()=>m(a+1),disabled:a===s,className:"px-2 sm:px-4 py-1.5 sm:py-2 border-2 border-gray-300 rounded-lg font-semibold text-xs sm:text-sm text-gray-900 hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all touch-manipulation",children:[r.jsx("span",{className:"hidden sm:inline",children:"Next"}),r.jsx("span",{className:"sm:hidden",children:"→"})]})]})};k.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{showPages:{defaultValue:{value:"5",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const V={title:"Data Display/Pagination",component:k,tags:["autodocs"]},i={args:{currentPage:1,totalPages:10,onPageChange:()=>{}}},d={args:{currentPage:1,totalPages:5,onPageChange:()=>{}}},l={args:{currentPage:3,totalPages:5,onPageChange:()=>{}}},c={args:{currentPage:5,totalPages:5,onPageChange:()=>{}}},g={args:{currentPage:10,totalPages:50,onPageChange:()=>{}}};var h,x,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: () => {}
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,P,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => {}
  }
}`,...(y=(P=d.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var N,j,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 5,
    onPageChange: () => {}
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var v,M,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 5,
    onPageChange: () => {}
  }
}`,...(S=(M=c.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var w,D,_;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    currentPage: 10,
    totalPages: 50,
    onPageChange: () => {}
  }
}`,...(_=(D=g.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const I=["Default","FirstPage","MiddlePage","LastPage","ManyPages"];export{i as Default,d as FirstPage,c as LastPage,g as ManyPages,l as MiddlePage,I as __namedExportsOrder,V as default};
