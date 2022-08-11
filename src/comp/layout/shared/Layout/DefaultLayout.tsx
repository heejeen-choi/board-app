import * as React from 'react';
import { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Location } from '../Location';

function DefaultLayout(props: PropsWithChildren<any>) {
  const { children } = props;
  return (
    <>
      {/* contents */}
      <div className="layout-contents-outer">
        {/* header */}
        <Header/>

        <Location
          location={[]}
          thisLocation="sample"
        />

        <div className="layout-contents-wrap">
          <div
            className="layout-contents-inner active"
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
