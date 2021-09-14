import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Container,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles.ViewTF}>
        <Image
          style={styles.ImageSF}
          resizeMode="center"
          source={Images.IsoIcon}
        />
        <Text style={[styles.TextRL, { color: theme.colors.primary }]}>
          {'MomsOverMatter'}
        </Text>

        <Text style={[styles.TextFb, { color: theme.colors.strong }]}>
          {'You deserve to be a happy mother.'}
        </Text>
      </View>

      <View style={styles.Viewh3}>
        <Container
          style={{ borderRadius: theme.roundness }}
          elevation={3}
          useThemeGutterPadding={false}
        >
          <Button
            onPress={() => {
              try {
                navigation.navigate('IntroScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.Buttonsb, { borderColor: theme.colors.strong }]}
            color={theme.colors.primary}
            labelColor={theme.colors.background}
            type="solid"
          >
            {'Begin Your Journey'}
          </Button>

          <Text style={[styles.Textff, { color: theme.colors.medium }]}>
            {
              '*By using MomsOverMatter, I confirm that I have read and accepted the Terms & Conditions and Privacy Policy.'
            }
          </Text>
        </Container>
      </View>

      <View style={styles.View_4Z}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('TermsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablec2}
        >
          <Text style={[styles.Text_5X, { color: theme.colors.strong }]}>
            {'Terms & Conditions'}
          </Text>
        </Touchable>
      </View>

      <View
        style={[styles.Viewva, { backgroundColor: theme.colors.background }]}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('PrivacyScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.Touchablefr}
        >
          <Text style={[styles.TextaH, { color: theme.colors.strong }]}>
            {'Privacy Policy'}
          </Text>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageSF: {
    opacity: 0.9,
    width: 100,
    height: 100,
    marginTop: '50%',
  },
  TextRL: {
    fontFamily: 'PoppinsBold',
    fontSize: 36,
  },
  TextFb: {
    marginTop: 4,
    fontFamily: 'PoppinsMedium',
  },
  ViewTF: {
    alignItems: 'center',
    flexGrow: 1,
    bottom: 100,
  },
  Buttonsb: {
    paddingLeft: 28,
    paddingRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 54,
  },
  Textff: {
    fontSize: 10,
    fontFamily: 'PoppinsRegular',
    marginTop: 10,
  },
  Viewh3: {
    width: '100%',
    paddingLeft: 34,
    paddingRight: 34,
    bottom: 50,
  },
  Text_5X: {
    fontFamily: 'PoppinsBold',
    fontSize: 14,
  },
  Touchablec2: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    width: '60%',
  },
  View_4Z: {
    alignItems: 'center',
  },
  TextaH: {
    fontFamily: 'PoppinsBold',
    fontSize: 14,
    marginBottom: 0,
  },
  Touchablefr: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    width: '60%',
  },
  Viewva: {
    alignItems: 'center',
    marginBottom: 100,
    marginTop: 15,
  },
});

export default withTheme(WelcomeScreen);
