/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'antd';

import ImageHighLightLineTop from '@/assets/images/image-highlight-line-top.png';
import ImageHighLightLineBottom from '@/assets/images/image-highlight-line-bottom.png';
import IconRankV from '@/assets/icons/icon-rank-v.svg';
import IconFlagJp from '@/assets/icons/icon-flag-jp.svg';
import ImageModel3 from '@/assets/images/image-model-10.png';
import ImageModel8 from '@/assets/images/image-model-11.png';
import ImageModel10 from '@/assets/images/image-model-12.png';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import { THighlightKolProps } from './HighlightKol.types.d';

const HighlightKol: React.FC<THighlightKolProps> = () => {
  return (
    <div className="HighlightKol">
      <div className="HighlightKol-line top">
        <Image src={ImageHighLightLineTop} alt="" />
      </div>
      <div className="HighlightKol-line bottom">
        <Image src={ImageHighLightLineBottom} alt="" />
      </div>
      <div className="HighlightKol-wrapper">
        <Row gutter={[48, 48]} wrap={false} align="middle">
          <Col>
            <div className="HighlightKol-images flex items-center">
              <div className="HighlightKol-images-item">
                <Image src={ImageModel3} alt="" />
              </div>
              <div className="HighlightKol-images-item">
                <Image src={ImageModel8} alt="" />
              </div>
              <div className="HighlightKol-images-item">
                <Image src={ImageModel10} alt="" />
              </div>
            </div>
          </Col>
          <Col>
            <div className="HighlightKol-info">
              <h4 className="HighlightKol-info-name flex items-center">
                Cathay
                <div className="HighlightKol-info-rank">
                  <Image src={IconRankV} alt="" />
                </div>
              </h4>
              <div className="HighlightKol-info-detail">
                <Row gutter={[24, 24]}>
                  <Col>
                    <div className="HighlightKol-info-detail-item flex items-center">
                      26. Volketswil
                      <div className="HighlightKol-info-detail-item-icon">
                        <Image src={IconFlagJp} alt="" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="HighlightKol-info-detail-item flex items-center">
                      <div className="HighlightKol-info-detail-item-icon">
                        <Icon name={EIconName.RuleHalfCircle} color={EIconColor.HEATHER} />
                      </div>
                      w: 44kg
                    </div>
                  </Col>
                  <Col>
                    <div className="HighlightKol-info-detail-item flex items-center">
                      <div className="HighlightKol-info-detail-item-icon">
                        <Icon
                          name={EIconName.ArrowVertical}
                          color={EIconColor.HEATHER}
                          style={{ transform: 'scale(0.9)' }}
                        />
                      </div>
                      h: 169cm
                    </div>
                  </Col>
                  <Col>
                    <div className="HighlightKol-info-detail-item flex items-center">BWH: 90-60-90 cm</div>
                  </Col>
                </Row>
              </div>
              <p className="HighlightKol-info-description">
                Ich bin ❤️ Cathay ❤️ aus Italy und liebe es, Spaß zu haben. Mit meinem sexy Körper und meinen schönen Augen kann ich dir die Zeit deines Lebens geben. Ich bin voller Leidenschaft und sehr ungezogen, ich bin sicher, du wirst mehr wollen und mehr. Wenn Sie einen ganzen Abend oder eine ganze Nacht mit mir verbringen möchten, kann ich meinen Stundensatz auslaufen lassen und Sie können mir ein gutes Angebot unterbreiten. Also Herr, worauf warten Sie? Rufen Sie mich einfach an, um einen Termin zu vereinbaren, Sie verdienen das Beste.
              </p>
              <div className="HighlightKol-info-link flex justify-end">
                <Button
                  title="View detail"
                  iconName={EIconName.ArrowRightShort}
                  iconColor={EIconColor.RADICAL_RED}
                  styleType={EButtonStyleType.TEXT_RED}
                  reverse
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="HighlightKol-sponsored flex items-center">
          <Icon name={EIconName.Lightning} color={EIconColor.LYNCH} />
          Girl of the day
        </div>
      </div>
    </div>
  );
};

export default HighlightKol;
