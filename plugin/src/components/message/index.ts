import { ComponentPublicInstance, createApp } from 'vue';

import Message from './message.vue';

const messageInstanceList: ComponentPublicInstance[] = [];

const MessageService = {
  open: (content: string) => {
    const messageBox = document.createElement('div');
    const messageApp = createApp(Message, {
      content,
      close: () => {
        document.body.removeChild(messageBox);
        messageInstanceList.pop();
        messageApp.unmount();
      },
    });
    const messageInstance = messageApp.mount(messageBox) as any;
    document.body.appendChild(messageBox);
    const messageInstanceListLength = messageInstanceList.length;
    const topHeight =
      messageInstanceListLength === 0
        ? 10
        : (messageInstanceListLength + 1) * 10 + messageInstanceListLength * 42;
    messageInstance.setTopHeight(topHeight);
    messageInstance.setVisible(true);
    messageInstanceList.push(messageInstance);
  },
};

export { Message, MessageService };
