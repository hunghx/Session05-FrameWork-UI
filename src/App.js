// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Space } from 'antd';

// import './App.css';
// import { Button, Tooltip } from 'react-bootstrap';
// // import { Button } from 'react-bootstrap';
// // import { Session01 } from './components/Session01';

// function App() {
//   return (
//     <div>
//      {/* // button */}
//      {/* <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="success">Success</Button>
//       <Button variant="warning">Warning</Button>
//       <Button variant="danger">Danger</Button>
//       <Button variant="info">Info</Button>
//       <Button variant="light">Light</Button>
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button> */}
//       {/* <Session01/>/ */}
    
//     </div>
//   );
// }

// export default App;
import { SearchOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Space wrap>  
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
    </Space>
    <Space wrap>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" />
    </Space>
  </Space>
);
export default App;
