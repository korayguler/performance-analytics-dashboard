import { useState, useEffect } from 'react';
import Header from './components/Header';
import { Row, Col } from 'antd';
import ApexChart from './components/ApexChart';
import $fetch from './helper/fetch';
import FileList from './components/FileList';
function App() {
  const [TTFB, SET_TTFB] = useState([]);
  const [FCP, SET_FCP] = useState([]);
  const [DOMLoad, SET_DomLoad] = useState([]);
  const [WindowLoad, SET_WindowLoad] = useState([]);
  const [files, SET_Files] = useState([]);
  const [dates, SET_dates] = useState([]);

  useEffect(() => {
    apiCall();
    setInterval(() => {
      apiCall();
    }, 2000);
  }, []);

  const apiCall = (e) => {
    $fetch(e)
      .then((response) => {
        const { body } = response.data;
        console.log(body);
        setter(body);
      })
      .catch((e) => console.log(e));
  };

  const setter = (data) => {
    clearState();
    data.forEach((metric) => {
      SET_FCP((old) => [...old, metric.fcp]);
      SET_TTFB((old) => [...old, metric.ttfb]);
      SET_DomLoad((old) => [...old, metric.dom_load]);
      SET_WindowLoad((old) => [...old, metric.window_load]);
      SET_Files((old) => [...old, ...metric.files]);
      SET_dates((old) => [
        ...old,
        new Date(metric.generated_at).toLocaleTimeString(),
      ]);
    });
  };

  const clearState = () => {
    SET_FCP([]);
    SET_TTFB([]);
    SET_DomLoad([]);
    SET_WindowLoad([]);
    SET_Files([]);
    SET_dates([]);
  };

  const action = ($event) => {
    if ($event === 'get30min' && typeof $event === 'string') {
      apiCall();
    } else if (typeof $event === 'object') {
      console.log($event);
      apiCall($event);
    }
  };

  return (
    <div className='container'>
      <Header action={action} />
      <div className='dashboard'>
        <Row className='row'>
          <Col flex='auto'>
            <ApexChart dates={dates} dataset={TTFB} title='TTFB' />
          </Col>
          <Col flex='auto'>
            <ApexChart dates={dates} dataset={FCP} title='FCP' />
          </Col>
        </Row>
        <Row className='row'>
          <Col flex='auto'>
            <ApexChart dates={dates} dataset={DOMLoad} title='DOMLoad' />
          </Col>
          <Col flex='auto'>
            <ApexChart dates={dates} dataset={WindowLoad} title='WindowLoad' />
          </Col>
        </Row>
      </div>

      <>{files && <FileList files={files}></FileList>}</>
    </div>
  );
}

export default App;
