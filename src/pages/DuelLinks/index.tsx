/*
 * @Date: 2022-04-13 14:01:56
 * @LastEditors: xiongzeluo
 * @LastEditTime: 2022-04-13 15:17:44
 * @FilePath: /generationNovel/Users/luoxiongze/code/duellinks-maybe-cards/src/pages/DuelLinks/index.tsx
 */

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Header from '../../components/Header/Header';
import TechnolagyForm from './components/TechnolagyForm';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, RootState } from '../../store';
import { consoleLog } from '../../utils/console';
import "./index.less";

interface DuelLinksProps {

}

const DuelLinks: React.FC<DuelLinksProps> = () => {
  return (
    <div className='main'>
      <Header />
      <div className='main-container'>
        <div className="left-area left-area1">
          <TechnolagyForm/>
        </div>
        <div className="left-area left-area2"></div>
      </div>
    </div>
  );
}

export default DuelLinks;
