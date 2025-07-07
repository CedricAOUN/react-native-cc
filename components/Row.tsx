import styles from '@/styles/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
export default function Row({ children }: { children: React.ReactNode }) {
  return <View style={styles.row}>{children}</View>
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
}