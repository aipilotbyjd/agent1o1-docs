import type {ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import Link from '@docusaurus/Link';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <div className="a1-help">
        <div>
          <strong>Still stuck?</strong>
          <span>Check common fixes or browse the questions other people ask.</span>
        </div>
        <div className="a1-help-actions">
          <Link to="/docs/help/troubleshooting">Troubleshooting</Link>
          <Link to="/docs/help/faq">FAQ</Link>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
}
