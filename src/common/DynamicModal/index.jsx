import React from 'react';
import { Modal } from 'antd';

const DynamicModal = (props) => {
  return (
    <Modal
      open={props.open}
      closable={props.closable ? props.closable : false}
      onCancel={props.close}
      footer={props.footer ?? null}
      width={props.width}
      title={props.title}
      bodyStyle={{ height: props.height }}
      style={{
        top: '5vh',
        minHeight: '80vh',
      }}
    >
      {props.component && props.component}
    </Modal>
  );
};

export default DynamicModal;
