import React from "react";
import { Box } from "@chakra-ui/react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ossUploadFile } from "lodash-fy-webpack";
// const OSS = require('ali-oss');
import OSS from "ali-oss";

function getBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class UploadImage extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-2",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-3",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-4",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-xxx",
        percent: 90,
        name: "image.png",
        status: "uploading",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-5",
        name: "image.png",
        status: "error",
      },
    ],
  };
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file: any): Promise<void> => {
    console.log(file, "handlePreview");
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = ({ fileList }: { fileList: unknown }) => {
    console.log(fileList, "handleChange");
    this.setState({ fileList });
  };

  ossUpload = (params: any) => {
    const { region, accessKeyId, accessKeySecret, bucket, file, path } = params;
    // const path = require("path")
    const client = new OSS({
      region,
      accessKeyId,
      accessKeySecret,
      bucket,
    });

    return new Promise((resolve, reject) => {
      async function put() {
        try {
          const result = await client.put(path, file);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      }
      put();
    });
  };

  customRequest = async (e: any): Promise<void> => {
    // 上传oss
    // this.ossUpload({
    const obj = {
      region: "oss-cn-hangzhou",
      accessKeyId: "LTAI5tH2us3yht6NNjuYu1Ku",
      accessKeySecret: "glCzmcyoVET0F3FUV42BPBmp49SUvs",
      bucket: "fanyu1994",
      file: e.file,
      path: `fanyuDir/${e.file.name}-${Date.now()}`,
    };
    let result = await ossUploadFile(obj);

    // let result = await this.ossUpload(obj);

    console.log( result, "result");
  };
  render() {
    const {
      previewVisible,
      previewImage,
      fileList,
      previewTitle,
    }: {
      fileList: Array<{ uid: string; name: string }>;
      [other: string]: any;
    } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>上传图片</div>
      </div>
    );
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          customRequest={this.customRequest}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </Box>
    );
  }
}

export default UploadImage;
