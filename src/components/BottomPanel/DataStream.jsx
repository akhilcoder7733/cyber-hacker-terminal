import React, { useState, useEffect } from "react";
import "./DataStream.css";

const DataStream = ({ title, type }) => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newLine;
      switch (type) {
        case "network": {
          const networkData = [
            `→ 192.168.1.100:22 SSH established`,
            `← 192.168.1.100:80 HTTP/200 OK`,
            `→ 192.168.1.100:443 TLS handshake`,
            `← 192.168.1.100:53 DNS response`,
            `→ 192.168.1.100:21 FTP login`,
          ];
          newLine = networkData[Math.floor(Math.random() * networkData.length)];
          break;
        }
        case "memory": {
          const memAddr = Math.floor(Math.random() * 0xffffffff)
            .toString(16)
            .toUpperCase();
          const memData = Array(8)
            .fill(0)
            .map(() =>
              Math.floor(Math.random() * 256)
                .toString(16)
                .padStart(2, "0")
            )
            .join(" ");
          newLine = `0x${memAddr.padStart(8, "0")}: ${memData}`;
          break;
        }
        case "keys": {
          const keys = [
            "A1B2-C3D4",
            "E5F6-G7H8",
            "I9J0-K1L2",
            "M3N4-O5P6",
            "Q7R8-S9T0",
          ];
          newLine = `Key: ${
            keys[Math.floor(Math.random() * keys.length)]
          }-${Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0")}`;
          break;
        }
        default: {
          newLine = "Data stream...";
        }
      }

      setLines((prev) => [...prev.slice(-4), newLine]);
    }, 1000);

    return () => clearInterval(interval);
  }, [type]);

  return (
    <div className="panel-section">
      <div className="panel-title">{title}</div>
      <div className="stream-container">
        {lines.map((line, index) => (
          <div key={index} className="data-line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataStream;
