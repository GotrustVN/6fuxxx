import SEO from "@/components/SEO";
import SimpleLayout from '@/layouts/SimpleLayout';
import React from "react";

import Icon, { EIconColor, EIconName } from "@/components/Icon";
import { dataFaqOptions } from "@/components/MultipleCheckboxCollapse/MultipleCheckboxCollapse.data";
import { Collapse, CollapsePanelProps, CollapseProps } from 'antd';
const { Panel } = Collapse;

const CollapseModify: React.FC<CollapseProps & { children?: React.ReactNode }> = Collapse;
const PanelModify: React.FC<CollapsePanelProps & { children?: React.ReactNode }> = Panel;

const FAQ = () => {

  return (
    <div className="static-text-container">
      <div className="SignUp-wrapper">
        <div className="AuthLayout-card">
          <div className="MultipleCheckboxCollapse faq-collapse">
            <CollapseModify
              expandIcon={({ isActive }): React.ReactNode => (
                <div className="MultipleCheckboxCollapse-item-header-icon">
                  <Icon name={isActive ? EIconName.Minus : EIconName.Plus} color={EIconColor.WHITE} />
                </div>
              )}>
              {dataFaqOptions.map((parent) => {
                return (
                  <PanelModify
                    header={<div className="MultipleCheckboxCollapse-item-header flex items-center">
                      <div className="MultipleCheckboxCollapse-item-header-title">{parent.title}</div>
                    </div>}
                    key={parent.key}>
                    {parent.content}
                  </PanelModify>
                )
              })}
            </CollapseModify>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FAQ;


FAQ.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <SimpleLayout>{page}</SimpleLayout>
    </>
  );
};
