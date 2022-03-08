import {Api} from "../../../network/apis";
import {Button, Card, Col, Input, Row, Select, Tag} from "antd";
import React, {useEffect} from "react";
import UMenu from "../../../components/menu/UMenu";
import UTable from "../../../components/table/UTable";

const {Option} = Select;

const BlogList = (props) => {
  const tableParams = {
    listUrl: Api.getBlogList,
    key: "blogID",
    params: {

    }
  }

  const columns = [
    {
      title: '编号',
      dataIndex: 'blogID',
      width: 80
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 400,
    },
    {

      title: '作者编号',
      dataIndex: 'userID',
      width: 80
    },
    {
      title: '作者',
      dataIndex: 'nickname',
    },
    {
      title: '类型',
      dataIndex: 'createType',
      align: 'center',
      width: 80
    },
    {
      title: '发布日期',
      dataIndex: 'firstPubDate',
    },
    {
      title: '更新日期',
      dataIndex: 'lastPubDate'
    },
    // {
    //   title: '状态',
    //   dataIndex: 'status',
    //   align: 'center',
    //   width: 80,
    //   render: (text, record) => (
    //     <Tag color={text == 0 ? "#87d068" : "#f50"}>
    //       {text == 0 ? "正常" : "隐藏"}
    //     </Tag>
    //   ),
    // },
  ]

  // componentDidMount
  useEffect(() => {

  }, [])

  const rowClick = (record) => {
    console.log(record);
  }

  return <div className={"blog-container v-section"}>
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
        columns={columns}
        showEdit={false}
        showDelete={true}
        rowClick={rowClick}/>
    </div>
  </div>
}


export default BlogList
