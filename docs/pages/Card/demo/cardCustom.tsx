import * as React from 'react';
import { Card, Icon } from '../../../../components/';

export default function() {
  return (
    <Card
      style={{width: 300, margin: 10}}
      title='标题'
      extra={(
      <div><span>更多</span><Icon type='more'/></div>
      )}
      border
      shadow
    >
      <div>2342342343</div>
    </Card>
  );
}
