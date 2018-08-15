import * as React from 'react';
import { Ripple, Card, Icon } from '../../../../components/';

export default function() {
  return (
    <div>
      <Ripple style={{width: '200px'}}color='red'>
        <Card
          title='标题'
          extra={(
          <div><span>更多</span><Icon type='more'/></div>
          )}
          border
          shadow
        >
          <div>波纹包裹的card</div>
        </Card>
      </Ripple>
    </div>
  );
}
