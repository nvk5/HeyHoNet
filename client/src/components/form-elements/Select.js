import React from 'react';
import Select, { components } from 'react-select';
import '../../utils/vars/vars.scss';

const CustomValueContainer = ({ children, ...props }) => {
	return (
		<components.ValueContainer {...props}>
			<components.Placeholder {...props} >
				{props.selectProps.placeholder}
			</components.Placeholder>
			{children.map(child => (
				child && child.type !== components.Placeholder ? child : null
			))}
		</components.ValueContainer>
	);
};

const CustomClearIndicator = ({ ...props }) => {
	return (
		<components.ClearIndicator {...props} >
			&times;
		</components.ClearIndicator>
	)
}


const CustomSelect = ({ options, value, setValue, placeholder, name }) => {

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			color: state.isSelected ? '#f7f4f4' : '#131313',
			backgroundColor: state.isSelected ? '#131313' : '#f7f4f4',
			cursor: 'pointer',
			'&:hover': {
				backgroundColor: '#00C787'
			},
			// transition: 'background-color .1s ease'
		}),
		singleValue: (provided, state) => ({
			...provided,
			color: '$color-main',
			overflow: 'visible'
		}),
		container: (provided, state) => ({
			position: 'relative',
			fontSize: '1.25rem'
		}),
		control: (provided, state) => ({
			// ...provided,
			background: 'none',
			border: '1px solid #858585',
			outline: 'none',
			width: '100%',
			color: '#f7f4f4',
			resize: 'none',
			lineHeight: 1,
			height: '70px'
		}),
		valueContainer: (provided, state) => ({
			// ...provided,
			height: '100%',
			outline: 'none',
			padding: '10px 15px',
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			// lineHeight: 2
		}),
		input: (provided, state) => ({
			...provided,
			color: `$color-main`,
			// lineHeight: 1
			// height: '100%'
		}),
		dropdownIndicator: () => ({
			display: 'none'
		}),
		indicatorSeparator: (provided, state) => ({
			// ...provided,
			display: 'none'
		}),
		placeholder: (provided, state) => ({
			position: 'absolute',
			background: '#262424',
			padding: state.selectProps.menuIsOpen || state.selectProps.value ? '0 23px' : '0',
			top: state.selectProps.menuIsOpen || state.selectProps.value ? '20px' : '50%',
			color: state.selectProps.menuIsOpen || state.selectProps.value ? '#00C787' : '#f7f4f4',
			left: '20px',
			transition: 'all .3s ease-in-out',
			transform: state.selectProps.menuIsOpen || state.selectProps.value ? 'translate(10px, -30px)' : 'translateY(-50%)',
			fontSize: state.selectProps.menuIsOpen || state.selectProps.value ? '1rem' : '1.25rem',
		}),
		clearIndicator: (provided, state) => {
			return {
				position: 'absolute',
				top: '50%',
				transform: 'translateY(-50%)',
				right: 0,
				fontSize: '2.5rem',
				textAlign: 'center',
				lineHeight: '50px',
				width: '50px',
				height: '50px',
				cursor: 'pointer',
				'&:hover': {
					color: '#00C787'
				},
				// display: state.selectProps.value ? 'block' : 'none'
			}
		}
	}

	return <Select
		components={{ 
			ValueContainer: CustomValueContainer, 
			ClearIndicator: CustomClearIndicator, 
			// IndicatorsContainer: CustomIndicators 
		}}
		isClearable="true"
		classNamePrefix="edit-select"
		placeholder={placeholder}
		styles={customStyles}
		options={options}
		onChange={setValue}
		value={value}
		isSearchable="true"
		name={name}
		defaultInputValue={value}
	/>;
}

export default CustomSelect;
