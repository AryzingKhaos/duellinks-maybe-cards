/*
 * @Date: 2022-04-13 14:46:14
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 14:55:23
 * @FilePath: /generationNovel/Users/luoxiongze/code/duellinks-maybe-cards/src/components/VerticalRadio/VerticalRadio.tsx
 */


import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Radio, Input, Space } from 'antd';
import './VerticalRadio.less';

interface radioOne {
  value: string | number;
  text: string;
}

interface VerticalRadioProps {
  onChange: () => void;
  initValue: number | string;
  radioArray: radioOne[];
}

const VerticalRadio: React.FC<VerticalRadioProps> = ({
  onChange,
  initValue,
  radioArray,
}) => {

  return (
    <div className="VerticalRadio">
      <Radio.Group onChange={onChange} value={initValue}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            More...
            {initValue === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </Space>
      </Radio.Group>
    </div>
  );
}

export default VerticalRadio;


