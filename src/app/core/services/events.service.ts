import {Injectable} from '@angular/core';
import {EventCategory} from '../models/event-category';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  categories = [
    {
      id: 0,
      name: 'Cycling'
    },
    {
      id: 1,
      name: 'Hiking'
    },
    {
      id: 2,
      name: 'Cooking'
    },
    {
      id: 3,
      name: 'Rock climbing'
    },
    {
      id: 4,
      name: 'Yoga'
    },
    {
      id: 5,
      name: 'Fencing'
    },
    {
      id: 6,
      name: 'Swimming'
    },
    {
      id: 7,
      name: 'Badminton'
    },
    {
      id: 8,
      name: 'Running'
    },
    {
      id: 9,
      name: 'Dance'
    }
  ];

  constructor() {
  }

  getEventCategories(): EventCategory[] {
    return this.categories;
  }

  getEventCategoryById(id: number): EventCategory {
    let categoryById = null;
    this.categories.forEach((category) => {
      if (category.id === id) {
        categoryById = category;
      }
    });
    return categoryById;
  }
}
