import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbProps, Flex } from 'antd';
import { TBreadcrumb } from 'models/TBreadcrumb';
import { BorderRadius, Color, Spacing } from 'theme/styles.ts';

import StyledBreadcrumb from './Breadcrumb.style';

interface CustomBreadcrumbProps extends Omit<BreadcrumbProps, 'items'> {
  items?: TBreadcrumb[];
}

const Breadcrumb: FC<CustomBreadcrumbProps> = ({ items, ...props }) => {
  const location = useLocation();

  const breadcrumbItems = items?.map((item) => ({
    title: (
      <Link
        to={item.path}
        className={location.pathname === `/${item.path}` ? 'active' : ''}
      >
        {item.label}
      </Link>
    ),
  }));

  return (
    <Flex
      style={{
        background: Color.SUBTLE,
        padding: Spacing.SM,
        borderRadius: BorderRadius.XL,
      }}
    >
      <StyledBreadcrumb items={breadcrumbItems} {...props} />
    </Flex>
  );
};

export default Breadcrumb;
