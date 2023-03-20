import React from 'react';
import { styled } from '@mui/material/styles';
import TabItem from 'src/components/TabItem/TabItem';
import { TabsProps } from 'src/types';

const Property1Default: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const TabItem1: any = styled(TabItem)(({ theme }: any) => ({
  margin: `0px`,
}));

const TabItem2: any = styled(TabItem)(({ theme }: any) => ({
  margin: `0px 0px 0px 16px`,
}));

const TabItem3: any = styled(TabItem)(({ theme }: any) => ({
  margin: `0px 0px 0px 16px`,
}));

const TabItem4: any = styled(TabItem)(({ theme }: any) => ({
  margin: `0px 0px 0px 16px`,
}));

const TabItem5: any = styled(TabItem)(({ theme }: any) => ({
  margin: `0px 0px 0px 16px`,
}));

function Tabs(props: TabsProps): JSX.Element {
  return (
    <Property1Default className={props.className}>
      <TabItem1 />
      <TabItem2 />
      <TabItem3 />
      <TabItem4 />
      <TabItem5 />
    </Property1Default>
  );
}

export default Tabs;
