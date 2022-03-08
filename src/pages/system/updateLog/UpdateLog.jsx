import React, {useState, useCallback, useEffect} from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import './UpdateLog.scss';
import {Api} from "@/network/apis";
import http from "@/network/https";
import {Button, message} from 'antd';
import showdown from 'showdown';
import {EditOutlined} from '@ant-design/icons';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';


const UpdateLog = () => {
  const [value, setValue] = useState("");
  const [toEdit, setToEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  const handleCancel = () => {
    setToEdit(false);
  }

  const handleSubmit = () => {
    setLoading(true);
    http.post(Api.setUpdateLog, {content: value, date: new Date()}).then(res => {
      if (res) {
        message.success('保存成功');
        setToEdit(false);
      } else {
        message.error('保存失败');
      }
    }).finally(() => {
      setLoading(false);
    })
  }

  const handleEdit = () => {
    setToEdit(true);
  }

  useEffect(() => {
    http.get(Api.getUpdateLog).then(res => {
      setValue(res.content);
      highlight();
    })
  }, [])

  const highlight = () => {
    // 配置 highlight.js
    hljs.configure({
      // 忽略未经转义的 HTML 字符
      ignoreUnescapedHTML: true
    })
    // 获取到内容中所有的code标签
    const codes = document.querySelectorAll('pre code')
    codes.forEach((el) => {
      // 让code进行高亮
      hljs.highlightElement(el)
    })
  }

  return <div className={'update-log-container v-section'}>
    {!toEdit ? <div>
      <Button className={'edit-button'} onClick={handleEdit} icon={<EditOutlined/>}>编辑</Button>
      <div className={'content-wrapper'}
           dangerouslySetInnerHTML={{__html: (new showdown.Converter()).makeHtml(value)}}>
      </div>
    </div> : ""}
    {toEdit ? <div className={'editor-wrapper mt-10 mr-10'}>
      <div className={'buttons'}>
        <Button onClick={handleCancel} className={'mr-10'} type="danger">取消</Button>
        <Button loading={loading} onClick={handleSubmit} type="primary">保存</Button>
      </div>
      <SimpleMdeReact
        value={value}
        onChange={onChange}
        minHeight={"1000px"}
      />
    </div> : ""}
  </div>
}

export default UpdateLog;
