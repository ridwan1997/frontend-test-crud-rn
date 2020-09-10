import React from 'react';
import {StyleSheet} from 'react-native';
import {Mixins, Typography} from '../../styles';
import BaseButton from './BaseButton';

export default function DangerButton({
  text,
  onPress,
  textStyle,
  style,
  disabled,
}) {
  return (
    <BaseButton
      disabled={disabled}
      text={text}
      onPress={onPress}
      style={[styles.button, style]}
      textStyle={[styles.buttonText, textStyle]}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    ...Mixins.buttonDanger,
  },
  buttonText: {
    ...Typography.buttonDangerText,
  },
  disabled: {
    ...Mixins.disabled,
  },
});