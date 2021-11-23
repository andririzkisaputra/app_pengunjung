import React from 'react';
import { StyleSheet } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import configIcon from './json/icons.json';
const Icon = createIconSetFromIcoMoon(
  configIcon,
  'icomoon',
  'icomoon.ttf'
);

export const BootstrapIconsPack = {
  name: 'bootstrap',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy({}, {
    get(target, name) {
      return IconProvider(name);
    },
  });
}

const IconProvider = (name) => ({
  toReactElement: (props) => BootstrapIcons({ name, ...props }),
});

function BootstrapIcons({ name, style }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return (
    <Icon name={name} size={(height) ? height : 24} color={tintColor} style={iconStyle} />
  );
}
