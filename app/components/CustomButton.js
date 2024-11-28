import { Button } from 'tamagui';
import React from 'react';
import { tokens } from '../../tamagui.config';

const CustomButton = ({ title, onPress }) => {
  return (
    <Button 
      w={218} 
      h={55} 
      bg={tokens.color.Senary}
      onPress={onPress}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
