"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Apnar WhatsApp number eikhane boshan (Country code shoho, kintu '+' chara)
  const phoneNumber = "88017XXXXXXXX"; 
  const message = "Hello Aboard Study! I'm interested in studying in Malaysia. Can you help me?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-28 right-8 z-50 flex flex-col items-center">
      {/* Tooltip/Label */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mb-2 bg-white text-slate-800 text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl uppercase tracking-wider border border-slate-100 hidden md:block"
      >
        Chat with us
      </motion.div>

      {/* Actual Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-green-200 group"
      >
        {/* Pulse Effect Animation */}
        <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-25 group-hover:hidden"></span>
        
        <MessageCircle size={30} fill="currentColor" className="relative z-10" />
        
        {/* Small Notification Dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;