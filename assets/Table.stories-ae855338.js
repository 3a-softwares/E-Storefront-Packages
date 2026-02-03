import{j as e}from"./jsx-runtime-bb4eca5c.js";import"./index-9ab4f09c.js";import"./_commonjsHelpers-725317a4.js";function M({columns:r,data:p,loading:R=!1,emptyMessage:V="No data available",hoverable:_=!0,striped:J=!1,onRowClick:s}){return R?e.jsxs("div",{className:"w-full p-8 text-center bg-white rounded-lg shadow-sm",children:[e.jsx("div",{className:"inline-block animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent"}),e.jsx("p",{className:"mt-3 text-base font-medium text-gray-700",children:"Loading..."})]}):p.length===0?e.jsx("div",{className:"w-full p-8 text-center text-gray-700 font-medium bg-gray-50 rounded-lg border-2 border-gray-200",children:V}):e.jsx("div",{className:"w-full overflow-x-auto rounded-xl border border-gray-200 shadow-md bg-white dark:bg-gray-900",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 text-sm md:text-base",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-800",children:e.jsx("tr",{children:r.map((a,n)=>e.jsx("th",{className:"px-3 py-3 md:px-6 md:py-4 text-left font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide whitespace-nowrap",scope:"col",children:a.header||a.label},n))})}),e.jsx("tbody",{className:"divide-y divide-gray-100 dark:divide-gray-800",children:p.map((a,n)=>e.jsx("tr",{onClick:()=>s==null?void 0:s(a),className:`
                ${_?"hover:bg-blue-50 dark:hover:bg-gray-800":""}
                ${J&&n%2===1?"bg-gray-50 dark:bg-gray-900":""}
                ${s?"cursor-pointer":""}
                transition-colors duration-150
              `,children:r.map((t,L)=>{const h=t.accessor||t.key,g=t.cell||t.render;return e.jsx("td",{className:"px-3 py-3 md:px-6 md:py-4 whitespace-nowrap text-gray-900 dark:text-gray-100",style:{minWidth:120},children:g?g(a):h?a[h]:null},L)})},n))})]})})}M.__docgenInfo={description:"",methods:[],displayName:"Table",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No data available'",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T) => void",signature:{arguments:[{type:{name:"T"},name:"row"}],return:{name:"void"}}},description:""}}};const U={title:"Data Display/Table",component:M,parameters:{layout:"padded"},tags:["autodocs"]},u=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Manager",status:"Active"}],o={args:{columns:[{header:"ID",accessor:"id"},{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Status",accessor:"status"}],data:u}},c={args:{columns:[{header:"ID",accessor:"id"},{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Status",accessor:"status",cell:r=>e.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold ${r.status==="Active"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,children:r.status})}],data:u}},d={args:{columns:[{header:"ID",accessor:"id"},{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"}],data:u,hoverable:!0}},l={args:{columns:[{header:"ID",accessor:"id"},{header:"Name",accessor:"name"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"}],data:u,striped:!0}},m={args:{columns:[{header:"ID",accessor:"id"},{header:"Name",accessor:"name"},{header:"Email",accessor:"email"}],data:[],loading:!0}},i={args:{columns:[{header:"ID",accessor:"id"},{header:"Name",accessor:"name"},{header:"Email",accessor:"email"}],data:[],emptyMessage:"No users found"}};var y,b,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Role',
      accessor: 'role'
    }, {
      header: 'Status',
      accessor: 'status'
    }],
    data: sampleData
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var f,v,N;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Status',
      accessor: 'status',
      cell: (row: Record<string, any>) => <span className={\`px-2 py-1 rounded-full text-xs font-semibold \${row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}\`}>
            {row.status}
          </span>
    }],
    data: sampleData
  }
}`,...(N=(v=c.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var D,j,w;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Role',
      accessor: 'role'
    }],
    data: sampleData,
    hoverable: true
  }
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var T,E,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Role',
      accessor: 'role'
    }],
    data: sampleData,
    striped: true
  }
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var S,A,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }],
    data: [],
    loading: true
  }
}`,...(k=(A=m.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var q,$,C;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    columns: [{
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }],
    data: [],
    emptyMessage: 'No users found'
  }
}`,...(C=($=i.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const O=["Default","WithCustomCells","Hoverable","Striped","Loading","Empty"];export{o as Default,i as Empty,d as Hoverable,m as Loading,l as Striped,c as WithCustomCells,O as __namedExportsOrder,U as default};
