import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseForm from './BaseForm.js';
import CheckboxForm from '../components/CheckboxForm.js';

export default function SecondaryScreen() {
  const suspects = [
    {key: '1', name: 'Col. Mustard'},
    {key: '2', name: 'Miss White'},
    {key: '3', name: 'Miss Scarlet'},
    {key: '4', name: 'Lebanon Levi'},
    {key: '5', name: 'Lebanon Eli'},
    {key: '6', name: 'The Ex Amish'},
  ];

  return (
    <CheckboxForm />
  );
}