import styles from '@/styles/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
export default function Column({ children }: { children: React.ReactNode }) {
  return <View style={styles.column}>{children}</View>
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
}