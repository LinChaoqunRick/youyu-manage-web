import React, {useCallback, useEffect, useState} from "react";
import './Notice.scss'
import {highlight} from "@/asset/util";
import {Button, message} from "antd";
import {Api} from "@/network/apis";
import http from "@/network/https";

import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Notice = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    http.get(Api.getNotice).then(res => {
      setValue(res.content);
    })
  }, [])

  const onChange = useCallback((value) => {
    setValue(value);
    highlight();
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    http.post(Api.setNotice, {content: value, date: new Date()}).then(res => {
      if (res) {
        message.success('保存成功');
      } else {
        message.error('保存失败');
      }
    }).finally(() => {
      setLoading(false);
    })
  }

  return <div className={'notice-container v-section'}>
    <SimpleMdeReact
      value={value}
      onChange={onChange}
    />
    <Button loading={loading} onClick={handleSubmit} type="primary">保存</Button>
  </div>
}

export default Notice;
