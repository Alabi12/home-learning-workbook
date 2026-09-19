// src/core/events.js
// Minimal event bus for cross-module communication.

export function createEventBus() {
  const listeners = new Map();

  return {
    on(event, handler) {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event).add(handler);
      return () => listeners.get(event)?.delete(handler);
    },

    off(event, handler) {
      listeners.get(event)?.delete(handler);
    },

    emit(event, payload) {
      listeners.get(event)?.forEach((h) => {
        try {
          h(payload);
        } catch (err) {
          console.error(`[events] handler for "${event}" failed`, err);
        }
      });
    }
  };
}