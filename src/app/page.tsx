"use client"

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Chat } from "@/types/Chat";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>(); 
  const [AILoading, setAILoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () => {
    if(AILoading) return;

    setChatActiveId('');
    setChatList([]);
  }

  const handleNewChat = () => {
    if(AILoading) return;

    setChatActiveId('');
    closeSidebar();
  }

  const handleSendMessege = (message: string) => {
if(!chatActiveId) {
  let newChatId = uuidv4();
  setChatList([{
    id: newChatId,
    title: message,
    messages: [
      { id: uuidv4(), author: 'me', body: message }
    ]
  },...chatList])
} else {
  //Updating existing chat
}
  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >

      </Sidebar>
      <section className="flex flex-col w-full">
       
        <Header 
          openSidebarClick={openSidebar}
          title={`blablabla`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />

        <Footer 
          onSendMessage={handleSendMessege}
          disabled={AILoading}
        />

      </section>
    </main>
  );
}

export default Page;