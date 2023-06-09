import { ChatMessageItem } from "@/components/ChatMessageItem";
import { ChatMessageLoading } from "@/components/ChatMessageLoading";
import { ChatPlaceholder } from "@/components/ChatPlaceholder";
import { Chat } from "@/types/Chat";

type Props = {
  chat: Chat | undefined;
  loading: boolean;
}

export const ChatArea = ({ chat, loading }: Props) => {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat && chat.messages.map(item => (
        <ChatMessageItem 
          key={item.id}
          item={item}
        />
      ))}
      {loading && <ChatMessageLoading />}
    </section>
  )
}