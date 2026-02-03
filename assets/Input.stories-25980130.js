import{j as e}from"./jsx-runtime-bb4eca5c.js";import{r as oe}from"./index-9ab4f09c.js";import"./_commonjsHelpers-725317a4.js";const h=oe.forwardRef(({label:g,error:r,helperText:x,size:K="md",fullWidth:Q=!0,leftIcon:m,rightIcon:u,className:X="",disabled:b,...Y},Z)=>{const ee={sm:"text-xs sm:text-sm px-2 sm:px-3 py-1.5 min-h-[36px] sm:min-h-[40px]",md:"text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 min-h-[40px] sm:min-h-[44px]",lg:"text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 min-h-[48px] sm:min-h-[56px]"},f=Q?"w-full":"",re=r?"border-red-500 focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-blue-500 focus:border-blue-500",ae=b?"bg-gray-100 cursor-not-allowed text-gray-500":"bg-white text-gray-900",se=m?"pl-10":"",te=u?"pr-10":"";return e.jsxs("div",{className:`${f} ${X} mb-6`,children:[g&&e.jsx("label",{className:"block text-sm sm:text-[16px] font-semibold text-gray-900 mb-1 sm:mb-1.5 dark:text-white",children:g}),e.jsxs("div",{className:"relative",children:[m&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500",children:m}),e.jsx("input",{ref:Z,className:`
              rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-400 dark:focus:border-transparent
              ${ee[K]}
              ${f}
              ${re}
              ${ae}
              ${se}
              ${te}
            `,disabled:b,...Y}),u&&e.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400",children:u})]}),r&&e.jsx("p",{className:"mt-2 text-sm font-semibold text-red-700 dark:text-red-400",children:r}),x&&!r&&e.jsx("p",{className:"mt-2 text-xs text-gray-600 dark:text-gray-400",children:x})]})});h.displayName="Input";h.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const ie={title:"Form/Input",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},a={args:{placeholder:"Enter text..."}},s={args:{label:"Email Address",placeholder:"you@example.com",type:"email"}},t={args:{label:"Username",placeholder:"johndoe",helperText:"Choose a unique username"}},o={args:{label:"Email",placeholder:"you@example.com",error:"Please enter a valid email address",type:"email"}},l={args:{label:"Search",placeholder:"Search...",leftIcon:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}},n={args:{label:"Password",type:"password",placeholder:"••••••••",rightIcon:e.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})}},d={args:{label:"Small Input",placeholder:"Small size",size:"sm"}},i={args:{label:"Large Input",placeholder:"Large size",size:"lg"}},c={args:{label:"Disabled Input",placeholder:"Cannot edit",disabled:!0}},p={args:{label:"Full Width Input",placeholder:"Takes full width",fullWidth:!0},parameters:{layout:"padded"}};var y,k,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var W,j,w;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email'
  }
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var L,S,I;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Choose a unique username'
  }
}`,...(I=(S=t.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var N,z,C;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address',
    type: 'email'
  }
}`,...(C=(z=o.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var T,R,E;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
  }
}`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var q,$,D;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    rightIcon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
  }
}`,...(D=($=n.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var M,P,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm'
  }
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var B,_,V;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg'
  }
}`,...(V=(_=i.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var A,H,O;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true
  }
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var U,G,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Full Width Input',
    placeholder: 'Takes full width',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ce=["Default","WithLabel","WithHelperText","WithError","WithLeftIcon","WithRightIcon","Small","Large","Disabled","FullWidth"];export{a as Default,c as Disabled,p as FullWidth,i as Large,d as Small,o as WithError,t as WithHelperText,s as WithLabel,l as WithLeftIcon,n as WithRightIcon,ce as __namedExportsOrder,ie as default};
