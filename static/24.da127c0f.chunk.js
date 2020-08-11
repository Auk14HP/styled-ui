webpackJsonp([24],{2174:function(t,n,e){var a=e(0),o=e(94),l=e(460).PageRenderer;l.__esModule&&(l=l.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(2249)}},componentWillMount:function(){},render:function(){return a.createElement(l,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},2249:function(t,n){t.exports='The Modal component has been reworked for v6, but you can opt-in to use the new API now: [/v6 Modal Examples](/modal/v6)\n\n## Modal with default header and footer\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tcommitButton: { text: \'Save\', onClick: () => alert(\'Saved\') },\n\t\t\tcancelButton: { text: \'Cancel\', onClick: () => setState({ modal: !state.modal }) },\n\t\t\tdeleteButton: { text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }\n\t\t}}\n\t>\n\t\t<ModalDemoWideContent>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value.value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t/>\n\t\t</ModalDemoWideContent>\n\t</Modal>\n</div>\n```\n\n## Modal attached as child\n\nThis `<Modal>` component doesn\'t specify a `container` prop, so it is added as a child of its parent in the DOM.\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tcommitButton: { text: \'Save\', onClick: () => alert(\'Saved\') },\n\t\t\tcancelButton: { text: \'Cancel\', onClick: () => setState({ modal: !state.modal })},\n\t\t\tdeleteButton: { text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }\n\t\t}}\n\t>\n\t\t<ModalDemoWideContent>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value.value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t/>\n\t\t</ModalDemoWideContent>\n\t</Modal>\n</div>\n```\n\n## Modal with no delete option\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tcommitButton: { text: \'Save\', onClick: () => alert(\'Saved\') },\n\t\t\tcancelButton: { text: \'Cancel\', onClick: () => setState({ modal: !state.modal })}\n\t\t}}\n\t>\n\t\t<ModalDemoWideContent>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</ModalDemoWideContent>\n\t</Modal>\n</div>\n```\n\n## Modal with only a delete option\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tdeleteButton: { text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }\n\t\t}}\n\t>\n\t\t<ModalDemoWideContent>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</ModalDemoWideContent>\n\t</Modal>\n</div>\n```\n\n## Modal with stacked buttons\n\nModal buttons stack at 320px for 3 buttons configurations and 220px for 1 or 2 button configurations.\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\tfooterProps={{\n\t\t\tcommitButton: { text: \'Save\', onClick: () => alert(\'Saved\') },\n\t\t\tcancelButton: { text: \'Cancel\', onClick: () => setState({ modal: !state.modal })},\n\t\t\tdeleteButton: { text: \'Delete Forever\', onClick: () => alert(\'Deleted\') }\n\t\t}}\n\t>\n\t\t<ModalDemoStackedContent>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</ModalDemoStackedContent>\n\t</Modal>\n</div>\n```\n\n## Modal with custom footer\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\trenderFooter={() => <ModalFooter>\n\t\t\t\t<ModalDemoButtonContainer>\n\t\t\t\t\t<Button variant="primaryOutline" size="medium" onClick={() => setState({ modal: false })}>Option 1</Button>\n\t\t\t\t</ModalDemoButtonContainer>\n\t\t\t\t<ModalDemoButtonContainer>\n\t\t\t\t\t<Button variant="primaryOutline" size="medium" onClick={() => setState({ modal: false })}>Option 2</Button>\n\t\t\t\t</ModalDemoButtonContainer>\n\t\t\t\t<ModalDemoButtonContainer>\n\t\t\t\t\t<Button variant="primaryOutline" size="medium" onClick={() => setState({ modal: false })}>Option 3</Button>\n\t\t\t\t</ModalDemoButtonContainer>\n\t\t\t\t<Button variant="primary" size="medium" onClick={() => {}}>Yes!</Button>\n\t\t\t</ModalFooter>}\n\t>\n\t\t<ModalDemoWideContent>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</ModalDemoWideContent>\n\t</Modal>\n</div>\n```\n\n## Modal with no footer\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Location"\n\t\tsubtitle="Help us locate you"\n\t\twithoutFooter\n\t>\n\t\t<ModalContent paddingBottom={5}>\n\t\t\t<Input\n\t\t\t\tvalue={state.value}\n\t\t\t\tonChange={value => setState({ value: value, isValid: value !== \'\' })}\n\t\t\t\tplaceholder="Bellingham"\n\t\t\t\ttitle="Location"\n\t\t\t\tdebounce={200}\n\t\t\t/>\n\t\t</ModalContent>\n\t</Modal>\n</div>\n```\n\n## Modal with really long content\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Lots of content"\n\t\twithoutFooter\n\t>\n\t\t<ModalContent overflowY="auto">\n\t\t\t{JSON.stringify(new Array(1000))}\n\t\t</ModalContent>\n\t</Modal>\n</div>\n```\n\n## Modal with custom content padding\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<Modal\n\t\tisOpen={state.modal}\n\t\tcontainer="body"\n\t\tonClose={() => setState({ modal: false })}\n\t\ttitle="Modal with full width content"\n\t\twithoutFooter\n\t>\n\t\t<ModalContent paddingX={0} paddingBottom={0} overflowY="auto">\n\t\t\t<img src="https://www.bellinghamherald.com/news/local/l6de4z/picture53186905/alternates/LANDSCAPE_1140/Faithlife%201" alt="Faithlife campus" style={{ display: \'block\' }} />\n\t\t</ModalContent>\n\t</Modal>\n</div>\n```\n'}});
//# sourceMappingURL=24.da127c0f.chunk.js.map