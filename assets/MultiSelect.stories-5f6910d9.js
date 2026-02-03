import{j as e}from"./jsx-runtime-bb4eca5c.js";import{B as le}from"./Button-75ab0dc1.js";import{r as K}from"./index-9ab4f09c.js";import"./_commonjsHelpers-725317a4.js";const se={outline:"border-2 border-gray-300 bg-white hover:border-gray-400 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-200",filled:"border-0 bg-gray-100 hover:bg-gray-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200",underline:"border-0 border-b-2 border-gray-400 bg-transparent hover:border-gray-600 focus-within:border-blue-600"},re={sm:"px-2 sm:px-3 py-1.5 text-xs sm:text-sm",md:"px-3 sm:px-4 py-2 text-sm sm:text-base",lg:"px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg"},s=({options:t,value:r=[],onChange:i,placeholder:P="Select options",variant:W="outline",size:B="md",disabled:c=!1,error:R=!1,maxHeight:b="200px",className:J=""})=>{const[v,Q]=K.useState(!1),X=a=>{if(c)return;const n=r.includes(a)?r.filter(o=>o!==a):[...r,a];i&&i(n)},Y=(a,n)=>{n.stopPropagation(),i&&i(r.filter(o=>o!==a))},Z=t.filter(a=>r.includes(a.value)).map(a=>a.label),ee=R?"border-red-500 focus-within:border-red-500 focus-within:ring-red-200":"",ae=c?"opacity-50 cursor-not-allowed":"cursor-pointer";return e.jsxs("div",{className:`relative ${J}`,children:[e.jsxs("div",{onClick:()=>!c&&Q(!v),className:`rounded-lg transition-all duration-200 outline-none ${se[W]} ${re[B]} ${ee} ${ae} flex flex-wrap gap-1.5 sm:gap-2 items-center min-h-[44px] sm:min-h-[40px] touch-manipulation`,children:[r.length===0?e.jsx("span",{className:"text-gray-500 font-medium",children:P}):Z.map((a,n)=>e.jsxs("span",{className:"inline-flex items-center px-2 py-1 bg-blue-100 text-blue-900 border border-blue-200 rounded-lg text-sm font-semibold",children:[a,e.jsx(le,{variant:"ghost",size:"sm",onClick:o=>Y(r[n],o),children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]},n)),e.jsx("span",{className:"ml-auto",children:"▼"})]}),v&&!c&&e.jsx("div",{className:"absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg",style:{maxHeight:b},children:e.jsx("div",{className:"overflow-auto",style:{maxHeight:b},children:t.map(a=>e.jsxs("label",{className:`flex items-center px-4 py-2 hover:bg-blue-50 cursor-pointer text-gray-900 font-medium ${a.disabled?"opacity-50 cursor-not-allowed":""}`,children:[e.jsx("input",{type:"checkbox",checked:r.includes(a.value),onChange:()=>X(a.value),disabled:a.disabled,className:"mr-3 h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"}),a.label]},a.value))})})]})};s.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select options'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled' | 'underline'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'underline'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'200px'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ce={title:"Form/MultiSelect",component:s,parameters:{layout:"centered"},tags:["autodocs"]},l=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"in",label:"India"}],d={args:{options:l,placeholder:"Select countries"}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(s,{options:l,variant:"outline",placeholder:"Outline"}),e.jsx(s,{options:l,variant:"filled",placeholder:"Filled"}),e.jsx(s,{options:l,variant:"underline",placeholder:"Underline"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(s,{options:l,size:"sm",placeholder:"Small"}),e.jsx(s,{options:l,size:"md",placeholder:"Medium"}),e.jsx(s,{options:l,size:"lg",placeholder:"Large"})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(s,{options:l,placeholder:"Normal"}),e.jsx(s,{options:l,error:!0,placeholder:"Error state"}),e.jsx(s,{options:l,disabled:!0,placeholder:"Disabled"})]})},g={args:{options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom",disabled:!0},{value:"ca",label:"Canada"},{value:"au",label:"Australia",disabled:!0},{value:"de",label:"Germany"}],placeholder:"Select countries"}},h={args:{options:l,value:["us","uk","ca"],placeholder:"Select countries"}},f={render:()=>{const[t,r]=K.useState([]);return e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(s,{options:l,value:t,onChange:r,placeholder:"Select countries"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected: ",t.length>0?t.join(", "):"None"]})]})}},x={args:{options:l,maxHeight:"150px",placeholder:"Select countries (custom height)"}};var S,y,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: countries,
    placeholder: 'Select countries'
  }
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var j,N,M;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <MultiSelect options={countries} variant="outline" placeholder="Outline" />
      <MultiSelect options={countries} variant="filled" placeholder="Filled" />
      <MultiSelect options={countries} variant="underline" placeholder="Underline" />
    </div>
}`,...(M=(N=u.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var C,k,z;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <MultiSelect options={countries} size="sm" placeholder="Small" />
      <MultiSelect options={countries} size="md" placeholder="Medium" />
      <MultiSelect options={countries} size="lg" placeholder="Large" />
    </div>
}`,...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var V,T,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <MultiSelect options={countries} placeholder="Normal" />
      <MultiSelect options={countries} error placeholder="Error state" />
      <MultiSelect options={countries} disabled placeholder="Disabled" />
    </div>
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var O,U,A;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'uk',
      label: 'United Kingdom',
      disabled: true
    }, {
      value: 'ca',
      label: 'Canada'
    }, {
      value: 'au',
      label: 'Australia',
      disabled: true
    }, {
      value: 'de',
      label: 'Germany'
    }],
    placeholder: 'Select countries'
  }
}`,...(A=(U=g.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var D,L,$;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: countries,
    value: ['us', 'uk', 'ca'],
    placeholder: 'Select countries'
  }
}`,...($=(L=h.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var E,F,H;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div className="flex flex-col gap-4 w-80">
        <MultiSelect options={countries} value={value} onChange={setValue} placeholder="Select countries" />
        <p className="text-sm text-gray-600">
          Selected: {value.length > 0 ? value.join(', ') : 'None'}
        </p>
      </div>;
  }
}`,...(H=(F=f.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var _,G,I;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options: countries,
    maxHeight: '150px',
    placeholder: 'Select countries (custom height)'
  }
}`,...(I=(G=x.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const de=["Default","Variants","Sizes","States","WithDisabledOptions","PreSelected","Controlled","CustomMaxHeight"];export{f as Controlled,x as CustomMaxHeight,d as Default,h as PreSelected,p as Sizes,m as States,u as Variants,g as WithDisabledOptions,de as __namedExportsOrder,ce as default};
