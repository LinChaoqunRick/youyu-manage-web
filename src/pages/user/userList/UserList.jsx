import {Api} from "../../../network/apis";
import {Button, Card, Col, Input, Row, Select, Tag} from "antd";
import React, {useEffect} from "react";
import UMenu from "../../../components/menu/UMenu";
import UTable from "../../../components/table/UTable";

const {Option} = Select;

const BlogList = (props) => {
  const tableParams = {
    listUrl: Api.getUserList,
    key: "userID",
    params: {}
  }

  const columns = [
    {
      title: '编号',
      dataIndex: 'userID',
      width: 80
    },
    {
      title: '作者',
      dataIndex: 'nickname',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      align: 'center',
      width: 80
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '注册日期',
      dataIndex: 'registerTime'
    },
    {
      title: '博客数',
      dataIndex: 'blogNumber'
    },
    {
      title: '状态',
      dataIndex: 'status',
      align: 'center',
      width: 80,
      render: (text, record) => (
        <Tag color={text == 0 ? "#87d068" : "#f50"}>
          {text == 0 ? "正常" : "禁用"}
        </Tag>
      ),
    },
  ]

  // componentDidMount
  useEffect(() => {

  }, [])

  const rowClick = (record) => {
    console.log(record);
  }

  const forbid = (record) => {
    console.log(record);
  }

  const extraButtons = [
    {
      name: "禁用",
      poptip: true,
      tip: "是否禁用?",
      callback: 'forbid'
    }
  ]

  return <div className={"blog-container"}>
    <div className={"mt-10 mr-10"}>
      <Card className={"mb-10 search-box"} size="small" style={{width: "100%"}}>
        <Row>
          <Col span={6}>
            <span className={"mr-10"}>标题</span>
            <Input className={"search-item"} placeholder=""/>
          </Col>
          <Col span={6}>
            <span className={"mr-10"}>类型</span>
            <Select className={"search-item"} allowClear>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Col>
          <Button className={"search-button"} type="primary" size="middle">
            查询
          </Button>
        </Row>
      </Card>
      <UTable
        tableParams={tableParams}
        extraButtons={extraButtons}
        columns={columns}
        showEdit={true}
        showDelete={true}
        rowClick={rowClick}
        forbid={forbid}/>
    </div>
  </div>
}


export default BlogList
