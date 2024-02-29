/* eslint-disable react/no-unescaped-entities */
import SEO from "@/components/SEO";
import { Col, Form, Row } from 'antd';
import React from "react";

import Button, { EButtonStyleType } from '@/components/Button';
import Input from '@/components/Input';
import TextArea from "@/components/TextArea";
import { Paths } from '@/routers/constants';
import SimpleLayout from '@/layouts/SimpleLayout';

const Support = () => {
  const [form] = Form.useForm();
  return (
    <div className="static-text-container">
        <div className="AuthLayout-card">
          <div className="AuthLayout-card-header">
            <div className="AuthLayout-card-title">Support Form</div>
            <div className="AuthLayout-card-description" style={{ fontSize: '1.6rem' }}>Let us know what you're having trouble with and we'll do our best to help.</div>
          </div>
          <div className="AuthLayout-card-body">
            <Form form={form} layout="vertical">
              <Row gutter={[24, 24]}>
                <Col span={12}>
                  <Form.Item name="firstname" label="First Name">
                    <Input
                      placeholder=""
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="lastName" label="Last Name">
                    <Input
                      placeholder=""
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="email" label="Email">
                    <Input
                      placeholder="Ex: mail@domain.com"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="subject" label="Subject">
                    <Input
                      placeholder="Type your subject"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="desc" label="Description">
                    <TextArea
                      placeholder="The more information you provide, the easier it will be for us to identify and resolve your issue."
                      className="support-textarea"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button
                    title="Submit Form"
                    styleType={EButtonStyleType.RED}
                    reverse
                    htmlType="submit"
                    link={Paths.Home}
                  />
                </Col>
              </Row>
            </Form>
          </div>
        </div>
    </div>
  );
}
export default Support;


Support.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <SEO />
      <SimpleLayout>{page}</SimpleLayout>
    </>
  );
};
