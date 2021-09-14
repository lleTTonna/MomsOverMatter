import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const TermsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer style={{ backgroundColor: theme.colors.background }}>
      <View style={styles.ViewPA} pointerEvents="auto">
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
            style={styles.IconhG}
            color={theme.colors.primary}
            name="AntDesign/left"
            size={24}
          />
        </Touchable>
      </View>

      <View style={styles.View_2p} pointerEvents="auto">
        <Text style={[styles.TextHQ, { color: theme.colors.strong }]}>
          {'Terms & Conditions'}
        </Text>
        <Divider
          style={styles.Divideri1}
          height={1}
          color={theme.colors.primary}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <Text style={[styles.TexttH, { color: theme.colors.strong }]}>
          {
            '1. General Information\n\n1.1 MomsOverMatter\n\nPlease read these terms and conditions carefully. The terms “lleTTonna,” “us” or “we” refers to lleTTonna Inc; “you” refers to the individual using MomsOverMatter.\n\nThese Terms of Use (thenceforth referred to as “Terms”) contain the terms and conditions on which we supply content, products or services throughout our MomsOverMatter resources, including the MomsOverMatter app (collectively referred to as “MomsOverMatter”). By using MomsOverMatter, you indicate that you are the accepting and agreeing to abide by these Terms. If this is not the case, please refrain from using MomsOverMatter.\n\nAll correspondence, including queries, should be sent to our email address: llettonna@gmail.com.\n\n1.2 Basis of License\n\nThese Terms and any referenced policies or agreements referenced thereafter, including our Privacy Policy, establish the entirety of the agreement between you and us for the supply of MomsOverMatter. In order to participate in certain Products, you may be required to agree to additional terms and conditions; those additional terms are hereby incorporated into these Terms. The additional terms shall take precedence if such terms are inconsistent with these Terms.\n\n1.3 Your Consent\n\nIn utilizing MomsOverMatter, you agree that you understand the essence of the MomsOverMatter app, the Terms, and our Privacy Policy. If you are a minor, you should only be using MomsOverMatter if it has been suggested by your health care provider and your parents are aware of your usage. If you are under the age of 13, you should have a parent/guardian review and agree to these Terms upon discussing with you.\n\n1.4 Right to Change Terms\n\nlleTTonna reserves the right to change or update these Terms, or any other of our policies or practices, at any time, and will notify users by posting such changed or updated Terms on this page; changes or updates will be effective immediately upon posting to www.llettonna.com. Your continued use of MomsOverMatter constitutes your agreement to abide by the terms as changed. Under certain circumstances, we may also choose to notify you of changes or updates to our Terms by additional means, such as pop-up or push notifications within MomsOverMatter or email.\n\n2. Prohibited Use of MomsOverMatter\n\nYou agree to the following:\n\nTo not uphold, post, email or otherwise send, transmit, or introduce any material that contains software viruses or any other computer code, files or programs designed to damage, interrupt, harm, destroy, or limit the functionality of any computer software, hardware, or equipment linked directly or indirectly with MomsOverMatter or MomsOverMatter itself;\nTo not interfere with the servers or networks underlying or connected to MomsOverMatter;\nTo not violate any of the procedures, policies or regulations of networks connected to MomsOverMatter;\nTo not impersonate any other person while using MomsOverMatter, conduct yourself in an offensive manner while using MomsOverMatter, or use MomsOverMatter for any harmful, illegal, or immoral, purposes;\nTo not access MomsOverMatter in an unauthorized manner;\nTo not use MomsOverMatter for any purposes related to scientific research, analysis, or evaluation of MomsOverMatter without the written consent of lleTTonna;\nBy breaching any of the provisions of this section, you may commit a criminal offense under applicable laws. We may report any breach to the relevant law authorities by disclosing your identity to them. In the event of such a breach, we will cease your right to use MomsOverMatter immediately.\n\n3. Information Provided by MomsOverMatter\n\n3.1 Copyright\n\ni) Unless indicated otherwise, all material (including software and content whether downloaded or not) contained in MomsOverMatter is owned by lleTTonna (or our affiliates and/or third-party licensors, where applicable). You agree and acknowledge that the materials are valuable property and that other than any specific and limited licenses for use of such material, you shall not acquire any ownership rights in or to MomsOverMatter. Without our prior written permission, the materials may not be used except as provided for in these Terms and any other relevant terms and conditions provided to you. \nii) Unless explicitly indicated as downloadable, audio content from MomsOverMatter may not be downloadable or copied for MomsOverMatter or any device. \niii) MomsOverMatter is not intended for your commercial use. Commercial advertisements, affiliate links, and other forms of solicitation may be removed by us without notice and may result in termination of all privileges. You are prohibited from using the materials used in or on MomsOverMatter for commercial purposes without obtaining a written license to do so from lleTTonna. Material from MomsOverMatter may not be copied, distributed, republished, or transmitted in any way without our prior written consent. Any unauthorized use or violation of these Terms will result in the immediate and automatic termination of your right to use MomsOverMatter and may subject you to legal liability. You agree not to use MomsOverMatter for any illegal purposes (including, without limitation, unlawful, harassing, libelous, invasion of another’s privacy, abusive, threatening, or obscene purposes) and you agree that you will comply with all laws, rules, and regulations pertaining to your usage of MomsOverMatter. Appropriate legal action may be taken for any unauthorized or illegal use of MomsOverMatter. \n\niv) You may not otherwise download, create derivative works from, display, copy, reproduce, distribute, transfer, sell, modify, perform, or otherwise exploit any code, data, content, or materials in MomsOverMatter. If you make other use of MomsOverMatter, or the content, code, data, or materials thereon (except as otherwise provided above) you may violate copyright and other laws of Canada, and other countries as well as applicable provincial laws, and may be subject to liability for such unauthorized use. lleTTonna will enforce its intellectual property rights to the fullest extent of the law – including seeking criminal prosecution. \n3.2 Trademarks\n\nThe trademarks of MomsOverMatter include MomsOverMatter, the MomsOverMatter logo, and all other MomsOverMatter products or service marks. All intellectual property, other trademarks, images, product, logos, and company names displayed or referred to on or in MomsOverMatter are the property of their respective owners. Nothing grants you any license or right to use, alter, or remove or copy such material. You are strictly prohibited from thee misuse of the trademarks displayed on MomsOverMatter. lleTTonna will enforce its trademark rights to the fullest extent of the law.\n\n4. Accessibility and Availability of MomsOverMatter\n\nAlthough we aim to offer you the best service possible, we make no promise that MomsOverMatter can or will meet your requirements and we cannot guarantee that MomsOverMatter will be fault-free. If a fault occurs in MomsOverMatter, please report it to us at llettonna@gmail.com and we will review your complaint and, where we determine it is appropriate to do so, correct the fault. While we address the fault, we may suspend access to MomsOverMatter (if the need arises). We will not be held liable to you if MomsOverMatter is unavailable for a commercially reasonable period of time. \n\nYour access to MomsOverMatter may be occasionally restricted to allow for repairs, maintenance, or the implementation and introduction of new updates. We will restore MomsOverMatter as soon as we (reasonably) can.\n\n5. Material and Product Disclaimer\n\nThe information contained in MomsOverMatter is for general information purposes only. While we endeavor to keep the information up-to-date and correct, we make no representations or warranties of any kind – express or implied – about the completeness, accuracy, reliability or availability with respect to MomsOverMatter or the information contained on MomsOverMatter for any purpose. Any reliance you place on such information is therefore strictly at your own risk.\n\nMomsOverMatter should not be considered a replacement or substitute for the standard practices, skill, professional judgement, and expertise of a health care professional. lleTTonna will not be monitoring or examining information you may enter into MomsOverMatter. You agree that lleTTonna is not responsible for evaluating, examining, or validating the accuracy, content, or appropriateness of any information entered into, transferred by, or delivered by MomsOverMatter.\n\n6. Health and Medical Disclaimer \n\nlleTTonna is a provider of online resources about postpartum mental health. We are not a health care or medical device provider, nor should MomsOverMatter be considered medical advice. Only your physician or other health care provider upholds this role. \n\nAny advice or other materials in MomsOverMatter are intended for general information purposes only. They are not intended to be relied upon and are not a substitute for professional medical advice based on your individual condition and circumstances. The advice and other materials we make available are intended to support the relationship between you and your healthcare provider, not replace it. We are not liable or responsible for any consequences as a result of you having read, being told about such advice, or other materials, as you assume full responsibility for your decisions and actions. In particular, to the fullest extent permitted by law, we make no representation or warranties about the completeness, accuracy, or suitability for any purpose of the advice, other materials, and information published as part of MomsOverMatter. \n\nYou agree that, in using MomsOverMatter, you accept all responsibility and liability for your use and acknowledge that lleTTonna is not liable in any way for your use of MomsOverMatter.\n\n7. End User License\n\nMomsOverMatter grants you a limited, revocable, non-exclusive, license to make personal, non-comercial use of MomsOverMatter; subject to the terms of this license agreement (“License Agreement”), as set out in this section and these other Terms.\n\nMomsOverMatter contains or embodies copyrighted material, proprietary material, or other intellectual property of MomsOverMatter or its licensors. All rights, titles and ownership in MomsOverMatter remain with lleTTonna or its licensors, when applicable. The rights to download and use MomsOverMatter are licensed to you, not sold to you, hence you have no rights to them other than to use them in accordance with this License Agreement and our other Terms. \n\nYou agree that you will not assist or permit any third party to:\n\nCopy, store, transmit, reverse-engineer, emulate, de-compile, modify, reproduce, alter, or disassemble MomsOverMatter in any way;\nCreate any derivative works of MomsOverMatter;\nUse MomsOverMatter or any part of them to create any software product that can be used to create software applications of any nature whatsoever;\nRent, loan, lease, make available to the public, sell, or distribute MomsOverMatter in whole or in part;\nTamper with MomsOverMatter or circumvent any technology used by lleTTonna or its licensors to protect any content accessible through MomsOverMatter;\nCircumvent any territorial restrictions applied to MomsOverMatter; \nUse MomsOverMatter in a way that violates the other Terms or this License Agreement.\n8. Feedback for MomsOverMatter \n\nYou may choose to, or we may invite you to submit comments or ideas about the Services, including – without limitation – enquiries to improve the Services or our products. By submitting any feedback, you agree that your disclosure is unsolicited, gratuitous, and without restriction, and will not place lleTTonna under fiduciary or other obligation, and that we are free to use such feedback without any additional compensation to you and/or disclose such feedback on a non-confidential basis, or otherwise to anyone.\n\n9. Limitation of Indemnity and Liability \n\nYour use and access of MomsOverMatter is made “as is”, without any additional warranty, support, or representations, including as to the completeness, accuracy, or currency of MomsOverMatter or its content. lleTTonna expressly disclaims all representations, warranties, covenants, and conditions – expressed or implied – by operation of law or otherwise, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. \n\nlleTTonna makes no representation or warranty that your use or access of MomsOverMatter will be uninterrupted, error-free, or that the functions of MomsOverMatter will meet your expectations or requirements. \n\nYou agree that in no event will lleTTonna, its employees, agents, suppliers, members, directors, or other representatives, have any responsibility or liability in connection with MomsOverMatter or these terms for any losses or damages whatsoever, whether based on tort (including negligence), contract (including fundamental breach or breach of a fundamental term), other legal or equitable basis, without limitation direct, indirect, special, punitive, exemplary, or consequential damages or other damages (including without limitation damages for harm to business, loss of information or data, loss of profit, loss of savings or revenue, loss of goodwill or other economic loss), arising from or in connection with or relating to the use of or access to, MomsOverMatter, or failure of MomsOverMatter, even if lleTTonna has been advised of the possibility of such loss or damage or if either were foreseeable. \n\nYou will indemnify and hold lleTTonna harmless from and against any claims brought by third parties arising out of your use or access of MomsOverMatter, your placement or transmission of any message, content, information, or other submissions through MomsOverMatter, and any breach of these Terms by you, including any use of access of MomsOverMatter other than as expressly authorized in these Terms. You agree that lleTTonna will have no liability in connection with any such breach or unauthorized use, and agree to indemnify against any and all resulting loss, expenses, damages, judgements, awards, costs, and lawyers’ fees of lleTTonna in connection therewith.\n\n10. General Terms and Conditions\n\n10.1 No Waiver\n\n\nNo waiver of, or consent to depart from the requirements of any provision of these Terms will be binding unless it is in writing and signed by lleTTonna. If we delay exercising or fail to exercise or enforce any right available to use under these Terms, such delay or failure does not constitute a waiver of that right or any other rights under these Terms. \n\n10.2 Force Majeure\n\nWe will not be liable to you for any lack of performance, the unavailability or failure of MomsOverMatter, or for any failure or delay by us to comply with these Terms, where such lack, unavailability, or failure arises from any cause beyond our reasonable control. \n\n10.3 Assignment by Us\n\nMomsOverMatter may transfer its obligations and rights under these Terms to any company, firm, or person at any time if it does not materially affect your rights under it. You cannot transfer your obligations or rights under these Terms to anyone else. These Terms are personal to you and no third party is entitled to benefit under these Terms except as stated in here. \n\n10.4 Communication of Notices\n\nUnless otherwise specifically indicated, all notices given by you to join us must be given to lleTTonna at llettonna@gmail.com. We may give notice to you at the email address you provide to us when you register or via pop-up or push notifications. \n\n10.5 Severability\n\nIf for any reason a court of competent jurisdiction finds any provision of these Terms or portion thereof to be unenforceable, that provision shall be enforced to the maximum extent permissible so, as to effect the intent of these Terms, and the remainder of these Terms shall continue in full (force and effect). \n\n10.6 Entire Agreement\n\n\nThese Terms, and any document(s) expressly referred to in them, constitute the entirety of the agreement between us and supersede all previous discussion, previous arrangement, correspondence, negotiations, understanding, or agreement between us relating to their subject matter. We each acknowledge that neither of us rely on, or will have any remedies in respect of, any representation or warranty (whether made negligently or innocently) that is not set out in these Terms or the document(s) referred to in them. \n\nThese Terms were last updated on July 15th, 2020, effective immediately.'
          }
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconhG: {
    width: 24,
    height: 24,
  },
  ViewPA: {
    minHeight: 50,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextHQ: {
    fontSize: 26,
    fontFamily: 'PoppinsBold',
    textAlign: 'center',
  },
  Divideri1: {
    height: 1,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 10,
    marginTop: 10,
  },
  View_2p: {
    minHeight: 50,
    marginTop: 25,
  },
  TexttH: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'PoppinsRegular',
  },
});

export default withTheme(TermsScreen);
