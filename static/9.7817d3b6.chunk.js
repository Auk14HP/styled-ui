webpackJsonp([9],{2178:function(t,e,n){var o=n(0),a=n(94),l=n(460).PageRenderer;l.__esModule&&(l=l.default);var s=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2253)}},componentWillMount:function(){},render:function(){return o.createElement(l,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,t.exports=s},2253:function(t,e){t.exports='## Simple Modal\n\nSimple modal does not have any internal padding or features. Only contains an absolute positioned close button in the corner.\nConsider using the new v6 Modal: [/v6 Modal Examples](/modal/v6)\n\n```react\nshowSource: true\nstate: { modal: false, value: \'\' }\n---\n<div>\n\t<Button variant="primary" size="medium" onClick={() => setState({ modal: !state.modal })}>Open a modal!</Button>\n\t<SimpleModal\n\t\tisOpen={state.modal}\n\t\tonClose={() => setState({ modal: false })}\n\t>\n\t\t<SimpleModalDemoModalContent>\n\t\t\t<SimpleModalDemoSuccess>\n\t\t\t\t<svg x="0px" y="0px"\n\t\t\t\t\tviewBox="0 0 426.667 426.667">\n\t\t\t\t\t<path style={{fill: "#6AC259" }} d="M213.333,0C95.518,0,0,95.514,0,213.333s95.518,213.333,213.333,213.333\n\t\t\t\t\tc117.828,0,213.333-95.514,213.333-213.333S331.157,0,213.333,0z M174.199,322.918l-93.935-93.931l31.309-31.309l62.626,62.622\n\t\t\t\t\tl140.894-140.898l31.309,31.309L174.199,322.918z"/>\n\t\t\t\t</svg>\n\t\t\t</SimpleModalDemoSuccess>\n\t\t\t<div>Success!</div>\n\t\t\t<SimpleModalDemoMessage>Wide content that goes all the way to the edge.</SimpleModalDemoMessage>\n\t\t</SimpleModalDemoModalContent>\n\t</SimpleModal>\n</div>\n```\n'}});
//# sourceMappingURL=9.7817d3b6.chunk.js.map