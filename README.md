# Smart Content Hub (React Native / Expo)

ต้นแบบแอปสำหรับงานกลุ่ม มี Drawer 3 เมนู, Bottom Tabs 4 เมนู และ Stack สำหรับหน้ารายละเอียดบทเรียน

## วิธีติดตั้งและรัน

1. ติดตั้ง Node.js รุ่น LTS
2. แตกไฟล์ ZIP แล้วเปิด Terminal ในโฟลเดอร์ `smart-content-hub`
3. ติดตั้งแพ็กเกจ: `npm install`
4. เริ่มโปรเจกต์: `npx expo start`
5. สแกน QR ด้วย Expo Go หรือกด `a` เพื่อเปิด Android Emulator

## โครงสร้างไฟล์

- `App.js` จุดเริ่มต้นของแอป
- `navigation/RootStack.js` จัดการ Stack และหน้ารายละเอียด
- `navigation/AppDrawer.js` เมนู Drawer 3 รายการ
- `navigation/MainTabs.js` เมนู Tab 4 รายการ
- `screens/` หน้าจอทั้งหมด
- `data/topics.js` ข้อมูลบทเรียนและสมาชิกตัวอย่าง

## จุดที่ควรแก้ก่อนส่งงาน

- แก้ชื่อสมาชิกและหน้าที่ใน `data/topics.js`
- เพิ่มภาพหน้าจอแอปจริงในรายงาน
- ทดสอบทุกเมนูและบันทึกภาพผลการทดสอบ
- หากต้องใช้ GitHub JSON จริง ให้เปลี่ยนฟังก์ชัน `loadDemo` ใน `screens/ExploreScreen.js` เป็น `fetch()` และจัดการ Loading/Error

ข้อมูลทั้งหมดเป็นตัวอย่างสำหรับพัฒนาและสาธิต ไม่ใช่ข้อมูลสมาชิกจริงหรือ API จริง
