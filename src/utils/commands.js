// src/utils/commands.js
export const processCommand = (command, setTerminalLines) => {
  const cmd = command.toLowerCase();

  const typeSequence = (lines, delay, setTerminalLines) => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, line]);
      }, i * delay);
    });
  };

  switch (cmd) {
    case "help":
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Available commands:" },
        { type: "output", text: "  scan       - Start network scan" },
        { type: "output", text: "  exploit    - Run exploit on target" },
        { type: "output", text: "  dump       - Dump memory contents" },
        { type: "output", text: "  crack      - Crack encryption" },
        { type: "output", text: "  locate     - Find fake mobile IP" },
        { type: "output", text: "  download   - Download data package" },
        { type: "output", text: "  spoofmac   - Spoof device MAC address" },
        { type: "output", text: "  encrypt    - Encrypt file with RSA-4096" },
        { type: "output", text: "  netjammer  - Disrupt nearby WiFi signals" },
        { type: "output", text: "  status     - Show system status" },
        { type: "output", text: "  clear      - Clear terminal" },
      ]);
      break;

    case "spoofmac":
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Spoofing MAC address..." },
      ]);
      setTimeout(() => {
        const fakeMac = Array(6)
          .fill(0)
          .map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0'))
          .join(":");
        setTerminalLines((prev) => [
          ...prev,
          { type: "success", text: `New MAC address: ${fakeMac}` },
        ]);
      }, 1500);
      break;

    case "encrypt":
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Encrypting file with RSA-4096..." },
      ]);
      setTimeout(() => {
        setTerminalLines((prev) => [
          ...prev,
          { type: "output", text: "Generating private/public key pair..." },
        ]);
        setTimeout(() => {
          setTerminalLines((prev) => [
            ...prev,
            { type: "success", text: "Encryption successful! File: secret.enc" },
          ]);
        }, 1500);
      }, 1000);
      break;

    case "netjammer":
      setTerminalLines((prev) => [
        ...prev,
        { type: "warning", text: "Initiating WiFi jamming sequence..." },
      ]);
      setTimeout(() => {
        let jamProgress = 0;
        const interval = setInterval(() => {
          jamProgress += Math.random() * 25;
          setTerminalLines((prev) => [...prev, { type: "output", text: `Disruption signal: ${Math.min(Math.floor(jamProgress), 100)}%` }]);
          if (jamProgress >= 100) {
            clearInterval(interval);
            setTerminalLines((prev) => [...prev, { type: "success", text: "WiFi signals disrupted on 2.4GHz/5GHz bands" }]);
          }
        }, 400);
      }, 700);
      break;

    // Original commands below...
    case "scan":
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Initializing network scan..." },
      ]);
      setTimeout(() => {
        setTerminalLines((prev) => [
          ...prev,
          { type: "output", text: "Scanning 192.168.1.0/24..." },
        ]);
        setTimeout(() => {
          setTerminalLines((prev) => [
            ...prev,
            { type: "success", text: "Host 192.168.1.100 is up (0.0023s latency)" },
            { type: "output", text: "Open ports: 22/tcp, 80/tcp, 443/tcp" },
            { type: "output", text: "OS detection: Linux 3.2 - 5.4" },
            { type: "warning", text: "Vulnerabilities detected: 3 critical, 5 medium" },
          ]);
        }, 1000);
      }, 500);
      break;

    case "exploit":
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Loading exploit: CVE-2023-1234..." },
      ]);
      setTimeout(() => {
        setTerminalLines((prev) => [
          ...prev,
          { type: "warning", text: "Exploiting buffer overflow..." },
        ]);
        setTimeout(() => {
          setTerminalLines((prev) => [
            ...prev,
            { type: "success", text: "Shellcode injected successfully!" },
            { type: "output", text: "Gaining root access..." },
          ]);
          setTimeout(() => {
            setTerminalLines((prev) => [
              ...prev,
              { type: "success", text: "ACCESS GRANTED! Root privileges obtained." },
              { type: "warning", text: "System compromised. You are now root." },
            ]);
          }, 1500);
        }, 1000);
      }, 800);
      break;

    case "dump":
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Dumping memory contents..." },
      ]);
      setTimeout(() => {
        const dumpLines = [];
        for (let i = 0; i < 5; i++) {
          const addr = Math.floor(Math.random() * 0xffffffff).toString(16).toUpperCase();
          const data = Array(16).fill(0).map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, "0")).join(" ");
          dumpLines.push({ type: "output", text: `0x${addr.padStart(8, "0")}: ${data}` });
        }
        setTerminalLines((prev) => [...prev, ...dumpLines]);
      }, 500);
      break;

    case "crack": {
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Initializing quantum cracking algorithm..." },
      ]);
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, { type: "warning", text: "Brute-forcing AES-256..." }]);
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 20;
          setTerminalLines((prev) => [...prev, { type: "output", text: `Progress: ${Math.min(Math.floor(progress), 100)}%` }]);
          if (progress >= 100) {
            clearInterval(interval);
            setTerminalLines((prev) => [...prev, { type: "success", text: "Encryption cracked! Key: A1B2-C3D4-E5F6-G7H8" }]);
          }
        }, 300);
      }, 800);
      break;
    }

    case "locate": {
      setTerminalLines((prev) => [
        ...prev,
        { type: "output", text: "Initiating mobile IP trace..." },
      ]);
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 25;
        setTerminalLines((prev) => [...prev, { type: "output", text: `Locating: ${Math.min(Math.floor(progress), 100)}%` }]);
        if (progress >= 100) {
          clearInterval(interval);
          setTerminalLines((prev) => [
            ...prev,
            { type: "success", text: "Target IP identified: 172.16.254.3 (NODE)" },
            { type: "warning", text: "Warning: Signal route is encrypted via 3 proxies" },
          ]);
        }
      }, 300);
      break;
    }

    case "download":
      setTerminalLines((prev) => [
        ...prev,
        { type: "warning", text: "Exfiltrating data..." },
      ]);
      setTimeout(() => {
        setTerminalLines((prev) => [...prev, { type: "output", text: "Data package: 2.3GB compressed" }]);
        setTerminalLines((prev) => [...prev, { type: "output", text: "Upload speed: 45.2 MB/s" }]);
        setTimeout(() => {
          setTerminalLines((prev) => [...prev, { type: "success", text: "Exfiltration complete! Data secured." }]);
        }, 2000);
      }, 1000);
      break;

    case "status":
      typeSequence(
        [
          { type: "output", text: "=== SYSTEM STATUS ===" },
          { type: "output", text: "CPU Usage: 42%" },
          { type: "output", text: "Memory: 1536 MB" },
          { type: "output", text: "Network: 72.4 Mbps" },
          { type: "output", text: "Active Threads: 24" },
          { type: "output", text: "Attack Progress: 45%" },
        ],
        400,
        setTerminalLines
      );
      break;

    case "clear":
      setTerminalLines([]);
      break;

    default:
      setTerminalLines((prev) => [
        ...prev,
        { type: "error", text: `Command not found: ${command}` },
        { type: "output", text: 'Type "help" for available commands' },
      ]);
  }
};
