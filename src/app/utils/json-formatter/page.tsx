import { Title } from '@/components/atoms/Title';
import { BreadcrumbCont } from '@/components/molecules/BreadcrumbCont';
import { Content } from '@/components/templates/utils/json-formatter/Content';

export default function JsonFormatterPage() {
  return (
    <div>
      <BreadcrumbCont
        direction="right"
        breadcrumbs={[
          { label: 'Utility Tools', href: '/utils' },
          { label: 'JSON Formatter', href: '/utils/json-formatter' },
        ]}
      />
      <Title
        title="JSON Formatter"
        subTitle="Format, validate, and minify JSON data with ease"
        className="mb-5"
      />
      <Content />
    </div>
  );
}
