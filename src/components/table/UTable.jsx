import {Table, Button, Space, Popconfirm, message, Tooltip} from 'antd';
import React from 'react';
import http from "../../network/https";
import "./UTable.scss"

class UTable extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onChange = this.onChange.bind(this)  //这里一定要写等于
  // }
  onChange = (page, pageSize) => {
    this.setState({page}, () => {
      this.getData();
    });
  }

  onShowSizeChange = (current, size) => {
    this.setState({
      pagination: {...this.state.pagination, pageSize: size},
    });
  }

  state = {
    loading: true,
    selectedRowKeys: [], // Check here to configure the default column
    data: [],
    page: 1,
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
      onChange: this.onChange,
      onShowSizeChange: this.onShowSizeChange
    },
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  };

  deleteConfirm = () => {
    message.success('Next step.');
  };

  getData() {
    this.setState({loading: true});
    const {tableParams} = this.props;
    let {params} = tableParams;
    params = Object.assign(params, {count: this.state.pagination.pageSize,page: this.state.page});
    console.log(params);
    http.post(tableParams.listUrl, params).then(res => {
      console.log(res);
      this.setState({
        data: res.list,
        pagination: {...this.state.pagination, total: res.total, current: this.state.page}
      });
    }).finally(() => {
      this.setState({loading: false});
    })
  }

  componentDidMount() {
    let {tableParams} = this.props;
    const defaultSize = 10;
    tableParams = Object.assign({count: defaultSize}, tableParams);
    this.getData();
  }

  render() {
    const {selectedRowKeys} = this.state;
    let {columns, showEdit, showDelete, tableParams} = this.props;
    let thisColumns = columns.forEach(item => {
      item.ellipsis = {showTitle: false};
      if (!item.render) {
        item.render = (text) => {
          return <Tooltip placement="topLeft" color={"#fff"} title={text}>
            {text}
          </Tooltip>
        }
      }
    })
    const rowSelection = {
      columnWidth: "80px",
      selectedRowKeys,
      onChange: this.onSelectChange,
      // selections: [
      //   Table.SELECTION_ALL,
      //   Table.SELECTION_INVERT,
      //   Table.SELECTION_NONE,
      // ],
    };
    const columnsButtons = [
      {
        title: '操作',
        dataIndex: '',
        key: 'operate',
        render: () => (
          <Space onClick={(event) => event.stopPropagation()} size="middle">
            {showEdit ? <Button type="link" size="small">编辑</Button> : ""}
            {showDelete ?
              <Popconfirm
                title="是否删除?"
                onConfirm={this.deleteConfirm}
                okText="确定"
                cancelText="取消">
                <Button type="link" size="small" danger>删除</Button>
              </Popconfirm> : ""}
          </Space>
        ),
      },
    ]
    columns = [...columns, ...columnsButtons];

    const Footer = () => {
      return <Space onClick={(event) => event.stopPropagation()} size="middle">
        {showEdit ? <Button type="link" size="small">编辑</Button> : ""}
        {showDelete ?
          <Popconfirm
            title="是否删除所选数据?"
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="确定"
            cancelText="取消">
            <Button type="link" size="small" danger>删除</Button>
          </Popconfirm> : ""}
      </Space>
    }


    return <Table
      rowSelection={rowSelection}
      bordered={true}
      loading={this.state.loading}
      columns={columns}
      dataSource={this.state.data}
      pagination={this.state.pagination}
      footer={() => Footer()}
      size={"middle"}
      rowKey={(record) => record[tableParams.key]}
      onRow={record => {
        return {
          onClick: (event) => {
            this.props.rowClick(record);
          }, // 点击行
        };
      }}/>;
  }
}

export default UTable;
