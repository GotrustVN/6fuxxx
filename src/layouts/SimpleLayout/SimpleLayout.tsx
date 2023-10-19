import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import SimpleHeader from '@/containers/SimpleHeader';

import Button, { EButtonStyleType } from '@/components/Button';
import { EIconColor, EIconName } from '@/components/Icon';

import { TSimpleLayoutProps } from './SimpleLayout.types';

const GuestLayout: React.FC<TSimpleLayoutProps> = ({ children }) => {
  const [isShowBtnOnTop, setIsShowBtnOnTop] = useState<boolean>(false);
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerScrollShowBtnOnTop = (): void => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 240) {
        setIsShowBtnOnTop(true);
      } else {
        setIsShowBtnOnTop(false);
      }
    });
  };

  useEffect(() => {
    triggerScrollShowBtnOnTop();
  }, []);

  return (
    <div className="SimpleLayout">
      <div className="SimpleLayout-header">
        <SimpleHeader />
      </div>
      <div className="SimpleLayout-body">{children}</div>
      <div className={classNames('SimpleLayout-ontop', { visible: isShowBtnOnTop })}>
        <Button
          iconName={EIconName.AngleDown}
          styleType={EButtonStyleType.RED}
          iconColor={EIconColor.WHITE}
          onClick={(): void => {
            isShowBtnOnTop && scrollToTop();
          }}
        />
      </div>
    </div>
  );
};

export default GuestLayout;
