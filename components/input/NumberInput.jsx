import React, { useCallback, useRef, useMemo } from 'react';
import { Box } from '../Box';
import { Input } from './Input';
import { Button } from '../button';
import { ChevronExpand, ChevronCollapse } from '../icons';
import { theme } from '../../theme';
import { useCopyRefs } from '../shared-hooks/use-copy-refs';

const NumberInput = React.forwardRef(function NumberInput(props, ref) {
	const { step, variant, ...rest } = props;
	const inputRef = useRef();
	const innerRef = useCopyRefs(useMemo(() => [ref, inputRef], [inputRef, ref]));

	const dispatchChangeEvent = useCallback(() => {
		inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
	}, []);

	const handleStepUp = useCallback(() => {
		inputRef.current.stepUp();
		dispatchChangeEvent();
	}, [dispatchChangeEvent]);

	const handleStepDown = useCallback(() => {
		inputRef.current.stepDown();
		dispatchChangeEvent();
	}, [dispatchChangeEvent]);

	const buttonPadding = variant === 'small' ? 2 : 3;

	return (
		<Box display="inline-block" position="relative" alignSelf="center">
			<Input
				paddingRight="24px"
				{...rest}
				ref={innerRef}
				variant={variant}
				type="number"
				css={`
					-webkit-appearance: textfield;
					-moz-appearance: textfield;
					appearance: textfield;

					&::-webkit-inner-spin-button,
					&::-webkit-outer-spin-button {
						-webkit-appearance: none;
						margin: 0;
					}
				`}
			/>
			<StepButton
				onClick={handleStepUp}
				top={0}
				paddingTop={buttonPadding}
				icon={<ChevronCollapse />}
			/>
			<StepButton
				onClick={handleStepDown}
				bottom={0}
				paddingBottom={buttonPadding}
				icon={<ChevronExpand />}
			/>
		</Box>
	);
});

NumberInput.defaultProps = {
	theme,
};

NumberInput.propTypes = {
	...Input.PropTypes,
};

const StepButton = props => (
	<Button
		tabIndex={-1}
		position="absolute"
		right={0}
		variant="minorTransparent"
		size="small"
		css={`
			height: 50%;
		`}
		{...props}
	/>
);

export { NumberInput };