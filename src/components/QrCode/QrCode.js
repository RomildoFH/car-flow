import React from 'react';
import QRCode from 'react-qr-code';
import PropTypes from 'prop-types';
import './QrCode.css';

function QrCode(props) {
  const { url, setQrCode } = props;

  const handleClick = ({ target }) => {
    const { name } = target
    
    switch (name) {
      case 'close':
        setQrCode(false);
        break;
      case 'print':
          window.print();
          break;
      default:
        break;
    }
  };

  return (
    <div className="qrcode-container">
      <button type="button" onClick={(e) => handleClick(e)} id="close-qrcode" name="close">X</button>
      <button type="button" onClick={(e) => handleClick(e)} id="print-qrcode" name="print">🖨</button>
      <section className="qrcode-pop-up">
        <QRCode
          size={200}
          bgColor="white"
          fgColor="black"
          value={ url }
          className="qrcode-image"
        />
      </section>
    </div>
  )
}

QrCode.propTypes = {
  url: PropTypes.string,
  setQrCode: PropTypes.func,
}

export default QrCode