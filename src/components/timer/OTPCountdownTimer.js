import {Box, HStack, Pressable, Text} from '@gluestack-ui/themed';
import React, {useEffect, useState} from 'react';
import {apiPost} from '../../api/api-service';
import {url} from '../../api/url';

const OTPCountdownTimer = ({email}) => {
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [otpExpired, setOtpExpired] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setOtpExpired(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleResendOTP = () => {
    setTimeLeft(5 * 60);
    setOtpExpired(false);
    // Logic to resend OTP here
    apiPost(url.requestOtp, {email: email})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error.message);
      });
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <Box>
      {!otpExpired ? (
        <Text color="$textPrimary">
          Resend code:{' '}
          <Text color="$textSecondary" fontWeight="600">
            {formatTime(timeLeft)}
          </Text>
        </Text>
      ) : (
        <HStack gap="$1" alignItems="center">
          <Text color="$textPrimary">OTP has expired!</Text>
          <Pressable variant="ghost" onPress={handleResendOTP}>
            <Text color="$textSecondary">Resend OTP</Text>
          </Pressable>
        </HStack>
      )}
    </Box>
  );
};

export default OTPCountdownTimer;
