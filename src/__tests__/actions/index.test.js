import React from 'react';
import { addRecipe, removeFromCalendar } from '../../actions/index.js'

test('Add a Recipe', () => {
    expect(addRecipe({ day:{}, recipe:{}, meal:{}})).toEqual({
        type: 'ADD_RECIPE',
        day:{},
        recipe:{},
        meal:{},
      });
});

test('Remove from calendar', () => {
    expect(removeFromCalendar({ day:{}, meal:{}})).toEqual({
        type: 'REMOVE_FROM_CALENDAR',
        day:{},
        meal:{},
      });
});
