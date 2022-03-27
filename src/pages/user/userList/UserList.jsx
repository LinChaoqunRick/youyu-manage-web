import {Api} from "../../../network/apis";
import {Button, Card, Col, Input, Row, Select, Tag, DatePicker,message} from "antd";
import React, {useEffect} from "react";
import UTable from "../../../components/table/UTable";
import {dateFormat, diffDays} from "@/asset/util";
import http from "../../../network/https";

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
      title: '昵称',
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
        return text ? `${dateFormat("yyyy-MM-dd", date)} (${diff})天` : "";
      }
    },
    {
      title: '博客数',
      dataIndex: 'blogNumber'
    },
    {
      title: '状态',
      dataIndex: 'deleted',
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
    let ids = [];
    // 如果是批量选择
    if (Array.isArray(record)) {
      ids = record;
    } else { // 如果是单选
      ids.push(record.userID)
    }

    http.post(Api.setDeleted+'?deleted=1', ids).then(res => {
      message.success('禁用成功');
      child.getData();
      child.clearSelect();
    })
  }

  const enable = (record) => {
    let ids = [];
    // 如果是批量选择
    if (Array.isArray(record)) {
      ids = record;
    } else { // 如果是单选
      ids.push(record.userID)
    }

    http.post(Api.setDeleted+'?deleted=0', ids).then(res => {
      message.success('启用成功');
      child.getData();
      child.clearSelect();
    })
  }

  const dateChange = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  }

  let child = '';
  const onRef = (ref) => {
    child = ref
  }

  const extraButtons = [
    {
      name: "禁用",
      poptip: true,
      tip: "是否禁用?",
      batchTip: "是否禁用已选数据?",
      callback: 'forbid',
      batch: true,
      type: 'primary',
      show: (record) => record.deleted === 0
    },
    {
      name: "启用",
      poptip: true,
      tip: "是否启用?",
      batchTip: "是否启用已选数据?",
      callback: 'enable',
      batch: true,
      show: (record) => record.deleted === 1
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
        onRef={onRef}
        rowClick={rowClick}
        forbid={forbid}
        enable={enable}/>
    </div>
  </div>
}


export default BlogList
