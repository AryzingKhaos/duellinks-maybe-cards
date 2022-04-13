/*
 * @Date: 2022-04-13 14:51:17
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 15:29:30
 * @FilePath: /generationNovel/Users/luoxiongze/code/duellinks-maybe-cards/src/pages/DuelLinks/components/TechnolagyForm.tsx
 */

import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography, Radio, Space } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const TechnolagyForm = () => {
  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };

  return (
    <Form.Provider>
      <Form {...layout} name="basicForm" onFinish={onFinish} style={{width: '100%'}}>
        <Form.Item name="技能" label="技能">
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="无开始技能">无开始技能</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, curValues) => prevValues['技能'] !== curValues['技能'] }
        >
          {({ getFieldValue }) =>
            getFieldValue('技能') === '无开始技能' && (
              <Form.Item name="人物" label="人物" rules={[{ required: true }]}>
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            )
          }
        </Form.Item>
        <Form.Item name="卡组数量" label="卡组数量">
          <Radio.Group>
            <Space direction="vertical">
              {(() => {
                const arr = [];
                for (let i = 20; i <= 30; i++) {
                  arr.push((<Radio key={i} value={`${i}`}>{i}</Radio>));
                }
                return arr;
              })()}
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="额外卡组数量" label="额外卡组数量">
          <Radio.Group>
            <Space direction="vertical">
              {(() => {
                const arr = [];
                for (let i = 0; i <= 5; i++) {
                  arr.push((<Radio key={i} value={`${i}`}>{i}</Radio>));
                }
                return arr;
              })()}
            </Space>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Form.Provider>
  );
};

export default TechnolagyForm;