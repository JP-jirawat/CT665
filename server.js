const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const filePath = path.join(process.env.STORY_DIR, "story", "text.txt"); //__dirname

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(`
  <div style="max-width: fit-content;
  margin-left: auto;
  margin-right: auto;">
    <h2 style="text-align: center;">Jirawat Nopchaiaumnuychock / jirawat</h2>
    <h3 style="text-align: center;">ID: 65130029</h3>
    <img src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/342380657_247656284461489_983208231865697139_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG2b2oKicTd6uIeJCT9mr5pLnYmwH92C9wudibAf3YL3OVobJQHz10zZop-tfr6xEJVNB9Z6-DgF-f3tG4g7jEF&_nc_ohc=cMJgF92C8zwQ7kNvgFkqUD5&_nc_ht=scontent.fbkk29-1.fna&oh=00_AYCs7BtmZP_vSy5Pn8R7JRbDwepqLhHUoHVpksLqm6ZOMA&oe=664F7EA0"/>
    <a href="/myresearch" style="text-align: center;">My Research</a> 
    <a href="/researchplan" style="text-align: center;">My Research Plan</a> 
   </div>  
    `);
});

app.get("/myresearch", (req, res) => {
  return res.send(`
    <p>ในยุคสมัยของเทคโนโลยี 5G ทำให้เกิดเทคโนโลยีใหม่ๆเกิดขึ้นมากมาย เช่น ระบบขับรถอัตโนมัติ ระบบผ่าตัดทางไกล ควบคุมรถตักโรงงานถ่านหิน ซึ่งปัจจัยที่สำคัญที่ทำให้เกิดเทคโนโลยีดังกล่าวขึ้นมาได้ คือ 
    ค่าความของหน่วงวลา (Latency) ซึ่งมีความสำคัญอย่างมาก ระบบดังกล่าวหากมีความคลาดเคลื่อนของเวลา
    เพียงเล็กน้อย อาจเป็นเหตุให้เกิดความเสียหายต่อชีวิตและทรัพย์สินได้ ค่าความหน่วงของเวลาจึงเป็นเรื่องที่
    สำคัญมาก อีกทั้งโปรโตคอลที่ใช้ในการวัดและตรวจสอบประสิทธิภาพของเครือข่ายในปัจจุบันมีหลากหลาย 
    อาจทำให้ค่าที่วัดได้เป็นค่าที่ไม่ละเอียด ไม่เหมาะสมกับการใช้งาน งานวิจัยนี้จึงทำการเปรียบเทียบ 2 โปรโตคอลได้แก่ ICMP (Internet Control Message Protocol), และ TWAMP (Two-Way Active Measurement Protocol) เพื่อให้ค่าหน่วงเวลาที่ได้มีความเหมาะสม ตามความต้องการและเป้าหมายที่เกี่ยวข้องกับการทดสอบและปรับปรุงเครือข่ายได้อย่างมีประสิทธิภาพสูงสุด
    การทำงานของ Router จะถูกแยกการทำงานเป็น 2 ส่วน คือ 1)CPU control plane ซึ่งจะทำหน้าที่ในการสร้างเส้นทางระหว่างต้นทางไปยังปลายทาง เช่น การทำงานของ routing protocol ต่าง ๆ การทำงานของ ARP table ในเครือข่าย MPLS ก็จะใช้งาน control plane ในการสร้างและส่งต่อข้อมูล label หรือนำมาสร้าง LFIB table เป็นต้น 2)CPU Data Plane ทำหน้าที่ในการส่งต่อข้อมูลของผู้ใช้ปลายทาง ตัวอย่างเช่น เราเตอร์ใน IP network จะทำการส่งต่อแพ็คเก็ตจากข้อมูลใน FIB table ส่วนเราเตอร์ที่ทำงานอยู่ในเครือข่าย MPLS 
    ก็จะส่งต่อแพ็คเก็ตโดยใช้ข้อมูลจาก LFIB table เป็นต้น    
    </p>
    <a href="/">Home</a>
    `);
});

app.get("/researchplan", (req, res) => {
  return res.send(`
    <table border="1"style="border-collapse: collapse;">
    <tr>
      <th>Work</th>
      <th>October</th>
      <th>November</th>
      <th>December</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
      <th>April</th>
      <th>May</th>
      <th>June</th>
      <th>July</th>
      <th>August</th>

    </tr>
    <tr>
      <td>ศึกษาปัญหา</td>
      <td>start</td>
      <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>literature review</td>  
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ออกแบบโครงสร้างการทดลอง</td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ลงมือ coding สถาปัตยกรรม MVC</td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>
    <tr>
        <td>ลงมือ coding สถาปัตยกรรม Front-end/Back-end</td> 
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบ unit-test ทั้ง 2 แบบ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบการทำงานจริงและบันทึกผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ประเมินผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
    </tr>
    <tr>
        <td>สรุป</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
    </tr>
</tr>
  </table>
  <a href="/">Home</a>
`);
});

app.get("/rest/researchplan", (req, res) => {
  res.status(200).json({
    research: {
      work: {
        problem: "october",
        literature: "november",
        design: "december",
        codingmvc: "january, february",
        codingfrontendbackend: "march, april, may",
        unittest: "june",
        test: "july",
        result: "august",
        conclusion: "august",
      },
    },
  });
});

app.listen(3000);
