import React from 'react';
import { styled } from '@mui/material/styles';
import { Button1Props } from 'src/types';

const StateDefaultLevelPri: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(217, 140, 51, 1)`,
  borderRadius: `20px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `10px 16px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
}));

const Button2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
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

function Button1(props: Button1Props): JSX.Element {
  return (
    <StateDefaultLevelPri className={props.className}>
      <Button2>{`Button`}</Button2>
    </StateDefaultLevelPri>
  );
}

export default Button1;
