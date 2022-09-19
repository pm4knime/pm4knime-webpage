(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:""}},1948:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return m}});var n=i(9600),r=i(7857),t=i(1664),o=i.n(t),a=i(5675),l=i.n(a),c=i(8802),h=i.n(c),d=i(5893);function m(){var e=h().basePath;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.Z,{}),(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"section",children:(0,d.jsxs)("div",{className:"row-userDoc",children:[(0,d.jsx)("h1",{children:"PM4KNIME Guideline introduction"}),(0,d.jsxs)("p",{children:["This PM4KNIME guideline is created for users who want to apply process mining techniques and accomplish their tasks in KNIME. Before using PM4KNIME, users are supposed to have basic knowledge with the process mining and operation in KNIME. The following websites are recommended, e.g. with"," ",(0,d.jsx)("a",{href:"https://www.knime.com/",rel:"nofollow",children:"KNIME"})," ","to get familiar with analytical workflow environment and its operation, with"," ",(0,d.jsx)("a",{href:"http://www.processmining.org/",rel:"nofollow",children:"Process Mining"})," ","to understand process mining applicability."]}),(0,d.jsxs)("p",{children:["PM4KNIME is developed by"," ",(0,d.jsx)("a",{href:"https://www.fit.fraunhofer.de/",rel:"nofollow",children:"Fraunhofer Fit"})," ","process mining group at the university RWTH Aachen. As a community extension for KNIME, PM4KNIME integrates the process mining tools from"," ",(0,d.jsx)("a",{href:"http://www.promtools.org/doku.php",rel:"nofollow",children:"ProM"})," ","into KNIME platform. Classical plugins from ProM are wrapped as operational nodes in KNIME, which enables the applicability of process mining techniques in the analytical workflow environment."]}),(0,d.jsx)("p",{children:"The remainder of this page is organized as follows. Firstly, the category of nodes is listed. Next, a guide is given to install KNIME and the community extension PM4KNIME. After this, sample workflows are presented to show the use of PM4KNIME with KNIME. Further, there is also one part documents about the use of KNIME Server."}),(0,d.jsx)("h3",{children:"\xa0"}),(0,d.jsx)("h3",{children:(0,d.jsxs)("strong",{children:[" ",(0,d.jsx)(o(),{href:"/userDoc",children:(0,d.jsx)("a",{children:"Project Introduction"})})]})}),(0,d.jsx)("div",{className:"image-container",children:(0,d.jsx)("p",{children:(0,d.jsx)(l(),{src:e+"/assets/images/Features/pm4knime-category.jpg",layout:"fill",alt:"Exception screenshot"})})}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:"io"})}),(0,d.jsx)("p",{children:"Under the io category, there are readers to import event log files in .xes format, Petri nets in .pnml, process tree in .ptml format. Correspondingly, there are writers to export those files into the disk."}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:"discovery"})}),(0,d.jsx)("p",{children:"Process discovery techniques derive visual models from event logs of information systems, aiming at a better understanding of real business processes. It includes classical process mining discovery algorithms."}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:"conformance checking"})}),(0,d.jsx)("p",{children:"Conformance checking analyzes the deviations between a reference process model and observed behaviors driven from its execution. Firstly, alignment-based replay is carried with inputs of an event log and Petri net. The replayed result is given in alignment. Based on the alignment, it evaluates the model in fitness, precision, and performance."}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:"log manipulation"})}),(0,d.jsx)("p",{children:"The input and output are of the same type in the event log. Filtering log, sampling log, merge log and adding noises into log are common manipulation on log."}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:"conversion"})}),(0,d.jsx)("p",{children:"It implements the conversion between DataTable in KNIME and XLog for event log."}),(0,d.jsx)("ul",{children:(0,d.jsx)("li",{children:"visualization"})}),(0,d.jsx)("p",{children:"It supports the visualization to explore features of data. Currently, only log visualization is implemented to provide trace-variant view and dotted view. And we also offer a JavaScript GraphViz visualization for KNIME Server usage."}),(0,d.jsx)("h3",{children:"\xa0"}),(0,d.jsx)("h3",{children:(0,d.jsx)("strong",{children:(0,d.jsx)(o(),{href:"/userDoc/guides/installation",children:(0,d.jsx)("a",{children:"Installation Instructions"})})})}),(0,d.jsxs)("p",{children:["More details can be found in"," ",(0,d.jsx)("strong",{children:(0,d.jsx)(o(),{href:"/userDoc/guides/installation",children:(0,d.jsx)("a",{children:"Installation Instructions"})})}),(0,d.jsx)("br",{})," Of course, you can check the source code in"," ",(0,d.jsx)("a",{href:"https://github.com/pm4knime/pm4knime-development",children:"github"})," ","and build your own version."]}),(0,d.jsx)("h3",{children:"\xa0"}),(0,d.jsx)("h3",{children:(0,d.jsxs)("strong",{children:[" ",(0,d.jsx)(o(),{href:"/userDoc/guides/demos",children:(0,d.jsx)("a",{children:"Usage Instructions with Demos"})})]})}),(0,d.jsx)("p",{children:"We will provide several examples to demonstrate the PM4KNIME usage. The list can be found here."}),(0,d.jsx)("ul",{children:(0,d.jsxs)("li",{children:[" ","Demos",(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o(),{href:"/userDoc/guides/demos/processDiscovery",children:(0,d.jsx)("a",{children:"Demo Process Discovery"})})}),(0,d.jsx)("li",{children:(0,d.jsx)(o(),{href:"/userDoc/guides/demos/conformance",children:(0,d.jsx)("a",{children:"Demo Conformance Checking"})})}),(0,d.jsx)("li",{children:(0,d.jsx)(o(),{href:"/userDoc/guides/demos/logManipulation",children:(0,d.jsx)("a",{children:"Demo Log Manipulation"})})}),(0,d.jsxs)("li",{children:[" ",(0,d.jsx)(o(),{href:"/userDoc/guides/demos/repetiveExecution",children:(0,d.jsx)("a",{children:"Demo Repetitive Execution of Workflow"})})]}),(0,d.jsxs)("li",{children:[" ",(0,d.jsx)(o(),{href:"/userDoc/guides/demos/parameterOptimization",children:(0,d.jsx)("a",{children:"Demo Parameter Optimization"})})]}),(0,d.jsxs)("li",{children:[" ",(0,d.jsx)(o(),{href:"/userDoc/guides/demos/organizationOnWorkflow",children:(0,d.jsx)("a",{children:"Demo Organization on-Workflow"})})]}),(0,d.jsxs)("li",{children:[" ",(0,d.jsx)(o(),{href:"/userDoc/guides/demos/knimeNodes",children:(0,d.jsx)("a",{children:"Demo Work with KNIME Nodes"})})]}),(0,d.jsxs)("li",{children:[(0,d.jsx)(o(),{href:"/userDoc/guides/demos/workWithJava",children:(0,d.jsx)("a",{children:"Demo Work with Java Programming"})})," "]}),(0,d.jsx)("li",{children:(0,d.jsx)(o(),{href:"/userDoc/guides/demos/workWithPython",children:(0,d.jsx)("a",{children:"Demo Work with Python Programming"})})})]})]})}),(0,d.jsx)("h3",{children:"\xa0"}),(0,d.jsx)("h3",{children:(0,d.jsx)("strong",{children:(0,d.jsx)(o(),{href:"/userDoc/guides/knimeServer",children:(0,d.jsx)("a",{children:"KNIME Server Usage"})})})})]})})}),(0,d.jsx)(r.Z,{})]})}},7857:function(e,s,i){"use strict";var n=i(5893);s.Z=function(e){return(0,n.jsx)("footer",{className:"footer",children:(0,n.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,n.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{className:"float-right",href:"https://dsi.informationssicherheit.fraunhofer.de/en/dsi/pm4knime.github.io","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,n.jsxs)("span",{className:"float-right ml-1 mr-1 text-muted",children:[" "," | "," "]}),(0,n.jsx)("a",{className:"float-right",href:"https://dsi.informationssicherheit.fraunhofer.de/en/impressum/pm4knime.github.io","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,s,i){"use strict";var n=i(9499),r=(i(7294),i(8802)),t=i.n(r),o=i(4593),a=i(1664),l=i.n(a),c=i(634),h=i(9368),d=i(3210),m=i(5893);function u(e,s){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),i.push.apply(i,n)}return i}function p(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?u(Object(i),!0).forEach((function(s){(0,n.Z)(e,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))}))}return e}var f=function(e){var s=e.style;return(0,m.jsxs)(c.Z,{className:"container-fluid color-nav",style:s,children:[(0,m.jsxs)(c.Z.Brand,{children:[(0,m.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,m.jsx)("img",{src:t().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,m.jsx)(l(),{href:"/",passHref:!0,children:(0,m.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,m.jsx)("img",{src:t().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:"",style:{alignSelf:"left"}}),"PM4KNIME"]})})]}),(0,m.jsx)(c.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,m.jsxs)(c.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,m.jsx)(h.Z,{children:(0,m.jsxs)(d.Z,{title:"Getting Started",id:"collasible-nav-dropdown",children:[(0,m.jsx)(l(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Installation"})}),(0,m.jsx)(l(),{href:"/userDoc/guides/demo",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Demo"})}),(0,m.jsx)(l(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Bug Report"})})]})}),(0,m.jsx)(h.Z,{children:(0,m.jsxs)(d.Z,{title:"Examples",id:"collasible-nav-dropdown",children:[(0,m.jsx)(l(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Process Discovery"})}),(0,m.jsx)(l(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Conformance Checking"})}),(0,m.jsx)(l(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Preprocessing"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(l(),{href:"/userDoc/guides/demos/workflows",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Application to Real-Life Data"})}),(0,m.jsx)(d.Z.Divider,{}),(0,m.jsx)(l(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,m.jsx)(d.Z.Item,{children:"Python Integration"})})]})})]})]})},x=function(){return(0,m.jsxs)(o.q,{children:[(0,m.jsx)("meta",{charSet:"UTF-8"}),(0,m.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,m.jsx)("title",{children:"PM4KNIME"}),(0,m.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:t().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:t().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:t().basePath+"/assets/pm4knimeLogo.png"}),(0,m.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,m.jsx)("meta",{name:"google",content:"notranslate"})]})},g=function(){return(0,m.jsx)(f,{style:p({},{collapseOnSelect:!0,expand:"lg",variant:"light",transition:"top 0.6s",position:"fixed",width:"100%"})})};s.Z=function(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{}),(0,m.jsx)(g,{})]})}},7482:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides",function(){return i(1948)}])}},function(e){e.O(0,[917,675,774,888,179],(function(){return s=7482,e(e.s=s);var s}));var s=e.O();_N_E=s}]);