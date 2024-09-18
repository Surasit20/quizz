import Link from 'next/link';

const Footer = () => {
  return (
    <div className="h-32 mt-5 flex flex-col gap-2 justify-center items-center bg-dark text-light">
      <p className="text-light text-2xl font-bold">
        <span className="text-secondary">เเบบทดสอบ</span>
        
      </p>
      <p
        className="text-light"
      >
       ขอบคุณที่เข้ามาทำเเบบทดสอบกับเรา
      </p>
      <p
        className="text-light"
      >
        2024
      </p>
    </div>
  );
};

export default Footer;
