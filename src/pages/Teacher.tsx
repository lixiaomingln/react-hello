import { Row, Col, Collapse, Divider, Input, Select, Form, DatePicker, Button } from "antd";
import { useGlobalState } from "../state/GlobalStateContext";

const SearchBody = () => {
  const [form] = Form.useForm();
  const { state } = useGlobalState();

  const handleSubmit = () => {
    const values = form.getFieldsValue();
    // const groupValue = form.getFieldValue("group"); 
    // format data
    const formattedValues = {
      ...values,
      // group: groupValue,
      startDate: values.startDate ? values.startDate.format("YYYY-MM-DD") : null,
    };
    console.log("表单数据:", formattedValues);
  };

  return (
    <>
      <Form form={form} layout="horizontal" wrapperCol={{ span: 18 }}>
        <Row gutter={16} className="search-part-1">
          <Col xs={24} sm={8} md={5}>
            <Form.Item label="Start date" name="startDate">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8} md={5}>
            <Form.Item label="Dest" name="dest">
              <Input placeholder="1,2,3" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8} md={5}>
            <Form.Item label="category" name="category">
              {/* 从全局state读取值 */ }
              <Select
                style={{ width: '100%' }}
                placeholder="请选择"
                options={state.categoryOptions}
                allowClear
              />
              {/*
              <Select
                placeholder="select category"
                options={[
                  { value: "news", label: "News" },
                  { value: "book", label: "Books" },
                  { value: "event", label: "Events" },
                ]}
              /> */}
            </Form.Item>
          </Col>
          <Col xs={24} sm={8} md={5}>
            <Form.Item label="group" name="group" initialValue={"CHN"}>
              <Input disabled />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8} md={4}>
            <Form.Item label="select3" name="select3">
              <Select
                placeholder="select value"
                options={[
                  { value: "option1", label: "选项 1" },
                  { value: "option2", label: "选项 2" },
                  { value: "option3", label: "选项 3" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Divider />

        <Row gutter={16} align={"middle"} className="search-part-2">
          <Col span={24}>
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

const searchCollapseItems: any[] = [
  {
    key: "1",
    label: "Search Part",
    children: <SearchBody />,
  }
]

const ResultBody = () => {
  return (
    <>
      <Row className="result-part">
        <Col span={24}>result part</Col>
      </Row>
    </>
  )
}

const resultCollapseItems: any[] = [
  {
    key: "1",
    label: "Result",
    children: <ResultBody />,
  }
]

// teacher component 
const Teacher = () => {
  return (
    <div className="teacher-container">
      <div className="search-part">
        <Collapse items={searchCollapseItems} defaultActiveKey={["1"]} />
      </div>
      <div className="result-part">
        <Collapse items={resultCollapseItems} defaultActiveKey={["1"]} />
      </div>
    </div>
  )
};

export default Teacher;
