import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class EventsService {

  private listeners = {};
  private subject = new EventEmitter();
  private eventObserver = this.subject.asObservable();

  constructor() {

    this.eventObserver.subscribe(({ name, args }) => {
      if (this.listeners[name]) {
        for (const listener of this.listeners[name]) {
          listener.callback(args);
        }
      }
    });

  }

  public registerEvent(eventName: string, identifier, callback: any) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    let eventExist = false;
    for (const listener of this.listeners[eventName]) {
      if (listener.identifier === identifier) {
        eventExist = true;
        break;
      }
    }

    if (!eventExist) {
      this.listeners[eventName].push({ identifier, callback });
    }
  }

  public unregisterEvent(identifier: string, eventName: string) {
    if (this.listeners[eventName]) {
      for (let i = 0; i < this.listeners[eventName].length; i++) {

        if (this.listeners[eventName][i].identifier === identifier) {
          this.listeners[eventName].splice(i, 1);
          break;
        }
      }
    }
  }


  emit(name: string, ...args: any[]) {
    this.subject.next({ name, args });
  }

  delayedEmit(delay: number, name: string, ...args: any[]) {
    setTimeout(() => {
      this.subject.next({ name, args });
    }, delay);
  }
}
