# Hệ thống ứng dụng AI Agent trong quản lý học tập sinh viên

**Thực hiện bởi:**  
[@lk-vinh](https://github.com/hacmadaosi)

---

## Mục tiêu nghiên cứu

Xây dựng và triển khai hệ thống AI Agent tích hợp vào hệ thống quản lý học tập nhằm hỗ trợ tổng hợp tài liệu học tập và gợi ý lộ trình học tập cá nhân hóa dựa trên cấu trúc các khóa học sẵn có, thông qua việc ứng dụng mô hình ngôn ngữ lớn kết hợp kỹ thuật truy xuất tri thức và các cơ chế suy luận phù hợp, qua đó nâng cao độ tin cậy của nội dung phản hồi, tăng tính linh hoạt trong việc khai thác học liệu và cải thiện hiệu quả hỗ trợ quá trình tự học của sinh viên trong môi trường giáo dục đại học.

## Giao diện người dùng

### Giao diện hội thoại

![Chat UI](https://github.com/user-attachments/assets/1d757aa0-3e9c-47f9-9a33-bde0a7ebdccd)

Giao diện hội thoại cho phép sinh viên tương tác trực tiếp với AI Agent để:
- Đặt câu hỏi liên quan đến nội dung học tập
- Nhận giải thích và ví dụ theo ngữ cảnh
- Được gợi ý lộ trình học phù hợp với năng lực cá nhân

---

## Nghiên cứu AI Agent

Thư mục triển khai các thử nghiệm và mô-đun AI Agent:
@root/lab

### Hướng dẫn thiết lập môi trường

#### Bước 1: Di chuyển đến thư mục lab
```bash
cd lab
```

#### Bước 2: Tạo môi trường ảo Python
```bash
py -3.10 -m venv .venv
```

#### Bước 3: Kích hoạt môi trường ảo
- **Windows**
```bash
.venv\Scripts\activate
```

- **Linux/macOS**
```bash
source .venv/bin/activate
```

#### Bước 4: Nâng cấp công cụ quản lý gói (pip)
```bash
python -m pip install --upgrade pip
```

#### Bước 5: Cài đặt các thư viện cần thiết
```bash
pip install -r requirements.txt
```

#### Bước 6: Đăng ký kernel cho Jupyter
```bash
python -m ipykernel install --user --name lab-venv --display-name "Python (lab-venv)"
```
