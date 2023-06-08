type Props = {
  disabled: boolean;
  onSendMessage: (disabled, message: string) => void;
}

export const Footer = ({ onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput 
          disabled={disabled}
          onSend={onSendMessage}
        />
        <div className="pt-3 text-center text-xs text-gray-300">
          Feito por 
          <a target="_blank" href="https://www.linkedin.com/in/rafaelly-lemos/" className="underline"> 
          Rafaelly Lemos
          </a>. Permitida a cópia e uso para qualqur fim<br/>

        </div>
      </div>
    </footer>
  );
} 