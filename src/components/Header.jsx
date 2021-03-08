import React, { useState } from 'react';
import { Button, PageHeader, DatePicker, Space } from 'antd';

function Header(props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, SetEndDate] = useState(null);

  return (
    <div className='site-page-header-ghost-wrapper'>
      <PageHeader
        ghost={false}
        title='Performans Analytics'
        subTitle='perfanalytics'
        extra={[
          <Button
            key='1'
            type='primary'
            onClick={(e) => props.action('get30min', e)}
          >
            Last 30 Minute
          </Button>,
        ]}
      >
        <Space direction='horizonal' size={12}>
          <DatePicker showTime onChange={(e) => SetEndDate(e._d)} />
          <DatePicker showTime onChange={(e) => setStartDate(e._d)} />
          <Button onClick={(e) => props.action({ startDate, endDate })}>
            Search
          </Button>
          ,
        </Space>
      </PageHeader>
    </div>
  );
}

export default Header;
