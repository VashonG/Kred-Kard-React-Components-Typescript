/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { Badge } from '@mui/material';
import HeroiconsMiniArrowRiImage from 'src/assets/images/Dashboard_heroicons_mini_arrow_right.svg';
import { styled } from '@mui/material/styles';
import Menu from 'src/components/Menu/Menu';
import Input1 from 'src/components/Input1/Input1';
import Table from 'src/components/Table/Table';
import Frame87 from 'src/components/Frame87/Frame87';
import Button1 from 'src/components/Button1/Button1';
import { DashboardProps } from 'src/types';

const Dashboard1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const Menu1: any = styled(Menu)(({ theme }: any) => ({
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Navigation: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1096px`,
  left: `312px`,
  top: `32px`,
});

const Input2: any = styled(Input1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  width: `240px`,
}));

const Input3: any = styled(Input1)(({ theme }: any) => ({
  alignSelf: `stretch`,
  width: `134px`,
}));

const Table1: any = styled(Table)(({ theme }: any) => ({
  width: `1096px`,
  position: `absolute`,
  left: `312px`,
  top: `484px`,
}));

const Frame93: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(241, 243, 245, 1)`,
  borderRadius: `24px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `24px`,
  boxSizing: `border-box`,
  left: `312px`,
  top: `92px`,
}));

const Frame92: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const SalesOverview: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const YourPerformanceThisM: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `4px 0px 0px 0px`,
}));

const Frame90: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `32px 0px 0px 0px`,
});

const Frame871: any = styled(Frame87)(({ theme }: any) => ({
  margin: `0px`,
}));

const Frame88: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 100px`,
});

const Frame86: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Frame96: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Q6500: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `28px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Badge1: any = styled(Badge)(({ theme }: any) => ({
  margin: `0px 0px 0px 8px`,
}));

const GrossVolume: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(134, 142, 150, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `2px 0px 0px 0px`,
}));

const Frame85: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `16px 0px 0px 0px`,
});

const Frame79: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px`,
});

const Q12K: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle13: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `90px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Jan: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame80: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q10K: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle131: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `69px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Feb: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame81: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q6K: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle132: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `38px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Mar: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame82: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q9K: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle133: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `59px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Apr: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame83: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q7K: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle134: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `51px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const May: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame84: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q6K1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 140, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle135: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(217, 140, 51, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `45px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Jun: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 140, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame89: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 100px`,
});

const Frame861: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Frame961: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Q291: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `28px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Badge2: any = styled(Badge)(({ theme }: any) => ({
  margin: `0px 0px 0px 8px`,
}));

const Transactions: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(134, 142, 150, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `2px 0px 0px 0px`,
}));

const Frame851: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-end`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `16px 0px 0px 0px`,
});

const Frame791: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px`,
});

const Q67: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle136: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `90px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Jan1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame801: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q42: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle137: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `69px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Feb1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame811: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q24: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle138: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `38px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Mar1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame821: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q36: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle139: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `59px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Apr1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame831: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q29: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle1310: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(222, 226, 230, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `51px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const May1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame841: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `25px`,
  margin: `0px 0px 0px 8px`,
});

const Q34: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 140, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Rectangle1311: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(217, 140, 51, 1)`,
  borderRadius: `9px 9px 0px 0px`,
  height: `61px`,
  width: `18px`,
  margin: `8px 0px 0px 0px`,
}));

const Jun1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(217, 140, 51, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `16px`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
}));

const Frame91: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `1096px`,
  left: `312px`,
  top: `436px`,
});

const NewCustomers: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
}));

const Frame62: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Button2: any = styled(Button1)(({ theme }: any) => ({
  margin: `0px`,
}));

const HeroiconsMiniArrowRi: any = styled('img')({
  height: `auto`,
  width: `20px`,
  margin: `0px 0px 0px -6px`,
});

const Frame101: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(241, 243, 245, 1)`,
  borderRadius: `24px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `24px`,
  boxSizing: `border-box`,
  width: `258px`,
  height: `324px`,
  left: `1150px`,
  top: `92px`,
}));

const Frame102: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Frame98: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `210px`,
  margin: `0px`,
});

const Balance: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame97: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `6px 0px 0px 0px`,
});

const Q65001: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `28px`,
  textTransform: `none`,
  margin: `0px`,
}));

const EstimatedFuturePayou: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `4px 0px 0px 0px`,
}));

const Frame100: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `210px`,
  margin: `32px 0px 0px 0px`,
});

const Payouts: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame99: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `6px 0px 0px 0px`,
});

const Q20000: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(33, 37, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `28px`,
  textTransform: `none`,
  margin: `0px`,
}));

const DepositedDec272022: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(173, 181, 189, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `4px 0px 0px 0px`,
}));

const Button3: any = styled(Button1)(({ theme }: any) => ({
  alignSelf: `stretch`,
}));

function Dashboard(props: DashboardProps): JSX.Element {
  return (
    <Dashboard1 className={props.className}>
      <Menu1 />
      <Navigation>
        <Input2 />
        <Input3 />
      </Navigation>
      <Table1 />
      <Frame93>
        <Frame92>
          <SalesOverview>{`Sales overview`}</SalesOverview>
          <YourPerformanceThisM>
            {`Your performance this month`}
          </YourPerformanceThisM>
        </Frame92>
        <Frame90>
          <Frame871 />
          <Frame88>
            <Frame86>
              <Frame96>
                <Q6500>{`$6,500`}</Q6500>
                <Badge1 />
              </Frame96>
              <GrossVolume>{`Gross volume`}</GrossVolume>
            </Frame86>
            <Frame85>
              <Frame79>
                <Q12K>{`$12k`}</Q12K>
                <Rectangle13></Rectangle13>
                <Jan>{`Jan`}</Jan>
              </Frame79>
              <Frame80>
                <Q10K>{`$10k`}</Q10K>
                <Rectangle131></Rectangle131>
                <Feb>{`Feb`}</Feb>
              </Frame80>
              <Frame81>
                <Q6K>{`$6k`}</Q6K>
                <Rectangle132></Rectangle132>
                <Mar>{`Mar`}</Mar>
              </Frame81>
              <Frame82>
                <Q9K>{`$9k`}</Q9K>
                <Rectangle133></Rectangle133>
                <Apr>{`Apr`}</Apr>
              </Frame82>
              <Frame83>
                <Q7K>{`$7k`}</Q7K>
                <Rectangle134></Rectangle134>
                <May>{`May`}</May>
              </Frame83>
              <Frame84>
                <Q6K1>{`$6k `}</Q6K1>
                <Rectangle135></Rectangle135>
                <Jun>{`Jun`}</Jun>
              </Frame84>
            </Frame85>
          </Frame88>
          <Frame89>
            <Frame861>
              <Frame961>
                <Q291>{`291`}</Q291>
                <Badge2 />
              </Frame961>
              <Transactions>{`Transactions`}</Transactions>
            </Frame861>
            <Frame851>
              <Frame791>
                <Q67>{`67`}</Q67>
                <Rectangle136></Rectangle136>
                <Jan1>{`Jan`}</Jan1>
              </Frame791>
              <Frame801>
                <Q42>{`42`}</Q42>
                <Rectangle137></Rectangle137>
                <Feb1>{`Feb`}</Feb1>
              </Frame801>
              <Frame811>
                <Q24>{`24`}</Q24>
                <Rectangle138></Rectangle138>
                <Mar1>{`Mar`}</Mar1>
              </Frame811>
              <Frame821>
                <Q36>{`36`}</Q36>
                <Rectangle139></Rectangle139>
                <Apr1>{`Apr`}</Apr1>
              </Frame821>
              <Frame831>
                <Q29>{`29`}</Q29>
                <Rectangle1310></Rectangle1310>
                <May1>{`May`}</May1>
              </Frame831>
              <Frame841>
                <Q34>{`34`}</Q34>
                <Rectangle1311></Rectangle1311>
                <Jun1>{`Jun`}</Jun1>
              </Frame841>
            </Frame851>
          </Frame89>
        </Frame90>
      </Frame93>
      <Frame91>
        <NewCustomers>{`New Customers`}</NewCustomers>
        <Frame62>
          <Button2 />
          <HeroiconsMiniArrowRi
            src={HeroiconsMiniArrowRiImage}
            loading="lazy"
            alt={'heroicons-mini/arrow-right'}
          />
        </Frame62>
      </Frame91>
      <Frame101>
        <Frame102>
          <Frame98>
            <Balance>{`Balance`}</Balance>
            <Frame97>
              <Q65001>{`$6,500`}</Q65001>
              <EstimatedFuturePayou>
                {`Estimated future payouts`}
              </EstimatedFuturePayou>
            </Frame97>
          </Frame98>
          <Frame100>
            <Payouts>{`Payouts`}</Payouts>
            <Frame99>
              <Q20000>{`$20,000`}</Q20000>
              <DepositedDec272022>
                {`Deposited Dec 27, 2022`}
              </DepositedDec272022>
            </Frame99>
          </Frame100>
        </Frame102>
        <Button3 />
      </Frame101>
    </Dashboard1>
  );
}

export default Dashboard;
