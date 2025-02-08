import { Form, Select } from "antd";
import { useGlobalState } from "../state/GlobalStateContext";

const Admin = () => {

  const { state } = useGlobalState();

  return (
    <div className="admin-container">
      <Form.Item label="category" name="category">
        <Select
          style={{ width: '100%' }}
          placeholder="select category"
          allowClear
          options={state.categoryOptions}
        />
      </Form.Item>
    </div>
  );
};

export default Admin;