import{j as e}from"./jsx-runtime-bb4eca5c.js";import{r}from"./index-9ab4f09c.js";import{B as n}from"./Button-75ab0dc1.js";import"./_commonjsHelpers-725317a4.js";const l=({isOpen:t,onClose:a,title:s,children:I,size:B="md",showCloseButton:m=!0})=>{if(!t)return null;const S={sm:"max-w-[95vw] sm:max-w-md",md:"max-w-[95vw] sm:max-w-lg",lg:"max-w-[95vw] sm:max-w-2xl",xl:"max-w-[95vw] sm:max-w-4xl"};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-300 bg-opacity-75 backdrop-blur-sm dark:bg-gray-900 dark:bg-opacity-80 !mt-0",onClick:a,role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:`bg-white rounded-xl shadow-2xl ${S[B]} w-full max-h-[90vh] dark:bg-gray-800`,onClick:T=>T.stopPropagation(),children:[(s||m)&&e.jsxs("div",{className:"rounded-t-xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700",children:[s&&e.jsx("h2",{className:"text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white",children:s}),m&&e.jsx(n,{variant:"outline",className:"!w-auto",size:"sm",onClick:a,children:e.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"p-4 sm:p-6 text-gray-800 dark:text-gray-200 overflow-auto max-h-[70vh] sm:max-h-[80vh]",children:I})]})})};l.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const F={title:"Feedback/Modal",component:l,parameters:{layout:"centered"},tags:["autodocs"]},o={render:t=>{const[a,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(l,{...t,isOpen:a,onClose:()=>s(!1),children:e.jsx("p",{className:"text-gray-600",children:"This is a simple modal with default settings."})})]})},args:{title:"Modal Title",isOpen:!1,onClose:()=>{},children:null}},i={render:t=>{const[a,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open Modal with Content"}),e.jsx(l,{...t,isOpen:a,onClose:()=>s(!1),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-600",children:"This modal contains more complex content including paragraphs and buttons."}),e.jsx("p",{className:"text-gray-600",children:"You can add any React components inside the modal body."}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(n,{variant:"secondary",onClick:()=>s(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>s(!1),children:"Confirm"})]})]})})]})},args:{title:"Confirm Action",isOpen:!1,onClose:()=>{},children:null}},d={render:t=>{const[a,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Small Modal"}),e.jsx(l,{...t,isOpen:a,onClose:()=>s(!1),children:e.jsx("p",{className:"text-gray-600",children:"This is a small modal."})})]})},args:{title:"Small Modal",size:"sm",isOpen:!1,onClose:()=>{},children:null}},c={render:t=>{const[a,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Large Modal"}),e.jsx(l,{...t,isOpen:a,onClose:()=>s(!1),children:e.jsx("p",{className:"text-gray-600",children:"This is a large modal with more space for content. It can accommodate larger forms, tables, or detailed information."})})]})},args:{title:"Large Modal",size:"lg",isOpen:!1,onClose:()=>{},children:null}},p={render:t=>{const[a,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>s(!0),children:"Open Modal"}),e.jsxs(l,{...t,isOpen:a,onClose:()=>s(!1),children:[e.jsx("p",{className:"text-gray-600 mb-4",children:"This modal doesn't have a close button. You must use the overlay or the button below."}),e.jsx(n,{onClick:()=>s(!1),children:"Close Modal"})]})]})},args:{title:"No Close Button",showCloseButton:!1,isOpen:!1,onClose:()=>{},children:null}};var u,g,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-gray-600">This is a simple modal with default settings.</p>
        </Modal>
      </>;
  },
  args: {
    title: 'Modal Title',
    isOpen: false,
    onClose: () => {},
    children: null
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,f,O;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Content</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="space-y-4">
            <p className="text-gray-600">
              This modal contains more complex content including paragraphs and buttons.
            </p>
            <p className="text-gray-600">You can add any React components inside the modal body.</p>
            <div className="flex gap-2 justify-end">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </div>
        </Modal>
      </>;
  },
  args: {
    title: 'Confirm Action',
    isOpen: false,
    onClose: () => {},
    children: null
  }
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var C,y,j;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Small Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-gray-600">This is a small modal.</p>
        </Modal>
      </>;
  },
  args: {
    title: 'Small Modal',
    size: 'sm',
    isOpen: false,
    onClose: () => {},
    children: null
  }
}`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var M,v,w;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Large Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-gray-600">
            This is a large modal with more space for content. It can accommodate larger forms,
            tables, or detailed information.
          </p>
        </Modal>
      </>;
  },
  args: {
    title: 'Large Modal',
    size: 'lg',
    isOpen: false,
    onClose: () => {},
    children: null
  }
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,k,N;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-gray-600 mb-4">
            This modal doesn't have a close button. You must use the overlay or the button below.
          </p>
          <Button onClick={() => setIsOpen(false)}>Close Modal</Button>
        </Modal>
      </>;
  },
  args: {
    title: 'No Close Button',
    showCloseButton: false,
    isOpen: false,
    onClose: () => {},
    children: null
  }
}`,...(N=(k=p.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const P=["Default","WithContent","SmallSize","LargeSize","WithoutCloseButton"];export{o as Default,c as LargeSize,d as SmallSize,i as WithContent,p as WithoutCloseButton,P as __namedExportsOrder,F as default};
