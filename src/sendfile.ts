import * as ssh2 from "ssh2";

let client = new ssh2.Client();

client.connect({
    host : '203.151.27.183',
    port: 22,
    username: 'train',
    password: 'train'
});

client.on('ready', ()=> {
    client.sftp( (err, _sftp) => {
        _sftp.fastPut("README.md", "/home/train/sommaik.md", (err)=>{
            console.log(err);
            client.end();
        });
    });
})