/**
 * 通用上传组件
 * */

import { connect } from 'dva';
import { Icon, message, Upload } from 'antd';
import React from 'react';

//  支持图片格式
const fileTypes = ['image/jpeg', 'image/png'];

@connect()
export default class UploadView extends React.Component {
  uploadButton(name) {
    return (
      <div>
        <Icon type={'plus'} />
        <div>{name}</div>
      </div>
    );
  }

  handlePreview(file) {
    this.props.dispatch({
      type: 'global/changePreview',
      payload: {
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      },
    });
  }

  beforeUpload(file) {
    const isJPG = fileTypes.find(fileType => file.type == fileType).length > 0;
    if (!isJPG) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  render() {
    const { name = '选择图片', fileList = [] } = this.props;
    return (
      <Upload
        {...this.props}
        listType="picture-card"
        onPreview={this.handlePreview.bind(this)}
        beforeUpload={this.beforeUpload.bind(this)}
      >
        {fileList.length == 0 && this.uploadButton(name)}
      </Upload>
    );
  }
}
