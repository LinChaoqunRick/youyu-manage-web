import React, {useState, useCallback, useEffect} from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import './UpdateLog.scss';
import {Api, FrontApi} from "@/network/apis";
import http from "@/network/https";
import {Button, message} from 'antd';

const UpdateLog = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  const handleSubmit = () => {
    http.post(Api.setUpdateLog, {content: value, date: new Date()}).then(res => {
      if (res) {
        message.success('保存成功');
      } else {
        message.error('保存失败');
      }
    })
  }

  useEffect(() => {
    http.get(FrontApi.getUpdateLog).then(res => {
      setValue(res.content)
    })
  }, [])

  return <div className={'update-log-container mt-10 mr-10'}>
    <Button onClick={handleSubmit} className={'save-button'} type="primary">保存</Button>
    <SimpleMdeReact
      value={value}
      onChange={onChange}
      minHeight={"1000px"}
    />
  </div>
}

export default UpdateLog;
