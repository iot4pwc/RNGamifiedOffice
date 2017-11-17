import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

export default class ProfileForm extends React.Component {
	render() {
		const {
			content,
			header,
			keyboardType,
			onChangeText,
			onSubmitEditing,
			placeholder,
			refFunc,
			secureTextEntry
		} = this.props;
		const errMessage = '*This is a required field';

		return (
			<View>
				<FormLabel labelStyle={styles.labelStyle}>{header}</FormLabel>
				<FormInput
					autoCapitalize={'none'}
					autoCorrect={false}
					inputStyle={styles.inputStyle}
					keyboardType={keyboardType}
					onChangeText={(newContent) => onChangeText(newContent)}
					onSubmitEditing={onSubmitEditing}
					placeholder={placeholder}
					ref={(ref) => refFunc(ref)}
					secureTextEntry={secureTextEntry}
					value={content}
				/>
				<FormValidationMessage
					labelStyle={content ? styles.invisibleErrMsgStyle : styles.visibleErrMsgStyle}>
					{errMessage}
				</FormValidationMessage>			
			</View>
		);

	}
}

ProfileForm.propTypes = {
	content: PropTypes.string,
	header: PropTypes.string.isRequired,
	keyboardType: PropTypes.string,
	onChangeText: PropTypes.func.isRequired,
	onSubmitEditing: PropTypes.func,
	placeholder: PropTypes.string,
	refFunc: PropTypes.func.isRequired,
	secureTextEntry: PropTypes.bool
}

const styles = StyleSheet.create({
  invisibleErrMsgStyle: {
  	display: 'none'
  },
  inputStyle: {
  	color: 'black',
  	'fontSize': 16
  },
  labelStyle: {
    fontSize: 16,
    marginTop: 12
  },
  visibleErrMsgStyle: {
  	color: 'sienna'
  }  
});
