const http = require('http');

const PORT = 64680;
const ruleId = "typescript.react.portability.i18next.jsx-not-internationalized.jsx-not-internationalized";
const vulnerabilityClass = "typescript.react.portability.i18next.jsx-not-internationalized";

const suppressions = [
  // BrochureSection.tsx
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\BrochureSection.tsx",
    codeSnippet: "              Free Download",
    lineNumber: 133
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\BrochureSection.tsx",
    codeSnippet: "              Get Our Complete{\" \"}",
    lineNumber: 136
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\BrochureSection.tsx",
    codeSnippet: "              <span className=\"gradient-text\">Product Brochure</span>",
    lineNumber: 137
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\BrochureSection.tsx",
    codeSnippet: "              Download our comprehensive product catalogue featuring detailed",
    lineNumber: 139
  },
  
  // HeroSection.tsx
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\HeroSection.tsx",
    codeSnippet: "            <span className=\"text-white\">Powering </span>",
    lineNumber: 121
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\HeroSection.tsx",
    codeSnippet: "            <span className=\"gradient-text\">Agriculture</span>",
    lineNumber: 122
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\HeroSection.tsx",
    codeSnippet: "            <span className=\"text-white\">with </span>",
    lineNumber: 124
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\HeroSection.tsx",
    codeSnippet: "            <span className=\"text-accent\">Precision</span>",
    lineNumber: 125
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\HeroSection.tsx",
    codeSnippet: "            <span className=\"text-white\"> Machinery</span>",
    lineNumber: 126
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\HeroSection.tsx",
    codeSnippet: "            Trusted manufacturer of high-performance Decorticators, Threshers, and Separators —",
    lineNumber: 134
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\HeroSection.tsx",
    codeSnippet: "              Explore Machinery",
    lineNumber: 146
  },
  {
    filePath: "e:\\Veer_Sanitized_Backup\\D_Drive\\Alll Websites\\Jay patel\\src\\components\\HeroSection.tsx",
    codeSnippet: "          <span className=\"text-[10px] uppercase tracking-widest\">Scroll</span>",
    lineNumber: 196
  }
];

function suppress(index) {
  if (index >= suppressions.length) {
    console.log("All suppressions processed successfully!");
    process.exit(0);
  }
  
  const item = suppressions[index];
  const postData = JSON.stringify({
    filePath: item.filePath,
    ruleId: ruleId,
    codeSnippet: item.codeSnippet,
    vulnerabilityClass: vulnerabilityClass,
    reason: "Accepted Risk"
  });
  
  console.log(`Sending suppression for: "${item.codeSnippet.trim()}"...`);
  
  const req = http.request({
    hostname: '127.0.0.1',
    port: PORT,
    path: '/ignore',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log(`Response: ${data}`);
      suppress(index + 1);
    });
  });
  
  req.on('error', (err) => {
    console.error(`Error sending suppression: ${err.message}`);
    suppress(index + 1);
  });
  
  req.write(postData);
  req.end();
}

suppress(0);
