import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const MoveButton = ({ testID, icon, onPress, disabled, style }) => (
  <TouchableOpacity
    testID={testID}
    style={[styles.outer, disabled && styles.outerDisabled, style]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.7}
  >
    <View style={styles.inner}>
      <Image source={icon} style={styles.icon} resizeMode="contain" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerDisabled: {
    opacity: 0.5,
  },
  inner: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    width: 88,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 56,
    height: 56,
  },
});

export default MoveButton;
