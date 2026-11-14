import type {ReactNode} from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
  const crumbs = useSidebarBreadcrumbs();
  const {frontMatter} = useDoc();
  const section = crumbs && crumbs.length > 1 ? (crumbs[0] as {label?: string}).label : undefined;
  const hideEyebrow = (frontMatter as {hide_eyebrow?: boolean}).hide_eyebrow;
  return (
    <>
      {section && !hideEyebrow && <div className="a1-eyebrow">{section}</div>}
      <Content {...props} />
    </>
  );
}
