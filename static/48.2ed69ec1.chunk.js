webpackJsonp([48],{2201:function(t,e,n){var a=n(0),i=n(94),l=n(460).PageRenderer;l.__esModule&&(l=l.default);var o=i({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2276)}},componentWillMount:function(){},render:function(){return a.createElement(l,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,t.exports=o},2276:function(t,e){t.exports="## File Picker\n\n```react\nshowSource: true\nstate: {\n\tfiles: null,\n\tlocalizedResources: {\n\t\trecommendedMinSize: 'recommended minimum image size: 800 x 400',\n\t\tuploadFile: 'Upload File',\n\t\tuploadFiles: 'Upload Files',\n\t\taddText: 'Insert',\n\t\tcancelText: 'Cancel',\n\t\tdragDropText: 'Drag and drop to upload image',\n\t\tbrowseText: 'or browse files',\n\t},\n}\n---\n<Box height={600}>\n\t<FilePicker\n\t\tonFilesSelected={files => {\n\t\t\tif (files.kind === 'files') {\n\t\t\t\talert(files.files);\n\t\t\t} else if (files.kind === 'assets') {\n\t\t\t\talert(JSON.stringify(files.assets));\n\t\t\t} else if (files.kind === 'filter') {\n\t\t\t\talert(JSON.stringify(files.filterData));\n\t\t\t} else {\n\t\t\t\tconsole.error(files);\n\t\t\t\talert('Invalid response');\n\t\t\t}\n\t\t}}\n\t\tonCancel={() => alert('You called the onCancelFunction. This should be used to hide the component')}\n\t\tonImageLoadError={imageSource => alert(`${imageSource} failed to load`)}\n\t\tallowMultiSelect\n\t>\n\t\t<TabManager>\n\t\t\t<TabList>\n\t\t\t\t<Tab paddingX={4}>\n\t\t\t\t\t{state.localizedResources.uploadFiles}\n\t\t\t\t</Tab>\n\t\t\t\t<Tab paddingX={4}>{'Stock photos'}</Tab>\n\t\t\t\t<Tab paddingX={4}>{'Filter'}</Tab>\n\t\t\t</TabList>\n\t\t\t<TabPanels display=\"grid\">\n\t\t\t\t<TabPanel padding={4} display=\"grid\">\n\t\t\t\t\t<FileUpload />\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel padding={0} display=\"grid\">\n\t\t\t\t\t<AmberContent\n\t\t\t\t\t\taccountId={6817140}\n\t\t\t\t\t\tfilter={'kind:\"image\"'}\n\t\t\t\t\t\tfooterText={'This panel selects assets'}\n\t\t\t\t\t\tsort={'relevance'}\n\t\t\t\t\t\tviewStyle={'tinygrid'}\n\t\t\t\t\t\theight=\"100%\"\n\t\t\t\t\t/>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel padding={0} display=\"grid\">\n\t\t\t\t\t<AmberContent\n\t\t\t\t\t\taccountId={6817140}\n\t\t\t\t\t\tfilter={'kind:\"image\"'}\n\t\t\t\t\t\tfooterText={'This panel returns a filter'}\n\t\t\t\t\t\tpickerMode={'filter'}\n\t\t\t\t\t\tsort={'relevance'}\n\t\t\t\t\t\tviewStyle={'tinygrid'}\n\t\t\t\t\t\theight=\"100%\"\n\t\t\t\t\t/>\n\t\t\t\t</TabPanel>\n\t\t\t</TabPanels>\n\t\t</TabManager>\n\t</FilePicker>\n</Box>\n```\n\n## File Picker in a Modal\n\n```react\nshowSource: true\nstate: {\n\tmodal: false,\n\tfiles: null,\n\tlocalizedResources: {\n\t\trecommendedMinSize: 'recommended minimum image size: 800 x 400',\n\t\tuploadFile: 'Upload File',\n\t\tuploadFiles: 'Upload Files',\n\t\taddText: 'Insert',\n\t\tcancelText: 'Cancel',\n\t\tdragDropText: 'Drag and drop to upload image',\n\t\tbrowseText: 'or browse files',\n\t},\n}\n---\n<div>\n\t<Button variant=\"primary\" size=\"medium\" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer=\"body\"\n\t\tonClose={() => setState({ modal: false })}\n\t\tfullscreen\n\t>\n\t\t<Modal.Header title=\"File Picker\" textStyle=\"h.24\" />\n\t\t<Modal.Content>\n\t\t\t<FilePicker\n\t\t\t\tonFilesSelected={files => {\n\t\t\t\t\tif (files.kind === 'files') {\n\t\t\t\t\t\talert(files.files);\n\t\t\t\t\t} else if (files.kind === 'assets') {\n\t\t\t\t\t\talert(JSON.stringify(files.assets));\n\t\t\t\t\t} else if (files.kind === 'filter') {\n\t\t\t\t\t\talert(JSON.stringify(files.filterData));\n\t\t\t\t\t} else {\n\t\t\t\t\t\tconsole.error(files);\n\t\t\t\t\t\talert('Invalid response');\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t\tonCancel={() => alert('You called the onCancelFunction. This should be used to hide the component')}\n\t\t\t\tonImageLoadError={imageSource => alert(`${imageSource} failed to load`)}\n\t\t\t\tallowMultiSelect\n\t\t\t>\n\t\t\t\t<TabManager>\n\t\t\t\t\t<TabList>\n\t\t\t\t\t\t<Tab paddingX={4}>\n\t\t\t\t\t\t\t{state.localizedResources.uploadFiles}\n\t\t\t\t\t\t</Tab>\n\t\t\t\t\t\t<Tab paddingX={4}>{'Stock photos'}</Tab>\n\t\t\t\t\t\t<Tab paddingX={4}>{'Filter'}</Tab>\n\t\t\t\t\t</TabList>\n\t\t\t\t\t<TabPanels display=\"grid\">\n\t\t\t\t\t\t<TabPanel padding={4} display=\"grid\">\n\t\t\t\t\t\t\t<FileUpload />\n\t\t\t\t\t\t</TabPanel>\n\t\t\t\t\t\t<TabPanel padding={0} display=\"grid\">\n\t\t\t\t\t\t\t<AmberContent\n\t\t\t\t\t\t\t\taccountId={6817140}\n\t\t\t\t\t\t\t\tfilter={'kind:\"image\"'}\n\t\t\t\t\t\t\t\tfooterText={'This panel selects assets'}\n\t\t\t\t\t\t\t\tsort={'relevance'}\n\t\t\t\t\t\t\t\tviewStyle={'tinygrid'}\n\t\t\t\t\t\t\t\theight=\"100%\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</TabPanel>\n\t\t\t\t\t\t<TabPanel padding={0} display=\"grid\">\n\t\t\t\t\t\t\t<AmberContent\n\t\t\t\t\t\t\t\taccountId={6817140}\n\t\t\t\t\t\t\t\tfilter={'kind:\"image\"'}\n\t\t\t\t\t\t\t\tfooterText={'This panel returns a filter'}\n\t\t\t\t\t\t\t\tpickerMode={'filter'}\n\t\t\t\t\t\t\t\tsort={'relevance'}\n\t\t\t\t\t\t\t\tviewStyle={'tinygrid'}\n\t\t\t\t\t\t\t\theight=\"100%\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t</TabPanel>\n\t\t\t\t\t</TabPanels>\n\t\t\t\t</TabManager>\n\t\t\t</FilePicker>\n\t\t</Modal.Content>\n\t</Modal>\n</div>\n```\n\n# Localized Resources defaults\n\n```code\nlang: javascript\n---\n\tlocalizedResources: {\n\t\trecommendedMinSize: 'recommended minimum image size: 800 x 400',\n\t\tuploadFile: 'Upload File',\n\t\tuploadFiles: 'Upload Files',\n\t\taddText: 'Insert',\n\t\tcancelText: 'Cancel',\n\t\tdragDropText: 'Drag and drop to upload image',\n\t\tbrowseText: 'or browse files',\n\t}\n```\n"}});
//# sourceMappingURL=48.2ed69ec1.chunk.js.map