import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const LowMoodScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer style={{ backgroundColor: theme.colors.background }}>
      <View style={styles.ViewHH} pointerEvents="auto">
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
            style={styles.IconRF}
            color={theme.colors.primary}
            name="AntDesign/left"
            size={24}
          />
        </Touchable>
      </View>

      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <View pointerEvents="auto">
          <Text style={[styles.TextLv, { color: theme.colors.strong }]}>
            {'Low Mood After Baby'}
          </Text>
          <Divider
            style={styles.DividerGA}
            height={1}
            color={theme.colors.primary}
          />
        </View>

        <View
          style={[styles.ViewTD, { backgroundColor: theme.colors.secondary }]}
          pointerEvents="auto"
        >
          <Text style={[styles.Text_5H, { color: theme.colors.strong }]}>
            {
              'If you want, take our 2-minute questionnaire below!\n\nIf not, no worries! Our evidence-based information on how to overcome depression and anxiety can be found below!'
            }
          </Text>

          <View
            style={[
              styles.View_5L,
              { backgroundColor: theme.colors.background },
            ]}
            pointerEvents="auto"
          >
            <Button
              onPress={async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://llettonna.com/epds/'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.ButtonOr, { borderColor: theme.colors.strong }]}
              color={theme.colors.primary}
              type="solid"
              labelColor={theme.colors.background}
            >
              {'Take Questionnaire'}
            </Button>
            <Image
              style={styles.ImageVV}
              source={Images.Epds1}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.ViewQM} pointerEvents="auto">
          <Text style={[styles.TextLW, { color: theme.colors.strong }]}>
            {'What is Postpartum Depression?'}
          </Text>
          <Divider
            style={styles.DividerQY}
            height={1}
            color={theme.colors.primary}
          />
          <Text style={[styles.Text_8M, { color: theme.colors.strong }]}>
            {
              'Postpartum depression (PPD) is the most common complication of childbirth and affects up to 1 in 5 women.\n\nWhile up to 75% of new moms experience the postpartum “baby blues” after childbirth (briefer mood swings, crying spells, anxiety, insomnia) for up to two weeks, these symptoms do not last most of the day every day, or for more than two weeks.\n\nHowever, some mothers will experience more persistent and severe symptoms that cause substantial distress, are present most of the day every day, and last for two weeks or more.\n\nSuch difficulties are referred to as PPD and can occur anytime during pregnancy or up to one year after childbirth/adoption. These symptoms require treatment, and if left untreated can negatively impact the mother, baby, and family. On the following pages, we outline some steps women can take to begin their journey to recovery from PPD. These are based on evidence from clinical research studies from around the world.'
            }
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconRF: {
    width: 24,
    height: 24,
  },
  ViewHH: {
    minHeight: 50,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextLv: {
    fontSize: 26,
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
  },
  DividerGA: {
    height: 1,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 10,
    marginTop: 10,
  },
  Text_5H: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'PoppinsRegular',
  },
  ButtonOr: {
    paddingLeft: 28,
    paddingRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 54,
  },
  ImageVV: {
    width: 143,
    height: 181,
    marginTop: 34,
    marginBottom: 34,
    left: 80,
  },
  View_5L: {
    minHeight: 50,
    paddingLeft: 34,
    paddingRight: 34,
    paddingTop: 34,
  },
  ViewTD: {
    minHeight: 50,
    marginTop: 25,
  },
  TextLW: {
    fontSize: 20,
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
  },
  DividerQY: {
    height: 1,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 10,
    marginTop: 10,
  },
  Text_8M: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'PoppinsRegular',
  },
  ViewQM: {
    minHeight: 50,
    marginTop: 25,
  },
});

export default withTheme(LowMoodScreen);
