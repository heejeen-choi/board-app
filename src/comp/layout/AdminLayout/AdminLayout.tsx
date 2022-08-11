import React, { PropsWithChildren } from 'react';
import { DefaultLayout } from '~/comp/layout/shared';

export default function AdminLayout(props: PropsWithChildren<any>) {
  return (
    <DefaultLayout {...props} />
  );
}
