import{j as e}from"./jsx-runtime-bb4eca5c.js";import{B as C}from"./Button-75ab0dc1.js";import"./index-9ab4f09c.js";import"./_commonjsHelpers-725317a4.js";const S={success:"bg-green-50 border-green-500 text-green-800",error:"bg-red-50 border-red-500 text-red-800",info:"bg-blue-50 border-blue-500 text-blue-800",warning:"bg-yellow-50 border-yellow-500 text-yellow-800"},b=({message:L,type:s="info",onClose:i})=>e.jsxs("div",{className:`fixed top-16 sm:top-20 left-2 right-2 sm:left-auto sm:right-2 z-50 min-w-0 sm:min-w-xs max-w-[calc(100vw-1rem)] sm:max-w-sm px-3 sm:px-5 py-3 sm:py-4 rounded-lg border-l-4 shadow-2xl flex items-start gap-2 sm:gap-3 transition-all duration-300 bg-white dark:bg-gray-800 ${S[s]}`,role:"alert",style:{boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.15)"},children:[e.jsxs("div",{className:"flex-shrink-0 mt-0.5 sm:mt-1",children:[s==="error"&&e.jsx("svg",{className:"w-5 h-5 sm:w-6 sm:h-6 text-red-500",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}),s==="success"&&e.jsx("svg",{className:"w-5 h-5 sm:w-6 sm:h-6 text-green-500",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}),s==="info"&&e.jsx("svg",{className:"w-5 h-5 sm:w-6 sm:h-6 text-blue-500",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 16h-1v-4h-1m1-4h.01"})}),s==="warning"&&e.jsx("svg",{className:"w-5 h-5 sm:w-6 sm:h-6 text-yellow-500",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 8v4m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"})})]}),e.jsx("div",{className:"w-full text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 mt-0.5 sm:mt-1",children:L}),i&&e.jsx(C,{variant:"ghost",className:"!w-auto",size:"sm",onClick:i,children:e.jsx("svg",{className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]});b.__docgenInfo={description:"",methods:[],displayName:"ToasterBox",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'info' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const M={title:"Feedback/ToasterBox",component:b,tags:["autodocs"],argTypes:{type:{control:"select",options:["success","error","info","warning"]},message:{control:"text"},onClose:{action:"closed"}}},r={args:{message:"Operation completed successfully!",type:"success"}},o={args:{message:"Something went wrong. Please try again.",type:"error"}},a={args:{message:"This is an informational message.",type:"info"}},n={args:{message:"Warning: Please check your input.",type:"warning"}},t={args:{message:"You can close this toaster.",type:"info",onClose:()=>{}}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    message: 'Operation completed successfully!',
    type: 'success'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    message: 'Something went wrong. Please try again.',
    type: 'error'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,x,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    message: 'This is an informational message.',
    type: 'info'
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var w,f,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: 'Warning: Please check your input.',
    type: 'warning'
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var k,v,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    message: 'You can close this toaster.',
    type: 'info',
    onClose: () => {}
  }
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const E=["Success","Error","Info","Warning","Closable"];export{t as Closable,o as Error,a as Info,r as Success,n as Warning,E as __namedExportsOrder,M as default};
