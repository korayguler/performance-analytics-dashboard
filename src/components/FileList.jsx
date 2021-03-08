import React from 'react';
import { Card } from 'antd';

function FileList(props) {
  return (
    <>
      <Card title='Files'>
        {props.files.map((file) => {
          return (
            <Card
              type='inner'
              title={`${file.file_type} (${file.response_end})`}
            >
              {file.name}
            </Card>
          );
        })}
      </Card>
    </>
  );
}

export default FileList;
