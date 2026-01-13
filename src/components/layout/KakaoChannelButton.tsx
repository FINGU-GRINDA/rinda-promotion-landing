"use client";

import { MessageCircle } from "lucide-react";

interface KakaoChannelButtonProps {
  channelUrl?: string;
}

export default function KakaoChannelButton({
  channelUrl = "https://pf.kakao.com/_your_channel_id", // Replace with actual Rinda channel URL
}: KakaoChannelButtonProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none flex justify-center">
      <div className="w-full max-w-[480px] relative">
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-28 right-5 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center transition-transform hover:scale-110 hover:shadow-xl pointer-events-auto"
          aria-label="카카오톡 상담"
        >
          <MessageCircle className="w-5 h-5 text-n-black" />
        </a>
      </div>
    </div>
  );
}
