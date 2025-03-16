import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, TextInputKeyPressEventData } from 'react-native';

export const OTPInput: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];

    console.log(text, index);
    if (text === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    margin: 10,
  },
});
