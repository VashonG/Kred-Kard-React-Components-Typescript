import React from 'react';
import UntitledDesign3RemovImage from 'src/assets/images/Menu_Untitled_design__3__removebg_preview_1.png';
import Ellipse2Image from 'src/assets/images/Menu_Ellipse_2.png';
import { styled } from '@mui/material/styles';
import MenuItem from 'src/components/MenuItem/MenuItem';
import HeroiconsOutlineEllipsisHorizo from 'src/components/HeroiconsOutlineEllipsisHorizo/HeroiconsOutlineEllipsisHorizo';
import { MenuProps } from 'src/types';

const Menu1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Menu2: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(241, 243, 245, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `1024px`,
  width: `280px`,
  margin: `0px`,
}));

const Frame12: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
});

const Logo: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `32px 0px 0px 40px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Frame60: any = styled('div')({
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

const UntitledDesign3Remov: any = styled('img')({
  height: `40px`,
  width: `134.23px`,
  objectFit: `cover`,
  margin: `0px`,
});

const Frame11: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `48px 0px 0px 0px`,
});

const Menu3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 0px 0px 48px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const MenuItem1: any = styled(MenuItem)(({ theme }: any) => ({
  margin: `0px`,
}));

const MenuItem2: any = styled(MenuItem)(({ theme }: any) => ({
  margin: `24px 0px 0px 0px`,
}));

const MenuItem3: any = styled(MenuItem)(({ theme }: any) => ({
  margin: `24px 0px 0px 0px`,
}));

const MenuItem4: any = styled(MenuItem)(({ theme }: any) => ({
  margin: `24px 0px 0px 0px`,
}));

const MenuItem5: any = styled(MenuItem)(({ theme }: any) => ({
  margin: `24px 0px 0px 0px`,
}));

const MenuItem6: any = styled(MenuItem)(({ theme }: any) => ({
  margin: `24px 0px 0px 0px`,
}));

const MenuItem7: any = styled(MenuItem)(({ theme }: any) => ({
  margin: `24px 0px 0px 0px`,
}));

const UserAccount: any = styled('div')({
  border: `1px solid rgba(241, 243, 245, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `32px 40px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
});

const Frame9: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Ellipse2: any = styled('img')({
  height: `40px`,
  width: `40px`,
  objectFit: `cover`,
  margin: `0px`,
});

const Frame7: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 14px`,
});

const VashonG: any = styled('div')(({ theme }: any) => ({
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

const Partner: any = styled('div')(({ theme }: any) => ({
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
  margin: `2px 0px 0px 0px`,
}));

const HeroiconsOutlineElli: any = styled(HeroiconsOutlineEllipsisHorizo)(
  ({ theme }: any) => ({
    width: `24px`,
    height: `24px`,
  })
);

function Menu(props: MenuProps): JSX.Element {
  return (
    <Menu1 className={props.className}>
      <Menu2>
        <Frame12>
          <Logo>
            <Frame60>
              <UntitledDesign3Remov
                src={UntitledDesign3RemovImage}
                loading="lazy"
                alt={'Untitled_design__3_-removebg-preview 1'}
              />
            </Frame60>
          </Logo>
          <Frame11>
            <Menu3>
              <MenuItem1 />
              <MenuItem2 />
              <MenuItem3 />
              <MenuItem4 />
              <MenuItem5 />
              <MenuItem6 />
              <MenuItem7 />
            </Menu3>
          </Frame11>
        </Frame12>
        <UserAccount>
          <Frame9>
            <Ellipse2 src={Ellipse2Image} loading="lazy" alt={'Ellipse 2'} />
            <Frame7>
              <VashonG>{`Vashon G.`}</VashonG>
              <Partner>{`Partner`}</Partner>
            </Frame7>
          </Frame9>
          <HeroiconsOutlineElli />
        </UserAccount>
      </Menu2>
    </Menu1>
  );
}

export default Menu;
