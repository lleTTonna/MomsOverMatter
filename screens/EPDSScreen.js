import React from 'react';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const EPDSScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer style={{ backgroundColor: theme.colors.background }}>
      <View style={styles.ViewdK} pointerEvents="auto">
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
            style={styles.IconlP}
            color={theme.colors.primary}
            name="AntDesign/left"
            size={24}
          />
        </Touchable>
      </View>

      <View style={styles.ViewVp} pointerEvents="auto">
        <Text style={[styles.Text_93, { color: theme.colors.strong }]}>
          {'Edinburgh Postnatal Depression Scale (EPDS)'}
        </Text>
      </View>
      <Divider style={styles.DividerVN} color={theme.colors.strong} />
      <ScrollView
        contentContainerStyle={styles.ScrollViewhAContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
      >
        <Text style={[styles.TextI9, { color: theme.colors.strong }]}>
          {
            '1. In the past 7 days, I have been able to laugh and see the funny side of things'
          }
        </Text>

        <View style={styles.View_2K}>
          <Touchable style={styles.TouchableBM}>
            <View
              style={[
                styles.Viewii,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextIa, { color: theme.colors.background }]}>
                {'As much as I always could'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableVx}>
            <View
              style={[
                styles.Viewtx,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextPy, { color: theme.colors.strong }]}>
                {'Not quite so much now'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableYC}>
            <View
              style={[
                styles.ViewPb,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.Textfo, { color: theme.colors.strong }]}>
                {'Definitely not so much now'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchableve}>
            <View
              style={[
                styles.View_7x,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextQJ, { color: theme.colors.strong }]}>
                {'Not at all'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.DividereB} color={theme.colors.strong} />
        <Text style={[styles.Texttf, { color: theme.colors.strong }]}>
          {
            '2. In the past 7 days, I have looked forward with enjoyment to things'
          }
        </Text>

        <View style={styles.Viewbz}>
          <Touchable style={styles.Touchableml}>
            <View
              style={[
                styles.View_4a,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextNN, { color: theme.colors.background }]}>
                {'As much as I ever did'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableCs}>
            <View
              style={[
                styles.ViewJy,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextOx, { color: theme.colors.strong }]}>
                {'Rather less than I used to'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablepn}>
            <View
              style={[
                styles.View_9x,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.Texty8, { color: theme.colors.strong }]}>
                {'Definitely less than I used to'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_12}>
            <View
              style={[
                styles.View_7L,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextoU, { color: theme.colors.strong }]}>
                {'Hardly at all'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.Dividersm} color={theme.colors.strong} />
        <Text style={[styles.Textja, { color: theme.colors.strong }]}>
          {
            '3. In the past 7 days, I have blamed myself unnecessarily when things went wrong'
          }
        </Text>

        <View style={styles.ViewL1}>
          <Touchable style={styles.TouchablekW}>
            <View
              style={[
                styles.ViewDs,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.Textbz, { color: theme.colors.background }]}>
                {'Yes, most of the time'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablevs}>
            <View
              style={[
                styles.ViewIi,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextzZ, { color: theme.colors.strong }]}>
                {'Yes, some of the time'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchablecZ}>
            <View
              style={[
                styles.ViewtC,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextF3, { color: theme.colors.strong }]}>
                {'Not very often'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableNb}>
            <View
              style={[
                styles.Viewyy,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextMT, { color: theme.colors.strong }]}>
                {'No, never'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.DivideraG} color={theme.colors.strong} />
        <Text style={[styles.Text_2F, { color: theme.colors.strong }]}>
          {
            '4. In the past 7 days, I have been anxious or worried for no good reason'
          }
        </Text>

        <View style={styles.Viewfp}>
          <Touchable style={styles.TouchableaQ}>
            <View
              style={[
                styles.View_9d,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.Textfr, { color: theme.colors.background }]}>
                {'No, not at all'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_6R}>
            <View
              style={[
                styles.ViewYv,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextwD, { color: theme.colors.strong }]}>
                {'Hardly ever'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablek8}>
            <View
              style={[
                styles.Viewr8,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextKt, { color: theme.colors.strong }]}>
                {'Yes, sometimes'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableoU}>
            <View
              style={[
                styles.View_44,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextBZ, { color: theme.colors.strong }]}>
                {'Yes, very often'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.Divideryc} color={theme.colors.strong} />
        <Text style={[styles.Textj9, { color: theme.colors.strong }]}>
          {
            '5. In the past 7 days, I have felt scared or panicky for no very good reason'
          }
        </Text>

        <View style={styles.ViewLT}>
          <Touchable style={styles.TouchableM2}>
            <View
              style={[
                styles.ViewOt,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.Textt1, { color: theme.colors.background }]}>
                {'Yes, quite a lot'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablebb}>
            <View
              style={[
                styles.ViewF5,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TexthI, { color: theme.colors.strong }]}>
                {'Yes, sometimes'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableIf}>
            <View
              style={[
                styles.ViewXD,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.Texthe, { color: theme.colors.strong }]}>
                {'No, not much'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchablePo}>
            <View
              style={[
                styles.View_4o,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextWL, { color: theme.colors.strong }]}>
                {'No, not at all'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.DividerB9} color={theme.colors.strong} />
        <Text style={[styles.TextI6, { color: theme.colors.strong }]}>
          {'6. In the past 7 days, things have been getting on top of me'}
        </Text>

        <View style={styles.View_0Y}>
          <Touchable style={styles.TouchableL7}>
            <View
              style={[
                styles.ViewUZ,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextaB, { color: theme.colors.background }]}>
                {'Yes, most of the time I haven’t been able to cope'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablec7}>
            <View
              style={[
                styles.VieweM,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.Texthu, { color: theme.colors.strong }]}>
                {'Yes, sometimes I haven’t been coping as well as usual'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchablenC}>
            <View
              style={[
                styles.ViewTb,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextvA, { color: theme.colors.strong }]}>
                {'No, most of the time I have coped quite well'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchablemz}>
            <View
              style={[
                styles.ViewJD,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextDk, { color: theme.colors.strong }]}>
                {'No, I have been coping as well as ever'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.Dividerlm} color={theme.colors.strong} />
        <Text style={[styles.TextO7, { color: theme.colors.strong }]}>
          {
            '7. In the past 7 days, I have been so unhappy that I have had difficulty sleeping'
          }
        </Text>

        <View style={styles.Viewjb}>
          <Touchable style={styles.TouchableEB}>
            <View
              style={[
                styles.Viewv0,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextQD, { color: theme.colors.background }]}>
                {'Yes, most of the time'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableXX}>
            <View
              style={[
                styles.ViewuW,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.Text_7j, { color: theme.colors.strong }]}>
                {'Yes, sometimes'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchablewY}>
            <View
              style={[
                styles.Viewnn,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextIL, { color: theme.colors.strong }]}>
                {'Not very often'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableMV}>
            <View
              style={[
                styles.ViewA6,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextAp, { color: theme.colors.strong }]}>
                {'No, not at all'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.DividerV7} color={theme.colors.strong} />
        <Text style={[styles.Textsg, { color: theme.colors.strong }]}>
          {'8. In the past 7 days, I have felt sad or miserable'}
        </Text>

        <View style={styles.Viewpg}>
          <Touchable style={styles.TouchableKi}>
            <View
              style={[
                styles.Viewfu,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TexttH, { color: theme.colors.background }]}>
                {'Yes, most of the time'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableWb}>
            <View
              style={[
                styles.ViewSt,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextuA, { color: theme.colors.strong }]}>
                {'Yes, quite often'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchableoy}>
            <View
              style={[
                styles.Viewbx,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextTB, { color: theme.colors.strong }]}>
                {'Not very often'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_8A}>
            <View
              style={[
                styles.ViewNg,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.TextjY, { color: theme.colors.strong }]}>
                {'No, not at all'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.DividerUB} color={theme.colors.strong} />
        <Text style={[styles.TextZj, { color: theme.colors.strong }]}>
          {
            '9. In the past 7 days, I have been so unhappy that I have been crying'
          }
        </Text>

        <View style={styles.View_3H}>
          <Touchable style={styles.Touchablesm}>
            <View
              style={[
                styles.ViewKb,
                {
                  backgroundColor: theme.colors.strong,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.TextIZ, { color: theme.colors.background }]}>
                {'Yes, most of the time'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_2N}>
            <View
              style={[
                styles.ViewpK,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text style={[styles.Textq1, { color: theme.colors.strong }]}>
                {'Yes, quite often'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableVJ}>
            <View
              style={[
                styles.ViewQS,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.Text_5p, { color: theme.colors.strong }]}>
                {'Not very often'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchableso}>
            <View
              style={[
                styles.Viewro,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text style={[styles.Text_2L, { color: theme.colors.strong }]}>
                {'No, not at all'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.DivideraJ} color={theme.colors.strong} />
        <Button
          onPress={() => {
            try {
              navigation.navigate('EPDSScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[styles.Buttonj5, { borderColor: theme.colors.strong }]}
          color={theme.colors.primary}
          type="solid"
          labelColor={theme.colors.background}
        >
          {'See Results'}
        </Button>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconlP: {
    width: 24,
    height: 24,
  },
  ViewdK: {
    minHeight: 50,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Text_93: {
    fontFamily: 'PoppinsSemiBold',
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  ViewVp: {
    minHeight: 50,
    marginTop: 25,
  },
  DividerVN: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  TextI9: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  TextIa: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewii: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableBM: {
    marginTop: 8,
    width: 250,
  },
  TextPy: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewtx: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableVx: {
    marginTop: 8,
    width: 250,
  },
  Textfo: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewPb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableYC: {
    marginTop: 8,
    width: 250,
  },
  TextQJ: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  View_7x: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchableve: {
    marginTop: 8,
    width: 250,
  },
  View_2K: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DividereB: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  Texttf: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  TextNN: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  View_4a: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchableml: {
    marginTop: 8,
    width: 250,
  },
  TextOx: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewJy: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableCs: {
    marginTop: 8,
    width: 250,
  },
  Texty8: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  View_9x: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablepn: {
    marginTop: 8,
    width: 250,
  },
  TextoU: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  View_7L: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_12: {
    marginTop: 8,
    width: 250,
  },
  Viewbz: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Dividersm: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  Textja: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  Textbz: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewDs: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablekW: {
    marginTop: 8,
    width: 250,
  },
  TextzZ: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewIi: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablevs: {
    marginTop: 8,
    width: 250,
  },
  TextF3: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewtC: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablecZ: {
    marginTop: 8,
    width: 250,
  },
  TextMT: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewyy: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableNb: {
    marginTop: 8,
    width: 250,
  },
  ViewL1: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DivideraG: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  Text_2F: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  Textfr: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  View_9d: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableaQ: {
    marginTop: 8,
    width: 250,
  },
  TextwD: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewYv: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_6R: {
    marginTop: 8,
    width: 250,
  },
  TextKt: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewr8: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablek8: {
    marginTop: 8,
    width: 250,
  },
  TextBZ: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  View_44: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableoU: {
    marginTop: 8,
    width: 250,
  },
  Viewfp: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Divideryc: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  Textj9: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  Textt1: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewOt: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableM2: {
    marginTop: 8,
    width: 250,
  },
  TexthI: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewF5: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablebb: {
    marginTop: 8,
    width: 250,
  },
  Texthe: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewXD: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableIf: {
    marginTop: 8,
    width: 250,
  },
  TextWL: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  View_4o: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablePo: {
    marginTop: 8,
    width: 250,
  },
  ViewLT: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DividerB9: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  TextI6: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  TextaB: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewUZ: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableL7: {
    marginTop: 8,
    width: 250,
  },
  Texthu: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  VieweM: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablec7: {
    marginTop: 8,
    width: 250,
  },
  TextvA: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewTb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablenC: {
    marginTop: 8,
    width: 250,
  },
  TextDk: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewJD: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablemz: {
    marginTop: 8,
    width: 250,
  },
  View_0Y: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Dividerlm: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  TextO7: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  TextQD: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewv0: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableEB: {
    marginTop: 8,
    width: 250,
  },
  Text_7j: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewuW: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableXX: {
    marginTop: 8,
    width: 250,
  },
  TextIL: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewnn: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablewY: {
    marginTop: 8,
    width: 250,
  },
  TextAp: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewA6: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableMV: {
    marginTop: 8,
    width: 250,
  },
  Viewjb: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DividerV7: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  Textsg: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  TexttH: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewfu: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableKi: {
    marginTop: 8,
    width: 250,
  },
  TextuA: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewSt: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableWb: {
    marginTop: 8,
    width: 250,
  },
  TextTB: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewbx: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchableoy: {
    marginTop: 8,
    width: 250,
  },
  TextjY: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewNg: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_8A: {
    marginTop: 8,
    width: 250,
  },
  Viewpg: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DividerUB: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  TextZj: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
  },
  TextIZ: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewKb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablesm: {
    marginTop: 8,
    width: 250,
  },
  Textq1: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewpK: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_2N: {
    marginTop: 8,
    width: 250,
  },
  Text_5p: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  ViewQS: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableVJ: {
    marginTop: 8,
    width: 250,
  },
  Text_2L: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'PoppinsRegular',
  },
  Viewro: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchableso: {
    marginTop: 8,
    width: 250,
  },
  View_3H: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DivideraJ: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  Buttonj5: {
    paddingLeft: 28,
    paddingRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 54,
    marginBottom: 100,
  },
  ScrollViewhAContent: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});

export default withTheme(EPDSScreen);
