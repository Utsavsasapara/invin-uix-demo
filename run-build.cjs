const { execSync } = require('child_process');
const fs = require('fs');

try {
  const result = execSync('npx vite build', {
    cwd: __dirname,
    encoding: 'utf8',
    timeout: 90000,
    stdio: 'pipe',
  });
  fs.writeFileSync(__dirname + '/build-result.txt', 'SUCCESS\n' + result);
} catch (e) {
  const output = 'FAILED (exit ' + e.status + ')\nSTDOUT:\n' + (e.stdout || '') + '\nSTDERR:\n' + (e.stderr || '');
  fs.writeFileSync(__dirname + '/build-result.txt', output);
}
