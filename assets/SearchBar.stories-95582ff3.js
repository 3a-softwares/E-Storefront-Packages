import{j as e}from"./jsx-runtime-bb4eca5c.js";import{r as d}from"./index-9ab4f09c.js";import"./_commonjsHelpers-725317a4.js";const j=({value:n,onChange:l,onSearch:i,placeholder:k="Search products...",suggestions:m=[],showSuggestions:w=!1,className:C=""})=>{const[N,a]=d.useState(!1),c=d.useRef(null);d.useEffect(()=>{const r=u=>{c.current&&!c.current.contains(u.target)&&a(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const L=r=>{r.preventDefault(),i(n),a(!1)},W=r=>{l(r),i(r),a(!1)};return e.jsxs("div",{ref:c,className:`relative ${C}`,children:[e.jsxs("form",{onSubmit:L,className:"relative",children:[e.jsx("input",{type:"text",value:n,onChange:r=>l(r.target.value),onFocus:()=>a(!0),placeholder:k,className:"w-full pl-8 sm:pl-10 pr-10 sm:pr-4 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-600 text-sm sm:text-base text-gray-900 font-medium min-h-[44px]"}),e.jsx("svg",{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),n&&e.jsx("button",{type:"button",onClick:()=>l(""),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded p-1 transition-all",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),N&&w&&m.length>0&&e.jsx("div",{className:"absolute z-50 w-full mt-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto",children:m.map((r,u)=>e.jsxs("button",{onClick:()=>W(r),className:"w-full px-4 py-3 text-left hover:bg-blue-50 flex items-center gap-3 text-gray-900 font-medium transition-colors",children:[e.jsx("svg",{className:"w-4 h-4 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e.jsx("span",{className:"text-sm",children:r})]},u))})]})};j.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{placeholder:{defaultValue:{value:"'Search products...'",computed:!1},required:!1},suggestions:{defaultValue:{value:"[]",computed:!1},required:!1},showSuggestions:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const F={title:"Form/SearchBar",component:j,tags:["autodocs"]},s={args:{value:"",onChange:()=>{},onSearch:()=>{}}},t={args:{value:"",onChange:()=>{},onSearch:()=>{},placeholder:"Search products..."}},o={args:{value:"laptop",onChange:()=>{},onSearch:()=>{}}};var p,h,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: '',
    onChange: () => {},
    onSearch: () => {}
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,x,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: '',
    onChange: () => {},
    onSearch: () => {},
    placeholder: 'Search products...'
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,y,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'laptop',
    onChange: () => {},
    onSearch: () => {}
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const M=["Default","WithPlaceholder","WithQuery"];export{s as Default,t as WithPlaceholder,o as WithQuery,M as __namedExportsOrder,F as default};
