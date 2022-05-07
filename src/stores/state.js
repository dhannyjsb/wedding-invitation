import { defineStore } from "pinia"

export const useState = defineStore('state', {
  state() {
    return {
      isAudioPlay: false,
      messages: [
        {
          guestName: 'Andika',
          guestStatus: true,
          guestMessage: 'Suscipit. Ut consectetuer leo vehicula augue. Aliquam cursus. Integer pharetra rhoncus.',
          timestamp: '2022-05-06 12:00'
        },
        {
          guestName: 'Rahmawati',
          guestStatus: true,
          guestMessage: 'Suscipit. Ut consectetuer leo vehicula augue. Aliquam cursus. Integer pharetra rhoncus.',
          timestamp: '2022-05-05 14:11'
        },
        {
          guestName: 'Sebastian',
          guestStatus: false,
          guestMessage: 'Suscipit. Ut consectetuer leo vehicula augue. Aliquam cursus. Integer pharetra rhoncus.',
          timestamp: '2022-05-05 11:00'
        }
      ]
    }
  },
  actions: {
    sumbitMessage( form ) {
      // Destructuring form
      const { guestName, guestStatus, guestMessage } = form
      const timestamp = new Date().toLocaleString()

     // Push
      try {
        this.messages.push({ guestName, guestStatus, guestMessage, timestamp })
        return true
      } catch(err) { return err }
    }
  }
})
