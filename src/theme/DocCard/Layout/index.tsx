import type {ReactNode} from 'react';
import Layout from '@theme-original/DocCard/Layout';
import type LayoutType from '@theme/DocCard/Layout';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LayoutType>;

const icon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="a1-card-ico">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h5" />
  </svg>
);

export default function LayoutWrapper(props: Props): ReactNode {
  return <Layout {...props} icon={icon} />;
}
