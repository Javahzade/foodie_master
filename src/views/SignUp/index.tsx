import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { MyInput } from '../../components/MyInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ArrowRightIcon from '../../assets/svg/arrowRightIcon.svg'
import auth from '@react-native-firebase/auth'
const SignUp = () => {
  const navigation = useNavigation();
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const onChangeName = (text: string) => {
    setNameValue(text);
  };
  const onChangeEmail = (text: string) => {
    setEmailValue(text);
  };
  const onChangePassword = (text: string) => {
    setPasswordValue(text);
  };
  const onChangeConfirmPassword = (text: string) => {
    setConfirmPasswordValue(text);
  };

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(emailValue, passwordValue)
      .then(response => {
        return response.user.updateProfile({ displayName: nameValue });
      })
      .catch(err => console.warn(err));
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <Text style={styles.h1}>Create an account</Text>
        <Text style={styles.h2}>
          Let’s help you set up your account, it won’t take long.
        </Text>
      </View>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputs}>
          <MyInput
            title="Name"
            placeholder="Enter Name"
            onChangeText={onChangeName}
          />
          <MyInput
            title="Email"
            autoCapitalize="none"
            placeholder="Enter Email"
            onChangeText={onChangeEmail}
          />
          <MyInput
            autoCapitalize="none"
            title="Password"
            placeholder="Enter Password"
            secureTextEntry
            onChangeText={onChangePassword}
          />
          <MyInput
            autoCapitalize="none"
            title="Confirm Password"
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={onChangeConfirmPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
            <View style={{ position: 'absolute', right: 14 }}>
              <ArrowRightIcon color={'white'} />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Text style={styles.h3}>
          Already a member?{' '}
          <Text style={styles.h4} onPress={() => navigation.navigate('SignIn')}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
  keyboard: {
    flex: 1,
  },
  header: {
    marginTop: 20,
  },
  inputs: {
    flex: 1,
    gap: 24,
    justifyContent: 'center',
  },
  h1: {
    color: '#000000',
    fontSize: 30,
    fontWeight: '600',
  },
  h2: {
    color: '#121212',
    fontSize: 11,
    fontWeight: '400',
  },
  h3: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  h4: {
    color: '#FF9C00',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#129575',
  },
  button: {
    height: 60,
    backgroundColor: '#129575',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  footer: {
    marginBottom: 16,
  },
});
