import{j as e}from"./jsx-runtime-bb4eca5c.js";import{R as N}from"./index-9ab4f09c.js";import"./_commonjsHelpers-725317a4.js";const t=N.forwardRef(({label:l,error:c,className:D="",...w},T)=>e.jsxs("div",{className:"w-full mb-3 sm:mb-4",children:[l&&e.jsx("label",{className:"block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2",children:l}),e.jsx("textarea",{ref:T,className:`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-blue-500 transition-colors dark:bg-gray-700 dark:text-white resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px] ${D}`,...w}),c&&e.jsx("p",{className:"mt-1 text-xs text-red-500",children:c})]}));t.displayName="Textarea";t.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const E={title:"Form/Textarea",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},rows:{control:"number"},error:{control:"text"},disabled:{control:"boolean"}}},r={args:{placeholder:"Type your message...",rows:4}},s={args:{label:"Description",placeholder:"Describe your product...",rows:4}},a={args:{label:"Description",placeholder:"Describe your product...",error:"Description is required",rows:4}},o={args:{label:"Disabled",placeholder:"Cannot type here",disabled:!0,rows:4}};var n,d,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message...',
    rows: 4
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Describe your product...',
    rows: 4
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,x,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Describe your product...',
    error: 'Description is required',
    rows: 4
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,y,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    placeholder: 'Cannot type here',
    disabled: true,
    rows: 4
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const R=["Default","WithLabel","WithError","Disabled"];export{r as Default,o as Disabled,a as WithError,s as WithLabel,R as __namedExportsOrder,E as default};
