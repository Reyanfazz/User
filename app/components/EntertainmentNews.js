import React from 'react';
import VerticalList from './lists/VerticalList';
import { Text } from 'react-native';
const EntertainmentNews = ({ data }) => {
  // Check if data exists before trying to map over it
  if (!data) {
    return <Text>No data available</Text>; // Or any other appropriate message or UI
  }

  return <VerticalList title='Entertainment News' data={data} />;
};

export default EntertainmentNews;
