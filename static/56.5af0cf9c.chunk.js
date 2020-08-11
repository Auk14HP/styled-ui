webpackJsonp([56],{2157:function(t,e,n){var a=n(0),s=n(94),d=n(460).PageRenderer;d.__esModule&&(d=d.default);var o=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(2232)}},componentWillMount:function(){},render:function(){return a.createElement(d,Object.assign({},this.props,{content:this.state.content}))}});o.__catalog_loader__=!0,t.exports=o},2232:function(t,e){t.exports="## Default Date Picker\n\n```react\nshowSource: true\nstate: { selectedDate: null }\n---\n<DatePickerDemo>\n<div>\n<span>The selected date is {dateFunctions.format(state.selectedDate, 'MM-dd-yyyy')}</span>\n\t<PopoverManager onFocusAway={() => setState({ isOpen: false })}>\n\t\t<PopoverReference>\n\t\t\t<Button variant=\"primary\" size=\"medium\" onClick={() => setState({ isOpen: !state.isOpen })}>Select Date</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement=\"bottom\" styleOverrides={{ maxWidth: '1000px' }}>\n\t\t\t<DatePicker\n\t\t\t\tselectedDate={state.selectedDate}\n\t\t\t\tsetSelectedDate={(date) => setState({ selectedDate: date })}\n\t\t\t\tdateFunctions={dateFunctions}\n\t\t\t\tvalidate={() => true}\n\t\t\t/>\n\t\t</Popover>\n\t</PopoverManager>\n</div>\n</DatePickerDemo>\n```\n\n## Default Date Range Picker\n\n```react\nshowSource: true\nstate: { selectedDateRange: null }\n---\n<DatePickerDemo>\n<div>\n\t<span>The selected date range is {(state.selectedDateRange ? dateFunctions.format(state.selectedDateRange.start, 'MM-dd-yyyy') : null)} to {(state.selectedDateRange ? dateFunctions.format(state.selectedDateRange.end, 'MM-dd-yyyy') : null)}</span>\n\t<PopoverManager onFocusAway={() => setState({ isOpen: false })}>\n\t\t<PopoverReference>\n\t\t\t<Button variant=\"primary\" size=\"medium\" onClick={() => setState({ isOpen: !state.isOpen })}>Select Dates</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement=\"bottom\" styleOverrides={{ maxWidth: '1000px' }}>\n\t\t\t<DatePicker\n\t\t\t\tselectedDateRange={state.selectedDateRange}\n\t\t\t\tsetSelectedDate={(dateRange) => setState({ selectedDateRange: dateRange })}\n\t\t\t\tdateFunctions={dateFunctions}\n\t\t\t\tvalidate={() => true}\n\t\t\t\tasDateRangePicker\n\t\t\t/>\n\t\t</Popover>\n\t</PopoverManager>\n</div>\n</DatePickerDemo>\n```\n\n## Date Period Picker\n\n```react\nshowSource: true\nstate: { selectedDateRange: null }\n---\n<DatePickerDemo>\n<div>\n\t<span style={{ marginRight: '8px' }}>The selected date range is {(state.selectedDateRange ? dateFunctions.format(state.selectedDateRange.start, 'MM-dd-yyyy') : null)} to {(state.selectedDateRange ? dateFunctions.format(state.selectedDateRange.end, 'MM-dd-yyyy') : null)}</span>\n\t<PopoverManager onFocusAway={() => setState({ isOpen: false })}>\n\t\t<PopoverReference>\n\t\t\t<Button variant=\"primary\" size=\"medium\" onClick={() => setState({ isOpen: !state.isOpen })}>Select Dates</Button>\n\t\t</PopoverReference>\n\t\t<Popover isOpen={state.isOpen} placement=\"bottom\" styleOverrides={{ padding: '0px', maxWidth: '1000px' }}>\n\t\t\t<DatePeriodPicker\n\t\t\t\tselectedDateRange={state.selectedDateRange}\n\t\t\t\tsetSelectedDate={(dateRange) => setState({ selectedDateRange: dateRange })}\n\t\t\t\tdateFunctions={dateFunctions}\n\t\t\t\tvalidate={date => date >= new Date(1970, 0, 1)}\n\t\t\t\tparseDate={dateFunctions.parse}\n\t\t\t\tdatePeriods={[{\n\t\t\t\t\tdisplayName: 'Last 7 Days',\n\t\t\t\t\tdateRange: { start: dateFunctions.addDays(new Date(), -7), end: new Date() }\n\t\t\t\t},{\n\t\t\t\t\tdisplayName: 'Last 30 Days',\n\t\t\t\t\tdateRange: { start: dateFunctions.addDays(new Date(), -30), end: new Date() }\n\t\t\t\t},{\n\t\t\t\t\tdisplayName: 'Last 90 Days',\n\t\t\t\t\tdateRange: { start: dateFunctions.addDays(new Date(), -90), end: new Date() }\n\t\t\t\t}]}\n\t\t\t/>\n\t\t</Popover>\n\t</PopoverManager>\n</div>\n</DatePickerDemo>\n```\n"}});
//# sourceMappingURL=56.5af0cf9c.chunk.js.map