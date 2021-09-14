import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const IntroScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer style={{ backgroundColor: theme.colors.background }}>
      <View style={styles.ViewbD} pointerEvents="auto">
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            style={styles.IconIK}
            color={theme.colors.primary}
            name="AntDesign/left"
            size={24}
          />
        </Touchable>
      </View>

      <View style={styles.Viewba} pointerEvents="auto">
        <Text style={[styles.TextY2, { color: theme.colors.strong }]}>
          {'Click below to learn more about your feelings after baby.'}
        </Text>
      </View>

      <View style={styles.ViewO1} pointerEvents="auto">
        <Text style={[styles.Textlq, { color: theme.colors.strong }]}>
          {
            'Designed in collaboration with healthcare\nprofessionals from McMaster University.'
          }
        </Text>
      </View>
      <Image style={styles.ImageED} source={Images.Crib} resizeMode="cover" />
      <View style={styles.ViewIb} pointerEvents="auto">
        <Button
          onPress={() => {
            try {
              navigation.navigate('LowMoodScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[styles.ButtonHX, { borderColor: theme.colors.strong }]}
          color={theme.colors.primary}
          type="solid"
          labelColor={theme.colors.background}
        >
          {'Feeling Down?'}
        </Button>
      </View>

      <View style={styles.ViewvY} pointerEvents="auto">
        <Button
          style={[styles.ButtonEd, { borderColor: theme.colors.strong }]}
          color={theme.colors.primary}
          type="solid"
          labelColor={theme.colors.background}
        >
          {'Feeling Worried?'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconIK: {
    width: 24,
    height: 24,
  },
  ViewbD: {
    minHeight: 50,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextY2: {
    fontFamily: 'PoppinsSemiBold',
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  Viewba: {
    minHeight: 50,
    marginTop: 25,
  },
  Textlq: {
    marginTop: 50,
    alignSelf: 'flex-start',
    fontFamily: 'PoppinsMedium',
    marginLeft: 15,
    marginRight: 15,
    textAlign: 'left',
    fontSize: 14,
  },
  ViewO1: {
    minHeight: 50,
  },
  ImageED: {
    width: 160,
    height: 100,
    top: 50,
    marginBottom: 50,
    left: 100,
  },
  ButtonHX: {
    paddingLeft: 28,
    paddingRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 54,
  },
  ViewIb: {
    minHeight: 50,
    marginTop: 50,
    paddingLeft: 34,
    paddingRight: 34,
  },
  ButtonEd: {
    paddingLeft: 28,
    paddingRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 54,
    marginBottom: 100,
  },
  ViewvY: {
    minHeight: 50,
    paddingLeft: 34,
    paddingRight: 34,
    marginTop: 25,
  },
});

export default withTheme(IntroScreen);
