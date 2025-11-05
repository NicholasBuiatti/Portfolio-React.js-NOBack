import { create } from "zustand";

export const useMessageStore = create((set, get) => ({
  messages: [],

  isLoading: false,
  error: null,

  sendMessage: async (messageData) => {
    set({ isLoading: true, error: null });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (Math.random() < 0.05) {
        throw new Error("Errore nell'invio del messaggio");
      }
      
      // Crea un nuovo messaggio con timestamp
      const newMessage = {
        id: Date.now(),
        ...messageData,
        timestamp: new Date().toISOString(),
        status: 'sent'
      };
      
      // Aggiunge il messaggio alla lista
      const { messages } = get();
      set({ 
        messages: [...messages, newMessage],
        isLoading: false 
      });
      
      return newMessage;
      
    } catch (error) {
      set({ 
        error: error.message,
        isLoading: false 
      });
      throw error;
    }
  },

  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));