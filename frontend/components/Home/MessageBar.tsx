'use client';
import React, { useRef, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../ui/button';
import { ArrowRight, CirclePlus, Plus, SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "sonner";
import FileCard from '../ui/components/CustomFileCard';


interface MessageBarProps {
  className?: string;
}

const LINE_HEIGHT = 24;
const MAX_ROWS = 10;

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];

const MessageBar = ({ className }: MessageBarProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Kiểm tra loại file
    const isTypeValid = ALLOWED_TYPES.includes(file.type) ||
      ALLOWED_EXTENSIONS.some(ext => file.name.toLowerCase().endsWith(ext));

    if (!isTypeValid) {
      return {
        valid: false,
        error: `Định dạng không được hỗ trợ. Chỉ chấp nhận ${ALLOWED_EXTENSIONS.join(', ')}`
      };
    }

    // Kiểm tra kích thước file
    if (file.size > MAX_FILE_SIZE) {
      return {
        valid: false,
        error: `File quá lớn. Tối đa ${MAX_FILE_SIZE / (1024 * 1024)}MB`
      };
    }

    return { valid: true };
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedFiles = e.target.files;
      if (!selectedFiles || selectedFiles.length === 0) return;

      const validFiles: File[] = [];
      const errors: string[] = [];

      Array.from(selectedFiles).forEach(file => {
        const validation = validateFile(file);
        if (validation.valid) {
          validFiles.push(file);
        } else if (validation.error) {
          errors.push(`${file.name}: ${validation.error}`);
        }
      });


      if (validFiles.length > 0) {
        setFiles(prev => [...prev, ...validFiles]);
      }

      // // Hiển thị lỗi nếu có
      if (errors.length > 0) {
        toast.error(`Có ${errors.length} file không hợp lệ:\n${errors.join('\n')}`);
      }

      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (error) {
      console.error("Error handling file change:", error);
    }


  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const el = textareaRef.current;
    if (!el) return;

    setMessage(el.value);
    console.log("Message:", el.value);

    el.style.height = "auto";
    const maxHeight = LINE_HEIGHT * MAX_ROWS;

    if (el.scrollHeight > maxHeight) {
      el.style.height = maxHeight + "px";
      el.style.overflowY = "auto";
    } else {
      el.style.height = el.scrollHeight + "px";
      el.style.overflowY = "hidden";
    }
  };

  return (
    <div className={`w-full h-fit flex justify-center pb-4 ${className}`} >
      <div className='w-5/12 flex flex-col gap-2'>
        <div className="grid grid-cols-2 gap-2">
          {files.map((file, index) => (
            <FileCard
              key={`${file.name}-${index}`}
              file={file}
              onRemove={() =>
                setFiles((prev) => prev.filter((_, i) => i !== index))
              }
            />
          ))}
        </div>
        <div className='border px-4 pb-4 pt-2 rounded-4xl'>
          <Textarea
            ref={textareaRef}
            className="resize-none leading-relaxed border-0 py-2 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-0"
            value={message}
            rows={1}
            placeholder='Soạn nội dung...'
            onInput={handleInput}
          />
          <div className='flex  items-center justify-between'>
            <div className='flex items-center justify-center active:scale-95 cursor-pointer gap-2 border rounded-full px-2 py-1'
              onClick={openFileDialog}
            >
              <Plus size={20} />
              <span className='text-xs'>Thêm tệp</span>
            </div>
            <div className='bg-black p-2 rounded-full cursor-pointer active:scale-95'><ArrowRight size={20} color='white' /></div>
          </div>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBar