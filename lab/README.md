
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


#### Bước 5.1 : Cài đặt PyTorch CUDA
```bash
pip install torch==2.1.2+cu118 torchvision==0.16.2+cu118 torchaudio==2.1.2+cu118 --index-url https://download.pytorch.org/whl/cu118
```

#### Bước 5.2: Cài đặt các thư viện cần thiết
```bash
pip install -r requirements.txt
```

#### Bước 6: Đăng ký kernel cho Jupyter
```bash
python -m ipykernel install --user --name lab-venv --display-name "Python (lab-venv)"
```
