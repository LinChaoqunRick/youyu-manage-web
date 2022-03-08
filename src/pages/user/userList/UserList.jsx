import {Api} from "../../../network/apis";
import {Button, Card, Col, Input, Row, Select, Tag, DatePicker} from "antd";
import React, {useEffect} from "react";
import UTable from "../../../components/table/UTable";
import {dateFormat, diffDays} from "@/asset/util";

const {Option} = Select;
const {RangePicker} = DatePicker;

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
      dataIndex: 'registerTime',
      render: (text) => {
        const date = text ? new Date(text) : "";
        const diff = diffDays(date);
        return text?`${dateFormat("yyyy-MM-dd", date)} (${diff})天`:"";
      }
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

  const dateChange = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  }

  const extraButtons = [
    {
      name: "禁用",
      poptip: true,
      tip: "是否禁用?",
      callback: 'forbid'
    }
  ]

  return <div className={"user-container v-section"}>
    <div className={"mt-10 mr-10"}>
      <Card className={"mb-10 search-box"} size="small" style={{width: "100%"}}>
        <Row>
          <Col span={6}>
            <span className={"mr-10"}>用户编号</span>
            <Input className={"search-item"} placeholder=""/>
          </Col>
          <Col span={6}>
            <span className={"mr-10"}>昵称</span>
            <Input className={"search-item"} placeholder=""/>
          </Col>
          <Col span={7}>
            <span className={"mr-10"}>注册时间</span>
            <RangePicker
              onChange={dateChange}
            />
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
