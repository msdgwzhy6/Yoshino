import * as React from 'react';
import { Component } from 'react';
import * as md from './intro.md';
import Markdown from '../../components/Markdown/';

export default class Index extends Component {
  render() {
    return (
      <div className=''>
        <Markdown text={md}/>
      </div>
    );
  }
}
