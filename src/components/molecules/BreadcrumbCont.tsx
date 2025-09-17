import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';

type TProps = {
  breadcrumbs: { label: string; href: string }[];
  showHome?: boolean;
  homeLabel?: string;
  direction?: 'left' | 'right';
};

export const BreadcrumbCont = ({
  breadcrumbs,
  showHome = true,
  homeLabel = 'Home',
  direction = 'left',
}: TProps) => {
  const allBreadcrumbs = showHome ? [{ label: homeLabel, href: '/' }, ...breadcrumbs] : breadcrumbs;
  return (
    <Breadcrumb className="absolute right-12 top-12">
      <BreadcrumbList
        className={`${direction === 'left' ? 'justify-start' : 'justify-end'} !gap-1`}
      >
        {allBreadcrumbs.map((breadcrumb, index) => {
          const isLast = index === allBreadcrumbs.length - 1;

          return (
            <Fragment key={breadcrumb.href}>
              <BreadcrumbItem key={breadcrumb.href}>
                {isLast ? (
                  <BreadcrumbPage className="font-semibold">{breadcrumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
