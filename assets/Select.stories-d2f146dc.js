import{j as e}from"./jsx-runtime-bb4eca5c.js";import{S as a}from"./Select-a1816e1a.js";import{r as E}from"./index-9ab4f09c.js";import"./_commonjsHelpers-725317a4.js";const F={title:"Form/Select",component:a,parameters:{layout:"centered"},tags:["autodocs"]},l=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"}],r={args:{options:l,placeholder:"Select a country"}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(a,{options:l,variant:"outline",placeholder:"Outline"}),e.jsx(a,{options:l,variant:"filled",placeholder:"Filled"}),e.jsx(a,{options:l,variant:"underline",placeholder:"Underline"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(a,{options:l,size:"sm",placeholder:"Small"}),e.jsx(a,{options:l,size:"md",placeholder:"Medium"}),e.jsx(a,{options:l,size:"lg",placeholder:"Large"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(a,{options:l,placeholder:"Normal"}),e.jsx(a,{options:l,error:!0,placeholder:"Error state"}),e.jsx(a,{options:l,disabled:!0,placeholder:"Disabled"})]})},n={args:{options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom",disabled:!0},{value:"ca",label:"Canada"},{value:"au",label:"Australia",disabled:!0}],placeholder:"Select a country"}},c={render:()=>{const[i,D]=E.useState("");return e.jsxs("div",{className:"flex flex-col gap-4 w-64",children:[e.jsx(a,{options:l,value:i,onChange:D,placeholder:"Select a country"}),e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected: ",i||"None"]})]})}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options: countries,
    placeholder: 'Select a country'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,x,S;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <Select options={countries} variant="outline" placeholder="Outline" />
      <Select options={countries} variant="filled" placeholder="Filled" />
      <Select options={countries} variant="underline" placeholder="Underline" />
    </div>
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,h,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <Select options={countries} size="sm" placeholder="Small" />
      <Select options={countries} size="md" placeholder="Medium" />
      <Select options={countries} size="lg" placeholder="Large" />
    </div>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,b,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-64">
      <Select options={countries} placeholder="Normal" />
      <Select options={countries} error placeholder="Error state" />
      <Select options={countries} disabled placeholder="Disabled" />
    </div>
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var N,y,w;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    }],
    placeholder: 'Select a country'
  }
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var z,U,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col gap-4 w-64">
        <Select options={countries} value={value} onChange={setValue} placeholder="Select a country" />
        <p className="text-sm text-gray-600">Selected: {value || 'None'}</p>
      </div>;
  }
}`,...(C=(U=c.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};const K=["Default","Variants","Sizes","States","WithDisabledOptions","Controlled"];export{c as Controlled,r as Default,o as Sizes,t as States,s as Variants,n as WithDisabledOptions,K as __namedExportsOrder,F as default};
